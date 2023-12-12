        function muter2(){
scrW=screen.availWidth
scrH=screen.availHeight
window.moveTo(0,0)
window.resizeTo(10,10)
window.focus()
for(x=0;x<80;x++){
window.resizeTo(10,scrH*x/80)
}
for(y=0;y<80;y++){
window.resizeTo(scrW*y/80,scrH)
}
window.resizeTo(scrW,scrH)
}
document.oncontextmenu=new Function("muter2();return false");
function keypressed(){alert("Alert  :\n\n\ You Got Hacked By HKv07\n\nRegard:\n\ HKv07.");}
document.onkeydown=keypressed;
       var rev = "fwd";
        function titlebar(val)
        {
        var msg = "Wh00pz ! You Got Hacked By HKv07";
        var res = " ";
        var speed = 65
        var pos = val;
        
        msg = " " +msg+" ";
        var le = msg.length;
        if(rev == "fwd"){
        if(pos < le){
        pos = pos+1;
        scroll = msg.substr(0,pos);
        document.title = scroll;
        timer = window.setTimeout("titlebar("+pos+")",speed);
        }
        else{
        rev = "bwd";
        timer = window.setTimeout("titlebar("+pos+")",speed);
        }
        }
        else{
        if(pos > 0){
        pos = pos-1;
        var ale = le-pos;
        scrol = msg.substr(ale,le);
        document.title = scrol;
        timer = window.setTimeout("titlebar("+pos+")",speed);
        }
        else{
        rev = "fwd";
        timer = window.setTimeout("titlebar("+pos+")",speed);
        } 
        }
        }
        
        titlebar(0);
