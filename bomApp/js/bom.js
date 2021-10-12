const favchap = document.querySelector("#favchap");

const button = document.querySelector("button");

const output = document.querySelector(".list");

button.addEventListener("click", () => {
  if (favchap.value != "") {
    // create elements in the list
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    // chage properties... textcontent
    li.textContent = favchap.value;
    deleteButton.textContent = "✘";
    // add button to the li
    li.append(deleteButton);
    output.append(li);

    deleteButton.addEventListener('click', function(){
      output.removeChild(li);
      favchap.focus;
    });
    favchap.value = '';
    favchap.focus;
  }
});
