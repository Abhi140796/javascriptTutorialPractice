'use strict';

// html Elements references
let textbox1 = document.getElementById('textboxInputTask');
let list = document.getElementById('list');
let addBtn = document.getElementById('addTask');
let clearAllBtn = document.getElementById('clearAll');

// Event Listener
addBtn.addEventListener('click', function (event) {
    let textLength = textbox1.value.length;
    // checking is input empty or not
    if (textLength != 0) {

        // if not then
        // create li element
        let li = document.createElement('li');
        li.classList.add('taskList');

        // create button element
        let deleteBtn = document.createElement('button');

        // setting style property
        list.style.border = '1px solid gainsboro';
        li.innerText = textbox1.value;
        deleteBtn.innerText = "X";
        deleteBtn.classList.add('deleteBtn');

        // appending created elements
        list.appendChild(li);
        li.appendChild(deleteBtn);
        textbox1.value = "";

        // delete button event listener
        deleteBtn.addEventListener('click', () => {
            deleteBtn.parentElement.remove();
        });
    }
    else {
        // if empty alert the user
        alert('\"Please enter a task\"');
    }
});

// clear All button eventlistener
clearAllBtn.addEventListener('click', () => {
    list.innerHTML = " ";
});
