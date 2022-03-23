import styled from "./Build-Css";

const IndexCss = styled.newStyle`
* {
    margin:0 ;
}

body {
    background-color:#e5e5e5;
}

.div-login {
    position:absolute;
    left:50%;
    top:4rem;
    transform:translateX(-50%);
    width:340px;
    height:340px;
    background-color:#336485;
    border-radius:10px;
    /* border:2px solid #0299ff; */
}

.div-login-main {
    width:100%;
    height:80%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:#446c9f;
    border-radius:0 0 10px 10px;
}


.name-login {
    width:100%;
    height:20%;
    background-color:transparent;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    font-size:36px;
    font-family:monospace;
}

button,
input {
    background-color:red;
    display:block;
    width:90%;
    height:55px;
    margin: 4px 0;
    padding:0;
    border:0;
    outline:none;
    border-radius:4px;
}

input {
    background-color:#2e5a78;
}

button {
    background-color:#204056;
    font-size:22px;
    font-family:monospace;
    color:#fff;

}

`;

export default IndexCss;
