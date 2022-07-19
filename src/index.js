const onClickAdd = () => {
  //テキストボックスのElementの取得
  const textEl = document.getElementById("add-text");

  //テキストボックスの値を取得
  const text = textEl.value;

  //テキストボックスを初期化
  textEl.value = "";

  //liタグの生成
  const li = document.createElement("li");

  //divタグの生成
  const div = document.createElement("div");

  //pタグを生成
  const p = document.createElement("p");
  p.textContent = text;

  //buttonタグの生成
  const button = document.createElement("button");
  button.textContent = "削除";

  //ボタンを押したときに行を削除する処理
  button.addEventListener("click", () => {
    const deleteTarget = button.closest("li");

    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  //divタグ配下にpタグとbuttonタグの設定
  div.appendChild(p);
  div.appendChild(button);

  //liタグ配下に上記のdivタグを設定
  li.appendChild(div);

  //メモ一覧リストに上記のliタグを設定
  document.getElementById("memo-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
