import { Router,Response } from "express"
import Index from "../views/pages/index"
import IndexCss from "../views/styles"
const routes = Router()

function RenderHtml(res:Response,html:string){
  res.header("Content-Type",'text/html').send(html)
}

routes.use("/",(req,res) => {
  RenderHtml(res,Index())
})


export default routes