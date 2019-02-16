function getToDoList() {
    var toDo = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        toDo = JSON.parse(todos_str); 
    }
    return toDo;
}

function addToDoItem() {
    var LocalToDoList = document.getElementById('LocalToDoList').value;

    var toDo = getToDoList();
    toDo.push(LocalToDoList);
    localStorage.setItem('todo', JSON.stringify(toDo));
	document.getElementById('LocalToDoList').value = '';
    showToDoItem();

    return false;
}

function removeToDoItem() {
    var id = this.getAttribute('id');
    var toDo = getToDoList();
    toDo.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(toDo));

    showToDoItem();

    return false;
}

function showToDoItem() {
    var toDo = getToDoList();

    var html = '<br><ul>';
    for(var i=0; i<toDo.length; i++) {
        html += '<li>' + toDo[i] + "&emsp;" + '<button class="removeToDoItem" id="' + i  + '"> X </button></li><br>';
    };
    html += '</ul>';

    document.getElementById('ToDoListLocal').innerHTML = html;

    var buttons = document.getElementsByClassName('removeToDoItem');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', removeToDoItem);
    };
}

document.getElementById('addToDoLocal').addEventListener('click', addToDoItem);
showToDoItem();