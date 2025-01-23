let students = [
    { name: "Alice", marks: 45, subject: "Math" },
    { name: "Bob", marks: 75, subject: "Science" },
    { name: "Charlie", marks: 50, subject: "English" },
    { name: "David", marks: 30, subject: "History" }
  ];
  for(student of students){
    if(student.marks>=50){
        console.log(`${student.name} - ${student.subject}`)
    }
  }

let words = ["apple", "banana", "grapefruit", "kiwi", "pineapple"];
let max = ""
 for(let fruit of words){
     if(max.length<fruit.length){
         max = fruit
     }
 }
console.log(max)