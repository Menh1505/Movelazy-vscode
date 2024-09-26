import * as vscode from 'vscode';
import { MoveSimulatorViewProvider } from './MoveSimulatorViewProvider';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "move-simulator-vscode" is now active!');

	const provider = new MoveSimulatorViewProvider(context.extensionUri);

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(MoveSimulatorViewProvider.viewType, provider)
	);
}

export function deactivate() {}