const form=document.querySelector(".js-form"),
input=form.querySelector("input")
greeting=document.querySelector(".js-greetings");
 const user="currentUser",showing="showing";

function paintGreeting(text){
  form.classList.remove(showing);
  greeting.classList.add(showing);
greeting.innerText=`Hello '${text}'`
}
 function loadName(){
const currentUser=localStorage.getItem(user);
if(currentUser===null){

}else{
paintGreeting(currentUser);

}

 }
 function init(){
   loadName();
 }
init();
