const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end('Welcome to our home Page')
    }
    if(req.url === '/about'){
        res.end('learn http node module')
    }else{res.end(`Opps`)}
    
})

server.listen(5000)