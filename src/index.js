import "./styles.css";

// 難しくてとても作れない！！
const onClickAdd = () => {
  // TODOを入力する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // TODOのひとまとまりのdivを生成する
  const div = document.createElement("div");
  div.className = "list-row";

  // TODOの内容を生成する
  const li = document.createElement("li");
  li.innerText = inputText;

  // 完了ボタンを生成する
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 完了ボタンにクリックイベントを実装する
  completeButton.addEventListener("click", () => {
    // 完了ボタンの親要素を取得する
    const completeTarget = completeButton.parentNode;

    // 未完了のTODOから削除する
    document.getElementById("incomplete-list").removeChild(completeTarget);

    // TODOの内容を取得する
    const text = completeTarget.firstElementChild.innerText;

    // TODOのひとまとまりのdivの中身を空にする
    completeTarget.textContent = null;

    // TODOの内容を生成する
    const li = document.createElement("li");
    li.innerText = text;

    // 戻るボタンを生成する
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // 戻るボタンにクリックイベントを実装する
    backButton.addEventListener("click", () => {
      // 戻るボタンの親要素を取得する
      const todo = backButton.parentNode;

      // 完了したTODOから削除する
      document.getElementById("complete-list").removeChild(todo);

      // TODOの内容を取得する
      const text = todo.firstElementChild.innerText;

      // TODOのひとまとまりのdivの中身を空にする
      todo.textContent = null;

      // TODOの内容を生成する
      const li = document.createElement("li");
      li.innerText = text;

      // 完了ボタンを生成する
      const completeButton = document.createElement("button");
      completeButton.innerText = "完了";

      // 削除ボタンを生成する
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "削除";
      deleteButton.addEventListener("click", () => {
        const deleteTarget = deleteButton.parentNode;
        document.getElementById("incomplete-list").removeChild(deleteTarget);
      });
    });

    completeTarget.appendChild(li);
    completeTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(completeTarget);
  });

  // 削除ボタンを生成する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
