// Add your javascript here
//Funcion to add new items to the list
function addItem() {
    //Get text to add and list element
    const item = document.getElementById("inputText").value;
    const list = document.getElementById("listItems");
    let listLength = list.children.length; //Get list length
    //If there's text in input, it's added to the list
    if (item) {
        let newItem = document.createElement("li"); //Create new list item
        newItem.innerHTML = item; //Add text to new list item
        listLength += 1;
        if (listLength % 3 === 0) { //If it's a third element, it's displayed in red
            newItem.classList.add("red-item");
        }
        
        list.appendChild(newItem); //Add new item to list
    } else {
        alert('Please add some text!')
    }
}
