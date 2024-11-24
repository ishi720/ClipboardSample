// プレーンテキストをコピー
function copyPlainText() {
    const textContent = document.getElementById("message").innerText;
    navigator.clipboard.writeText(textContent);
}

// HTMLコンテンツをコピー
function copyHTML() {
    const htmlContent = document.getElementById("message").innerHTML;
    navigator.clipboard.writeText(htmlContent);
}

// リッチテキスト（HTML形式）をコピー
function copyRichText() {
    const richContent = document.getElementById("message");
    navigator.clipboard.write([new ClipboardItem({
        "text/plain": new Blob([richContent.innerText], { type: "text/plain" }),
        "text/html": new Blob([richContent.innerHTML], { type: "text/html" })
    })]);
}