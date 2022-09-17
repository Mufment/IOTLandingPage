/*change language*/
var check=document.querySelector(".check1");
check.addEventListener('click',language)

function language(){
    let id=check.checked;
    if(id==true)
        location.href="es/index.html";
    else
        location.href="../index.html";
    
}

/*.-------------*/


const button1 =document.getElementById('main1');

button1.addEventListener('click',function handleClick(){
    document.getElementById('check').checked=false;
});

const button2 =document.getElementById('main2');

button2.addEventListener('click',function handleClick(){
    document.getElementById('check').checked=false;
});

const button3 =document.getElementById('main3');

button3.addEventListener('click',function handleClick(){
    document.getElementById('check').checked=false;
});

const button4 =document.getElementById('main4');

button4.addEventListener('click',function handleClick(){
    document.getElementById('check').checked=false;
});

const button5 =document.getElementById('main5');

button5.addEventListener('click',function handleClick(){
    document.getElementById('check').checked=false;
});