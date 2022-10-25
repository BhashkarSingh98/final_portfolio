const hamburgar = document.getElementById("hamburgar");
const x = document.getElementById("list");
const line1=document.getElementById("line1")
const line2=document.getElementById("line2")
const line3=document.getElementById("line3")
hamburgar.addEventListener("click", function () {
  if (x.style.display === "none") {
    x.style.display = "block";
    line1.style.transform= "rotate(45deg)";
    line1.style.marginTop="0px"
    line1.style.transition=".7s"
    line2.style.transition=".2s"
    line3.style.transition=".7s"
    line2.style.visibility="hidden"
    line2.style.marginLeft="-10px"
    line3.style.transform= "rotate(-45deg)";
    line3.style.marginTop="-15px"
  } else {
    x.style.display = "none";
    line1.style.transform= "rotate(0deg)";
    line1.style.marginTop="0px"
    line3.style.marginTop="0px"
    line1.style.transition=".7s"
    line2.style.transition=".7s"
    line3.style.transition=".7s"
    line2.style.marginLeft="0px"

    line2.style.visibility="visible"
    line3.style.transform= "rotate(0deg)";
  }
});
// hamburgar.addEventListener("click",function(){
//   line1.style.transform= "rotate(20deg)";

// })

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


