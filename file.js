const fs = require("fs");
let text = fs.readFileSync("file.txt","utf-8");  //file synchronus read
console.log("the content of the file is the : ")
console.log(text);
text=text.replace("Mohit","Ganesh ")


console.log("/n")
console.log("the newly created file is ");
fs.writeFileSync("Ganesh.txt",text)
console.log(text);