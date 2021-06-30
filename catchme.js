var c=document.getElementById('catch');
var b=document.getElementById('container');
c.addEventListener('mouseover',posi);
c.style.top=c.offsetTop+"px";
c.style.left=c.offsetLeft+"px";
var a=0;
var h=b.offsetHeight;
var w=b.offsetWidth;
function val(value){
    return value+"px";
}

function posi(){

var top=parseInt(c.style.top);
var left=parseInt(c.style.left);
a=10-a;

c.style.transitionDuration="0.4s";
c.style.transitionTimingFunction="linear";


if(top<=h){
    
    //  if(top<=(window.innerHeight/5)){
    //     c.style.top=val((window.innerHeight*(2/3))+a);
    //     c.style.backgroundColor="violet";

    // }
    if(top<=(h/5)){
        c.style.top=val(h-a-c.offsetHeight);
        c.style.backgroundColor="red";
        c.style.transform="rotate(-360deg)";     

    }
    else if(top<=(h/3)){
        c.style.top=val((h*(2/3))-a);
        c.style.backgroundColor="grey";
        c.style.transform="rotate(360deg)"; 
        

    }
    else if(top<=(h/2)){
        c.style.top=val(h*(1/5)-a);
        c.style.backgroundColor="purple";
        c.style.transform="rotate(720deg)"; 
        

    }
    else if(top<=(h)*(2/3)){
        c.style.top=val(h*(1/2)-a);
        c.style.backgroundColor="mediumslateblue";
        c.style.transform="rotate(1080deg)"; 
       

    }
    else if(top<=(h)){
        c.style.top=val(h*(1/3)-a);
        c.style.backgroundColor="chocolate";
        c.style.transform="rotate(1440deg)"; 
        

    }


}

if(left<=w){



    
    if(left<=(w/3)){
        c.style.left=val((w)-a-c.offsetWidth);
        

    }
    
    else if(left<=(w)*(2/3)){
        c.style.left=val(w*(1/3)-a);
        
       

    }
    else if(left<=(w)){
        c.style.left=val(w*(2/3)-a);
        

    }
}

    
}