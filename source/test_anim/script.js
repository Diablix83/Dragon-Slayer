/*
██████╗  ██████╗ ███╗   ██╗███╗   ██╗███████╗███████╗███████╗
██╔══██╗██╔═══██╗████╗  ██║████╗  ██║██╔════╝██╔════╝██╔════╝
██║  ██║██║   ██║██╔██╗ ██║██╔██╗ ██║█████╗  █████╗  ███████╗
██║  ██║██║   ██║██║╚██╗██║██║╚██╗██║██╔══╝  ██╔══╝  ╚════██║
██████╔╝╚██████╔╝██║ ╚████║██║ ╚████║███████╗███████╗███████║
╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝╚══════╝╚══════╝
*/

const mainDiv       = document.querySelector('main');

const centerDivBtn  = mainDiv.querySelector('input[name="center_div"]');

const fondNoir      = document.querySelector('#fondNoir');

const leftgate      = document.querySelector('#leftgate');
const rightgate     = document.querySelector('#rightgate');
const lockergate    = document.querySelector('#lockergate');

let gateOpenState   = false;

/*
███████╗ ██████╗ ███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
█████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
*/

function toggleArticle(){
    fondNoir.classList.toggle('hideArticle');
}

function openGate(){
    lockergate.classList.toggle('unlock');
    window.setTimeout(function(){
        leftgate.classList.remove('close');
        rightgate.classList.remove('close');
    }, 1000);
    gateOpenState = true;
}

function closeGate(){
    leftgate.classList.add('close');
    rightgate.classList.add('close');
    window.setTimeout(function(){
        lockergate.classList.toggle('unlock');
    }, 1500);
    gateOpenState = false;
}

/*
 ██████╗ ██████╗ ██████╗ ███████╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝
██║     ██║   ██║██║  ██║█████╗  
██║     ██║   ██║██║  ██║██╔══╝  
╚██████╗╚██████╔╝██████╔╝███████╗
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
*/

centerDivBtn.addEventListener('click', toggleArticle);
fondNoir.addEventListener('click', toggleArticle);

lockergate.addEventListener('click', function(){
    if(gateOpenState){
        closeGate();
    }
    else{
        openGate();
    }
});

