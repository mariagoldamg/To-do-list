const inputField = document.querySelector (`.inputField`);
const button = document.querySelector (`.btn`);
const toDo = document.querySelector (`.toDo`);

inputField.addEventListener (`keypress`, function(e) {
if(e.keyCode ===13){
    play();
}
})

button.addEventListener (`click`, play);
function play () {
    

const item = document.createElement (`li`);
item.innerText = inputField.value;
if (inputField.value.length===0) {return false};
toDo.appendChild(item);

item.innerText
item.classList.add (`toDoAdded`);

toDo.appendChild
inputField.value =``


item.addEventListener (`click`, ()=>  {
    item.classList.add (`toDoComplete`);
})

item. addEventListener (`dblclick`, ()=>  {
    toDo.removeChild (item);
})

};




