function getToDoListSession() {
    var todoSession = new Array;
    var todos_session_str = sessionStorage.getItem('todoSession');
    if (todos_session_str !== null) {
        todoSession = JSON.parse(todos_session_str); 
    }
    return todoSession;
}

function addToDoItemSession() {
    var SessionToDoList = document.getElementById('SessionToDoList').value;

    var todoSession = getToDoListSession();
    todoSession.push(SessionToDoList);
    sessionStorage.setItem('todoSession', JSON.stringify(todoSession));
	document.getElementById('SessionToDoList').value = '';
    showToDoItemSession();

    return false;
}

function removeToDoItemSession() {
    var id = this.getAttribute('id');
    var todoSession = getToDoListSession();
    todoSession.splice(id, 1);
    sessionStorage.setItem('todoSession', JSON.stringify(todoSession));

    showToDoItemSession();

    return false;
}

function showToDoItemSession() {
    var todoSession = getToDoListSession();

    var html = '<br><ul>';
    for(var i=0; i<todoSession.length; i++) {
        html += '<li>' + todoSession[i] + "&emsp;" + '<button class="removeToDoItemSession" id="' + i  + '"> X </button></li><br>';
    };
    html += '</ul>';

    document.getElementById('ToDoList').innerHTML = html;

    var buttons = document.getElementsByClassName('removeToDoItemSession');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', removeToDoItemSession);
    };
}

document.getElementById('addToDoSession').addEventListener('click', addToDoItemSession);
showToDoItemSession();