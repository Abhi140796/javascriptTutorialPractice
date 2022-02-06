'use strict';

// html Elements references
let textbox1 = document.getElementById('textboxInputTask');
let list = document.getElementById('list');
let addBtn = document.getElementById('addTask');
let clearAllBtn = document.getElementById('clearAll');

// Event Listener
addBtn.addEventListener('click', function (event) {
    let textLength = textbox1.value.length;
    if (textLength != 0) {
        let li = document.createElement('li');
        li.classList.add('taskList');
        let deleteBtn = document.createElement('button');
        list.style.border = '1px solid gainsboro';
        li.innerText = textbox1.value;
        deleteBtn.innerText = "X";
        deleteBtn.classList.add('deleteBtn');
        list.appendChild(li);
        li.appendChild(deleteBtn);
        textbox1.value = "";
        // delete button event listener
        deleteBtn.addEventListener('click', () => {
            deleteBtn.parentElement.remove();
        });
    }
    else {
        alert('\"Please enter a task\"');
    }
});

// clear All button eventlistener
clearAllBtn.addEventListener('click', () => {
    list.innerHTML = " ";
});
