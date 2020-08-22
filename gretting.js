const form=document.querySelector(".js-form"),
input=form.querySelector("input")
greeting=document.querySelector(".js-greetings");
 const user="currentUser",showing="showing";

function paintGreeting(text){
  form.classList.remove(showing);
  greeting.classList.add(showing);
greeting.innerText=`Hello '${text}'`
}
function saveName(text){
localStorage.setItem(user,text);



}
function handleSubmit(event){
event.preventDefault();
const currentValue=input.value;
paintGreeting(currentValue);
saveName(currentValue);
}
function askForName(){
  form.classList.add(showing);
  form.addEventListener("submit",handleSubmit);
}
 function loadName(){
const currentUser=localStorage.getItem(user);
if(currentUser===null){
askForName();
}else{
paintGreeting(currentUser);

}

 }
 function init(){
   loadName();
 }
init();
