// 入力エリアで文字が変更されるたびに実行
document.getElementById("input-text").addEventListener("input", () => {
    // 入力テキストを取得
    const inputText = document.getElementById("input-text").value;

    // 句読点を置換
    const outputText = inputText.replace(/。/g, "．").replace(/、/g, "，");

    // 結果を表示
    document.getElementById("output-text").value = outputText;
});
