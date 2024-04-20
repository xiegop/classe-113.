function preload(){
}
 
function setup(){
canvas=creatCanvas(640,500)
canvas.posision(210,250)
video=createCapture(VIDEO)
video.hide()
color=""  
}
   function   draw(){
      image(video,0,0,640,500)
      tint(color)
      
   }

   function  take_snapshot(){
    save("mi foto.png")

   }

   function filter_tint(){
    color=document.getElementById("color_name").value


   }