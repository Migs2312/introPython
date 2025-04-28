const developer = document.getElementById('devName');

const content = document.getElementById('content');

function info(parameter){
    content.classList.remove("content_change");
    setTimeout(() =>{ 
        content.classList.add("content_change");
    }, 0.1)

    setTimeout(() =>{
        cont(parameter)
        content.innerHTML=cnt
    }, 500)

    for(let i=0; i<document.getElementById("content").childNodes.length; i++){
        document.getElementById("content").childNodes[i].className="opacity_zero";
    }
};

//Armazenamento de conteúdo
function cont(parameter){
    switch(parameter){
        case "start":
            t = "<h1>Bem vindo!</h1>"
            c1 = "<h2>Aprenda a instalar e usar python!</h2>"

            cnt = t+c1
        break;

        case "install":
            t = "<h1>Instalação</h1><br>"
            c1 = "<h2>Antes de instalar o python, é importante verificar se o python já está instalado.<br>Isso pode ser visto nas configurações do computador.</h2>"
            i1 = "<img src='style/images/install/config.png' class='iZ' width='400px' height='200px'><br>"
            c2 = "<h2>Se o python já estiver instalado, é recomendado desinstalar a versão atual e instalar a versão mais nova.</h2><br>"
            i2 = "<img src='style/images/install/configApps.png' class='iZ' width='400px' height='200px'><br>"
            c3 = "<h2>Para instalar a versão mais atual do python é só entrar no site <a href='https://www.python.org/downloads/' class='iZ'>python.org</a>, e fazer o download.</h2><br>"
            i3 = "<img src='style/images/install/pythonSite.png' class='iZ' width='400px' height='200px'><br>"
            c4 = "<h2>Após isso, basta iniciar o instalador e seguir os passos para instalar o python.</h2><br>"
            i4 = "<img src='style/images/install/pythonInstaller.png' class='iZ' width='400px' height='200px'><br>"

            cnt = t+c1+c2+i1+i2+c3+i3+c4+i4
        break;

        case "packs":
            t = "<h1>Pacotes do python</h1><br>"
            c1 = "<h2></h2>"

            cnt = t
        break;

        case "jupyter":
            t = "<h1>Utilização</h1><br>"
            c1 = "<h2></h2>"

            cnt = t
        break;
    };
};
//Armazenamento de conteúdo

//Desenvolvedor
function dev() {
    developer.classList.add("opacity_change");
    setTimeout(() => {
        developer.style.opacity = "90%";
    }, 80);
};
function offDev(){
            developer.classList.remove("opacity_change");
            developer.style.opacity = "0%";
};
//Desenvolvedor