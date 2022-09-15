let strNum = ''
let output = ''
while (strNum.length < 9){
    let number = Math.floor(Math.random()*10)
    strNum+= number.toString();
    }
    output = `#${strNum}`
    console.log(output);
