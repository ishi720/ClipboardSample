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
    
    // コピーするコンテンツを複製
    const clone = richContent.cloneNode(true);

    // スタイルを抽出して適用
    const styleSheets = Array.from(document.styleSheets);

    let styleContent = "";
    styleSheets.forEach(sheet => {
        const rules = Array.from(sheet.cssRules || []);
        rules.forEach(rule => {
            styleContent += rule.cssText + "\n";
        });
    });

    // 抽出したスタイルを<style>タグに追加
    const styleTag = document.createElement("style");
    styleTag.textContent = styleContent;

    // 新しいHTML構造を作成
    const container = document.createElement("div");
    container.appendChild(styleTag);
    container.appendChild(clone);

    // HTMLコンテンツをコピー
    navigator.clipboard.write([new ClipboardItem({
        "text/plain": new Blob([richContent.innerText], { type: "text/plain" }),
        "text/html": new Blob([container.innerHTML], { type: "text/html" })
    })]);
}