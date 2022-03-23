import IndexCss from "../styles"
import Login from "./Login"

const configsDefalut = {
    title:"Task Well"
}

export default (configs:any = configsDefalut) => {
return (`
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${configs.title}</title>
    ${IndexCss}
</head>
<body>
    ${Login}
</body>
</html>
`
)}