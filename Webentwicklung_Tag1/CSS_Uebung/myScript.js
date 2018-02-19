//"stores" the entries that were made into the form TODO LIST
var toDoListArray = [
"Linda: Nächste Lektion vorbereiten",
"Klasse: HTML lernen",
"Klasse: JavaScript lernen",
"Klasse: CSS lernen"];

window.onload = printList;

//gets the text that was entered into the form fields and inserts them into the toDoListArray
function storeEntries (){
  //get the value from the element "Name"
  var name = document.getElementById ("name").value;
  //get the value from the element TODO
  var todo = document.getElementById ("TODO").value;
  //combine the name and the todo variable into one variable
  var entry = name + ": " + todo;
  //add the variable entry to the toDoListArray
  toDoListArray.push(entry);
  printList();
}

//replaces the div with the id todolist with the value(s) that are stored in the toDoListArray
function printList(){
  var html = "";
  //loops through the toDoListArray and "adds" them to the html variable
  for (var i = 0; i < toDoListArray.length; i++) {
    html += '<li>' + toDoListArray[i] + ' <button onclick="removeItem('+ i +')">x</button></li>';
  }
  //replaces the div (with the id "todolist") with the content of the html variable
  document.getElementById("todolist").innerHTML = html;
}

//this function removes a specific entry that was made from the toDoListArray
function removeItem (arrayIndexNumber){
  //array.splice(index, howmany, item1, ....., itemX)
  //index	Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
  //howmany	Optional. The number of items to be removed. If set to 0, no items will be removed
  //item1, ..., itemX	Optional. The new item(s) to be added to the array
  toDoListArray.splice(arrayIndexNumber,1);
  printList();
}
