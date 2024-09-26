import * as vscode from 'vscode';

export class MoveSimulatorViewProvider implements vscode.WebviewViewProvider {
    public static readonly viewType = 'moveSimulatorView';

    private _view?: vscode.WebviewView;

    constructor(
        private readonly _extensionUri: vscode.Uri,
    ) { }

    public resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken,
    ) {
        this._view = webviewView;

        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this._extensionUri]
        };

        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Move Simulator</title>
        </head>
        <body>
            <h1>Move Simulator</h1>
            <textarea id="codeInput" rows="10" cols="50" placeholder="Enter your Move code here..."></textarea>
            <br>
            <button id="runButton">Run Simulation</button>
            <div id="output"></div>

            <script>
                const vscode = acquireVsCodeApi();
                const runButton = document.getElementById('runButton');
                const codeInput = document.getElementById('codeInput');
                const output = document.getElementById('output');

                runButton.addEventListener('click', () => {
                    const code = codeInput.value;
                    vscode.postMessage({ command: 'runSimulation', code: code });
                });

                window.addEventListener('message', event => {
                    const message = event.data;
                    switch (message.command) {
                        case 'simulationResult':
                            output.innerText = message.result;
                            break;
                    }
                });
            </script>
        </body>
        </html>`;
    }
}
