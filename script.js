const input=document.getElementById("input");
const btn=document.getElementById("btn");
const result=document.getElementById("result");
const head=document.getElementById("head");
const body=document.getElementById("body");
const mainBox=document.getElementById("mainBox");
const audio1=document.getElementById("audio1");
const image1=document.getElementById("image1");

let count=0;
console.log(input,btn,result);
btn.addEventListener("mouseover",(e)=>{
     console.log(e);
     btn.style.backgroundColor="red";
     let random1=Math.random()*1000;
     let random2=Math.random()*1000;
     if(random1<=500 && random2<=500){
          btn.style.left=`${random1}px`;
          btn.style.top=`${random2}px`;
          btn.style.rotate=`${360*Math.random()}deg`;
          console.log(btn.style.left,btn.style.top);
          count++;
          console.log(`count: ${count}`);
          if(count==2){
               body.style.zIndex=`10`;
               mainBox.style.zIndex=`-10`;
               body.style.backgroundImage=`url("https://steamuserimages-a.akamaihd.net/ugc/271724616150646487/9C459A809F87862FF69280C82F525B48BCD656D6/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`;
               mainBox.style.backgroundColor=`rgba(0,0,0,0)`; 
               audio1.src=`scary.mp3`;
               audio1.load();
               audio1.play(); // Play the audio (if desired)


          }
     }
     else{
          btn.style.left=`${Math.random()*200}px`;
          btn.style.top=`${Math.random()*200}px`;
          console.log(btn.style.left,btn.style.top);

     }
     
})
btn.addEventListener("mouseleave",(e)=>{
     btn.style.right=`100px`;
})