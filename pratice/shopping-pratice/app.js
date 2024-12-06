const shoppingList = [];

const inputField = document.getElementById("item-input");
const addButton = document.getElementById("add-btn");
const listContainer = document.getElementById("shopping-list");

function addItem() {
  const newItem = inputField.value.trim();
  if (newItem === "") {
    alert("내용을 입력하세요.");
    return;
  }

  const itemObject = {
    id: Date.now(),
    name: newItem,
  };

  shoppingList.push(itemObject);
  updateList();
  inputField.value = "";
}

function updateList() {
  listContainer.innerHTML = "";

  shoppingList.forEach((v) => {
    const listItem = document.createElement("li");
    listItem.textContent = v.name;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      deleteItem(v.id);
    });

    listItem.appendChild(deleteButton);
    listContainer.appendChild(listItem);
  });
}

function deleteItem(id) {
  const index = shoppingList.findIndex((v) => v.id === id);

  shoppingList.splice(index, 1);

  updateList();
}

addButton.addEventListener("click", addItem);
