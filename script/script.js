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
            i1 = "<img src='style/images/install/config.png' class='iZ' width='300px' height='200px'><br>"
            
            c2 = "<h2>Se o python já estiver instalado, é recomendado desinstalar a versão atual e instalar a versão mais nova.</h2><br>"
            i2 = "<img src='style/images/install/configApps.png' class='iZ' width='300px' height='200px'><br>"
            
            c3 = "<h2>Para instalar a versão mais atual do python é só entrar no site <a href='https://www.python.org/downloads/' class='iZ'>python.org</a>, e fazer o download.</h2><br>"
            i3 = "<img src='style/images/install/pythonSite.png' class='iZ' width='300px' height='200px'><br>"
            
            c4 = "<h2>Após isso, basta iniciar o instalador e seguir os passos para instalar o python.</h2><br>"
            i4 = "<img src='style/images/install/pythonInstaller.png' class='iZ' width='300px' height='200px'><br>"

            cnt = t+c1+c2+i1+i2+c3+i3+c4+i4
        break;

        case "packs":
            t = "<h1>Pacotes do python</h1><br>"
            
            c1 = "<h2>Depois de instalar o python, precisamos instalar os pacotes, e, para isso, precisamos abrir o  console do sistema. Para isso, basta apenas pressionar o botão windows no teclado e digitar 'cmd', ou apenas pesquisar 'cmd' na barra de pesquisas</h2>"
            i1 = "<br><img src='style/images/install/consoleOpen.png' class='iZ' width='300px' height='200px'><br>"
            t1 = "<br><h2>É recomendado iniciar o console como administrador</h2><br>"
            c1_5 = "<h2>Basta selecionar 'executar como admnistrador'<br><br>Após isso, temos dois métodos para instalar os pacotes:</h2><br>"

            t2 = "<h1>Método 1:</h1>"
            c2 = "<h2>O primeiro método é simplesmente instalar os pacotes um por vez, com o comando:<br><br>pip install [pacote]<br><br>Por exemplo, com o jupyter, utiliza-se o comando <br>'pip install jupyter'</h2>"
            i2 = "<br><img src='style/images/install/pipInstallSingle.png' class='iZ' width='300px' height='200px'><br><br>"

            t3 = "<h1>Método 2:</h1>"
            c3 = "<h2>O segundo método envolve instalar todos os pacotes de uma vez.<br>Para isso, é necessário criar um arquivo de texto e colocar o nome dos pacotes nele.</h2>"
            i3 = "<br><img src='style/images/install/textFile.png' class='iZ' width='300px' height='200px'><br>"

            c4 = "<h2>Então, é necessário entrar onde está o arquivo, e, para isso, usa-se o comando 'cd path'<br><br>Por exemplo: cd C:/Users/Usuário/Desktop<br><br>É mais fácil se o arquivo de texto estiver na área de trabalho;<br>Então, usa-se o comando 'pip install -r [arquivo].txt'</h2>"
            i4 = "<br><img src='style/images/install/pipInstallAll.png' class='iZ' width='300px' height='200px'><br>"


            cnt = t+c1+i1+t1+c1_5+t2+c2+i2+t3+c3+i3+c4+i4
        break;

        case "jupyter":
            t = "<h1>Utilização</h1><br>"
            c1 = "<h2>Por fim, para utilizar o jupyter, é importante criar uma pasta específica para o python.<br>Então, é só entrar na pasta com o comando 'cd'</h2>"
            i1 = "<br><img src='style/images/install/pythonFolder.png' class='iZ' width='300px' height='200px'><br>"

            c2 = "<h2>Logo, se utiliza o comando 'python -m jupyterlab' para iniciar o jupyter</h2>"
            i2 = "<br><img src='style/images/install/jupyterStart.png' class='iZ' width='300px' height='200px'><br>"

            c3 = "<h2>Por fim, se copia e cola os endereços no navegador</h2>"
            i3 = "<br><img src='style/images/install/jupyterAdress.png' class='iZ' width='300px' height='200px'><br>"
            i4 = "<br><img src='style/images/install/jupyterLab.png' class='iZ' width='300px' height='200px'><br>"

            c4 = "<h2>E, para fechar, basta fechar o navegador, e, no console, usar o comando 'CTRL+C'</h2>"

            cnt = t+c1+i1+c2+i2+c3+i3+i4+c4
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