const toDoForm=document.querySelector(".js-toDoForm"),
todoInput=toDoForm.querySelector("input"),
toDoList=document.querySelector(".js-toDoList");

const TODOS_LS="toDos";
let toDos=[];



function deleteToDo(event){
const btn=event.target;
const li=btn.parentNode;
console.log(btn.parentNode);
console.log(li);
toDoList.removeChild(li);
const cleanToDos=toDos.filter(function(toDo){
return toDo.id!==parseInt(li.id);

});
toDos=cleanToDos
saveToDos();
}


function saveToDos(){
  localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}


function paintTodo(text){
  const li=document.createElement("li");
  const delBtn=document.createElement("button");
  delBtn.innerHTML="❌";
  const newId=toDos.length+1;
  delBtn.addEventListener("click",deleteToDo);
  const span=document.createElement("span");
  span.innerText=text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id=newId;
  toDoList.appendChild(li);
const toDoObj={
  text:text,
  id:newId
};
toDos.push(toDoObj);
saveToDos();
}



function handleSubmit(event){
  event.preventDefault();
  const currentValue=todoInput.value;
  paintTodo(currentValue);
  todoInput.value="";
}


function loadToDos(){
const loadToDos=localStorage.getItem(TODOS_LS);
if(loadToDos !==null){
const parsedToDos=JSON.parse(loadToDos);
parsedToDos.forEach(function(toDo){
  paintTodo(toDo.text);
});
}

}


function init(){
  loadToDos();
  toDoForm.addEventListener("submit",handleSubmit);
}
init();
