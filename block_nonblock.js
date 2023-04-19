// synchronus and blocking 
        // -- Code Invok line by line 
// asynchronus and non-blocking
        // -- Code dose not execute line by line call back function call first


const fs = require("fs");
fs.readFile("file.txt","utf-8" ,(err,data)=>{
    console.log(data);
})
console.log("This is the messge : ")