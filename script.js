let items = [];
function addOrUpdateItem() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let editingIndex = document.getElementById("editingIndex").value;

  if (name === "" || price === "") {
    alert("Please enter both name and price");
    return;
  }
  if (editingIndex === "") {
    items.push({ name: name, price: price });
  } else {
    items[editingIndex] = { name: name, price: price };
    document.getElementById("editingIndex").value = "";
  }
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  displayItems();
}
function displayItems() {
  let table = document.getElementById("itemTable");
  table.innerHTML = ""; 
  for (let i = 0; i < items.length; i++) {
    let row = `
      <tr>
        <td>${i + 1}</td>
        <td>${items[i].name}</td>
        <td>${items[i].price}</td>
        <td>
          <button onclick="editItem(${i})">Edit</button>
          <button onclick="deleteItem(${i})">Delete</button>
        </td>
      </tr>
    `;
    table.innerHTML += row;
  }
}
function deleteItem(index) {
  items.splice(index, 1);
  displayItems();
}
function editItem(index) {
  document.getElementById("name").value = items[index].name;
  document.getElementById("price").value = items[index].price;
  document.getElementById("editingIndex").value = index;
}