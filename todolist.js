var itemCount = 1;

function showNoItemText() {
	var noItemText = document.getElementById("noItemText");
	noItemText.style.display = "inline-block";
}

function hideNoItemText() {
	var noItemText = document.getElementById("noItemText");
	noItemText.style.display = "none";
}

function completeItem(id) {
	var chosenItem = document.getElementById(id);
	chosenItem.className = "completedListItem";
	chosenItem.setAttribute("onclick", "removeItem(id)");
	document.getElementById("completedList").appendChild(chosenItem);
	
	// check if there are any items left
	var allListItems = document.getElementsByClassName("listItem");
	var completedItems = document.getElementsByClassName("completedListItem");
	if (allListItems.length === 0 && completedItems.length === 0) {
		showNoItemText();
	}
}

function addItem() {
	var newItem = document.getElementById("newItem").value;
	if (newItem === '') {
		return false;
	}
	else {
		var listItem = document.createElement("p");
		listItem.innerHTML = newItem;
		listItem.setAttribute("id", itemCount);
		listItem.setAttribute("class", "listItem");
		listItem.setAttribute("onclick", "completeItem(id)");
		document.getElementsByClassName("list")[0].appendChild(listItem);
		
		itemCount = itemCount + 1;
		hideNoItemText();
		document.getElementById("addItem").reset();
		return false;
	}
}

function removeItem(id) {
	var chosenItem = document.getElementById(id);
	chosenItem.remove();
	
	// check if there are any items left
	var allListItems = document.getElementsByClassName("listItem");
	var completedItems = document.getElementsByClassName("completedListItem");
	if (allListItems.length === 0 && completedItems.length === 0) {
		showNoItemText();
	}
}

function completeAll() {
	var allListItems = document.getElementsByClassName("listItem");
	while (allListItems.length > 0) {
		completeItem(allListItems[0].id);
	}
}

function deleteAll() {
	var allListItems = document.getElementsByClassName("listItem");
	var completedListItems = document.getElementsByClassName("completedListItem");
	while (allListItems.length > 0) {
		allListItems[0].remove();
	}
	while (completedListItems.length > 0) {
		completedListItems[0].remove();
	}
	showNoItemText();
}

function toggleDisplay() {
	userGuide = document.getElementById("helpText");
	console.log(userGuide);
	if (userGuide.style.display === 'none') {
		userGuide.style.display = 'block';
	} else {
		userGuide.style.display = 'none';
	}
}

// hover display functions
// currently not in use, since it overwrites hover css styling
function completeAllMouseOver() {
	var allListItems = document.getElementsByClassName('listItem');
	for (var i of allListItems) {
		i.style.textDecoration = "line-through";
	}
}

function completeAllMouseOut() {
	var allListItems = document.getElementsByClassName('listItem');
	for (var i of allListItems) {
		i.style.textDecoration = "initial";
	}
}
