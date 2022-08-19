 const hamburgar=document.getElementById("hamburgar");
 const x = document.getElementById("list");
 hamburgar.addEventListener("click",function(){
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
 })

