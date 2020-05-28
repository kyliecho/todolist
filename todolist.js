var itemCount = 0;

function showNoItemText() {
	var noItemText = document.getElementById("noItemText");
	noItemText.style.display = "inline-block";
}

function hideNoItemText() {
	var noItemText = document.getElementById("noItemText");
	noItemText.style.display = "none";
}

function addItem() {
	itemCount = itemCount + 1;
	var newItem = document.getElementById("newItem").value;
	var listItem = document.createElement("p");
	listItem.innerHTML = newItem;
	listItem.setAttribute("id", itemCount);
	listItem.setAttribute("class", "listItem");
	listItem.setAttribute("onclick", "removeItem(id)");
	document.getElementsByClassName("list")[0].appendChild(listItem);
	hideNoItemText();
}

function removeItem(id) {
	var chosenItem = document.getElementById(id);
	chosenItem.remove();
	var allListItems = document.getElementsByClassName("listItem");
	if (allListItems.length === 0) {
		showNoItemText();
	}
}

function deleteAll() {
	var allListItems = document.getElementsByClassName("listItem");
	while (allListItems.length > 0) {
		allListItems[0].remove()
	}
	showNoItemText();
}
