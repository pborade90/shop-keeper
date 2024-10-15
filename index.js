const addBtn = document.querySelector("#add-button")


const deleteItem = (index) => {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.splice(index, 1); // Remove item at the specified index
    localStorage.setItem('items', JSON.stringify(items)); // Save updated array to localStorage
    loadItems(); // Refresh the list after deletion
}

const loadItems = () => {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    const itemList = document.getElementById('shopping-list');
    itemList.innerHTML = ''; // Clear the list
    items.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = item;

        li.addEventListener('dblclick', function () {
            deleteItem(index);
        });

        itemList.appendChild(li);
    });

    if (itemList.innerHTML === "") {
        itemList.innerHTML = "Your cart is empty..."
    }
}

// Function to add item to localStorage and update the displayed list
const addItem = () => {
    const inputField = document.getElementById('input-field');
    let inputValue = inputField.value;

    if (inputValue.trim() !== "") {
        let items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(inputValue); // Add new item to the array
        localStorage.setItem('items', JSON.stringify(items)); // Save updated array to localStorage
        inputField.value = ""; // Clear input field
        loadItems(); // Refresh displayed list
    } else {
        alert("Please enter a value.");
    }
}

addBtn.addEventListener("click", addItem)

window.onload = loadItems;
