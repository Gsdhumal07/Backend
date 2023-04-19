console.log("this is the Mod.js");

function avareg(arr){
    let sum=0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

module.exports ={
     avg:avareg,
     name:"Ganesh",
     repo:"Github"
}