let btn = document.getElementById('btn');
let Correct = document.getElementById('Correct');
let int = document.getElementById('int');
let int2 = document.getElementById('int');
let nw = document.getElementById('nw');
let nt = document.getElementById('nt');
let plus=document.getElementById("plus");
let p=document.querySelector('p');
let div=document.querySelector('.container');
let cmpt=document.querySelector('.cmpt');




let inn=localStorage.getItem('playerName');
let player=localStorage.getItem('player');


if(player==="hard"){
nw.innerHTML=Math.floor(Math.random()*170);
nt.innerHTML=Math.floor(Math.random()*170);
}
if(player==="isee"){
nw.innerHTML=Math.floor(Math.random()*15);
nt.innerHTML=Math.floor(Math.random()*15);
}
if(player==="mediume"){
nw.innerHTML=Math.floor(Math.random()*90);
nt.innerHTML=Math.floor(Math.random()*90);
}

let list=[];
let b;


i = 0;
let interval = setInterval(function(){
if(i <= 10){
    cmpt.style.color="black"
    cmpt.style.fontSize="30px"
   cmpt.innerHTML = i;
   i++;
   
} else {
   clearInterval(interval);
   
}
}, 1000);
let res;
let h1=document.getElementById('hh').innerHTML="Bonjour "+inn;


btn.onclick=function(){
    let int = document.getElementById('int').value;
    let nww=parseInt(nw.innerHTML)
    let ntt=parseInt(nt.innerHTML)
    if("+"===plus.innerHTML){
     res=nww+ntt;
     plus.innerHTML="-"
    }else if("-"===plus.innerHTML){
         res=nww-ntt;
         plus.innerHTML="*"
    }else if("*"===plus.innerHTML){
        res=nww*ntt;
        plus.innerHTML="+"
    }
    clearTimeout(b);
    
    
    if(int==res){
        b=setTimeout(function(){
       interval.offsetHeight;
       
        Correct.style.display="block";
        Correct.innerHTML="Vous Avez Perdu";
        Correct.style.width="110px"
        Correct.style.border="none";
        Correct.style.marginLeft="65px";
        Correct.style.background="red";
        nw.style.display="none";
        nt.style.display="none";
        plus.innerHTML=list.length;
        plus.style.fontSize="50px"
        plus.style.paddingLeft="-10px"
        p.innerHTML="score "
        p.style.paddingLeft="10px"
        p.style.fontSize="50px"
        int2.style.display="none"
        btn.innerHTML="start"
        btn.style.background="green"
        div.style.background="none"
        btn.onclick=function(){
            location.reload()
        }
        div.style.marginBottom="5px"
        return b;
        },10000)
        Correct.style.display="block";
        list.push("1");

        if(player==="hard"){
        nw.innerHTML=Math.floor(Math.random()*1000);
        nt.innerHTML=Math.floor(Math.random()*1000);
        }
        if(player==="isee"){
        nw.innerHTML=Math.floor(Math.random()*5);
        nt.innerHTML=Math.floor(Math.random()*5);
        }
        if(player==="mediume"){
        nw.innerHTML=Math.floor(Math.random()*70);
        nt.innerHTML=Math.floor(Math.random()*70);
        }
        div.style.marginTop="20px"
        int2.value="";
        
       
    }else{
        Correct.style.display="block";
        Correct.innerHTML="Vous Avez Perdu";
        Correct.style.width="110px"
        Correct.style.background="red";
        Correct.style.marginLeft="60px";
        Correct.style.border="none";
        
        nw.style.display="none";
        nt.style.display="none";
        plus.innerHTML=list.length;
        plus.style.fontSize="50px"
        plus.style.paddingLeft="-10px"
        p.innerHTML="score"
        p.style.paddingLeft="10px"
        p.style.fontSize="50px"
        int2.style.display="none"
        btn.innerHTML="start"
        btn.style.background="green"
        div.style.background="none"
        div.style.marginTop="20px"
        cmpt.style.display="none"
        btn.onclick=function(){
            location.reload()
        }
        
    }
    i=1
}
