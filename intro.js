// Globels - No Window!!!
// __dirname - path to current directory
// __filename - __filename
// require - function to use modules
// module- info about current modules
// process - info about env where it is executing

const amount = 9n;
 if(amount < 10){
     console.log('small number');
 }else{
     console.log('large number');
 }

setInterval(()=> {
    console.log('hello world')
},1000)