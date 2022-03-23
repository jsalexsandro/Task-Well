import express from "express"
import http from "http"
import routes from "./src/controllers/Route"

const app = express()
const server = http.createServer(app)
const port = 3000
// // app.use(express.json())
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
app.use(routes)

server.listen(port,() => console.log(`Server: http://localhost:${port}/`))