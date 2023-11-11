const http = require("http")

const server = http.createServer((req,res) => {
    const url = req.url

    if (url === '/home'){
        res.end("Welcome home")
    }
    else if (url === '/About us'){
        res.end("Welcome to About us page")
    }
    else if (url === "/Node"){
        res.end("welcome to my Node js project")
    }
    else {
        res.writeHead(404 ,{'content-type':'text-plain'})
    }
})
const port = 3000
server.listen(PORT,() => {
    console.log("server is running")
})
