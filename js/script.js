// use_strict
const calc = function(mathSymb, a, b){

//   const znaki = {
//     plus: '+',
//     minus: '-',
//     razdel: '/',
//     umnoj: '*',
//   }
// for(el of znaki){
  if(mathSymb === '*'){
      return a * b;
    }else if(mathSymb === '/'){
      return a / b;
    }else if(mathSymb === '+'){
      return a + b;
    }else if(mathSymb === '-'){
      return a - b;
    }

  
  
return false;
}
calc("+", 2, 4);