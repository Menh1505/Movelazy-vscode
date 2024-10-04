import * as vscode from 'vscode';
import { MoveSimulatorViewProvider } from './MoveSimulatorViewProvider';
import { MessageHandlerData } from '@estruyf/vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "move-simulator-vscode" is now active!');

	let apiError = ''; // Use a simple variable instead of useState
	let file = new File([], '');
	let privateKey = '';
	let rpcUrl = '';

	const provider = new MoveSimulatorViewProvider(context);

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(MoveSimulatorViewProvider.viewType, provider)
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('move-simulator-vscode.openWebview', () => {
			// Create a WebviewPanel
			const panel = vscode.window.createWebviewPanel(
				'webview',
				'Sample Webview',
				vscode.ViewColumn.One,
				{
					enableScripts: true, // Allow scripts if needed
				}
			);

			// Set HTML content for the webview
			panel.webview.html = provider._getHtmlForWebview(panel.webview);

			// Listen for messages from the webview
			panel.webview.onDidReceiveMessage(async (message) => {
				const { command, requestId, payload } = message;
				switch (command) {
					case "Get_File":
						file = payload.file
						break;
					case "Get_privateKey":
						privateKey = payload.privateKey
						break;
					case "Get_rpcUrl":
						rpcUrl = payload.rpcUrl
						break;
					case "Get_data":
						apiError = ''; // Reset error message
						try {
							// Create a FormData object
							const formData = new FormData();
							if (payload.file) {
								formData.append('file', payload.data.file);
							} else {
								throw new Error('No file selected for upload');
							}
							formData.append('privateKey', payload.data.privatekey);
							formData.append('rpcUrl', payload.data.selectedNetwork);

							// Send POST request with FormData
							const response = await fetch('http://3.107.36.227:3000/upload/solidity', {
								method: 'POST',
								body: formData,
							});

							if (response.ok) {
								const data = await response.json();
								panel.webview.postMessage({
									command,
									requestId, // The requestId is used to identify the response
									payload: data
								} as MessageHandlerData<string>);
								console.log('Success', data);
							} else {
								console.error('Failed to fetch quote:', response.status);
								panel.webview.postMessage({
									command,
									requestId, // The requestId is used to identify the response
									error: response.status
								} as MessageHandlerData<string>);
							}
						} catch (error) {
							console.error('Error during deployment:', error);
							if (error instanceof Error) {
								if (payload.privatekey === '') {
									apiError = 'Fill in the privateKey information';
								} else {
									apiError = error.message || 'Failed to deploy';
								}
							} else {
								apiError = 'An unknown error occurred';
							}
						}
					case "GET_DATA_ERROR":
						if (apiError !== '') {
							panel.webview.postMessage({
								command,
								requestId, // The requestId is used to identify the response
								error: apiError
							} as MessageHandlerData<string>);
						}
				}
			});
		})
	);
}

// async function callApi(file: File, privateKey: string, selectedNetwork: string) {
// 	const url = 'http://3.107.36.227:6666/upload/solidity';
// 	try {
// 		const formData = new FormData();
// 		if (file) {
// 			formData.append('file', file);
// 		} else {
// 			throw new Error('No file selected for upload');
// 		}
// 		formData.append('privateKey', privateKey);
// 		formData.append('rpcUrl', selectedNetwork);

// 		const response = await fetch(url, {
// 			method: 'POST',
// 			body: formData,
// 		});

// 		const data = await response.json();
// 		console.log("Deployment successful:", data);
// 	} catch (error) {
// 		console.error('Error during deployment:', error);
// 	}
// }

export function deactivate() { }