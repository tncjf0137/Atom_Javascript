const calculator={
  plus:function(a,b){return a+b;},
  minus:function(a,b){return a-b;},
  multiple:function(a,b){return a*b;},
  divide:function(a,b){return a/b;}


}
console.log(calculator.plus(5,5))
console.log(calculator.minus(5,5))
console.log(calculator.multiple(5,5))
console.log(calculator.divide(5,5))

function sayhello(name,age){
console.log('hello ${name} you are ${age} years old');
}
sayhello("soocheol",15);

const title=document.getElementById('title');

console.log(title);
title.innerHTML ="hi fr"
console.log(title);
//change
