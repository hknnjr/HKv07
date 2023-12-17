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

        var c = document.getElementById("bg");
            var ctx = c.getContext("2d");
            c.height = window.innerHeight;
            c.width = window.innerWidth;
            var nameText = "HacK3d/By/HKv07";
            nameText = nameText.split("");
            var font_size = 10;
            var columns = c.width/font_size;
            var drops = [];
            for(var x = 0; x < columns; x++)
              drops[x] = 10000;
            function draw()
            {
              ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
              ctx.fillRect(0, 0, c.width, c.height);

              ctx.fillStyle = "rgb(222, 6, 8)";
              ctx.font = font_size + "px arial";
              for(var i = 0; i < drops.length; i++)
              {
                var text = nameText[Math.floor(Math.random()*nameText.length)];
                ctx.fillText(text, i*font_size, drops[i]*font_size);
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                  drops[i] = 0;
                drops[i]++;
              }
            }
            setInterval(draw, 33);
