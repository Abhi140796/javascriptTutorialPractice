'use strict';
const Task = [];
let i = 0;

// html Elements references
const textbox1 = document.getElementById('textboxInputTask');
const list = document.getElementById('list');
const addBtn = document.getElementById('addTask');
const ul = document.createElement('ul');

// function to append literals
// function addElements(listElem, text){    
//     const li = document.createElement('li');
//     var deleteBtn = document.createElement('button');
//     deleteBtn.innerText = "X";
//     deleteBtn.classList.add('deleteBtn');
//     const textnode = document.createTextNode(text);
//     listElem.appendChild(li).appendChild(textnode);
//     li.appendChild(deleteBtn);
// }

// // lis

// Event Listener
addBtn.addEventListener('click', function(event){
    Task[i] = textbox1.value ;
    addElements(list, Task[i])
    i++;
});

function addElements(listElem, text){    
    const li = document.createElement('li');
    const textnode = document.createTextNode(text);
    listElem.appendChild(li).appendChild(textnode);
    var deleteBtn = document.createElement('button');
    deleteBtn.onclick = alert(this.id)
    deleteBtn.innerText = "X";
}

deleteBtn.addEventListener('click', ()=> {
    Task.splice()
})