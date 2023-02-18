const http=require('http');

const fs=require('fs');

const port=process.env.PORT || 9000;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader=('Content-Type','text/html');
    console.log(req.url);
    if(req.url=='/'){
        res.statusCode=200;
        const data=fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else if(req.url=='/about')
    {
        res.statusCode=200;
        const data = fs.readFileSync('about.html');
        res.end(data.toString());
    }
})

server.listen(port,()=>{
    console.log(`Server is listening on the port ${port}`);
})