import * as vscode from 'vscode';

export class MoveSimulatorViewProvider implements vscode.WebviewViewProvider {

    public static readonly viewType = 'moveSimulatorView';

    constructor(private readonly _extensionUri: vscode.Uri) { }

    public resolveWebviewView(webviewView: vscode.WebviewView, context: vscode.WebviewViewResolveContext, token: vscode.CancellationToken){
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this._extensionUri] // Đảm bảo webview có thể tải tài nguyên cục bộ
        };

        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
    }

    public _getHtmlForWebview(webview: vscode.Webview) {
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Move Simulator</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h1 { color: blue; }
                </style>
            </head>
            <body>
                <h1>Move Simulator Sidebar</h1>
                <p>This is a sample webview for the Move Simulator extension in the sidebar.</p>
            </body>
            </html>`;
    }
}
