const fruits = ["Apple", "Banana", "Cherry"];  
fruits.pop();  
// our issue is we can change 2nd index value but in this code we change in 3rd index value
// 3rd index value is nothing so we can change 2nd index value
fruits[2] = "Orange";  
console.log(fruits);  
