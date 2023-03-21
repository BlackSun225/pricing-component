const toggle = document.getElementById("toggle");
const circle = document.getElementById("circle");
var toggleCount = 0;
const fee = localStorage.getItem("fee");

function setAnnualFee() {
  circle.style.right = "auto";
  circle.style.left = "3px";
  document.querySelector(".basic h3").lastChild.nodeValue = "199.99";
  document.querySelector(".pro h3").lastChild.nodeValue = "249.99";
  document.querySelector(".master h3").lastChild.nodeValue = "399.99";
}

function setMonthFee() {
  circle.style.right = "3px";
  circle.style.left = "auto";
  document.querySelector(".basic h3").lastChild.nodeValue = "19.99";
  document.querySelector(".pro h3").lastChild.nodeValue = "24.99";
  document.querySelector(".master h3").lastChild.nodeValue = "39.99";
}

if(fee === "year") {
  toggleCount = 1;
  setAnnualFee();
}else if(fee === "month") {
  toggleCount = 0;
  setMonthFee();
}

toggle.addEventListener("click", ()=>{
  if(toggleCount === 0) {
    setAnnualFee();
    localStorage.setItem("fee","year");
    toggleCount++;
  }else if(toggleCount === 1) {
    setMonthFee();
    localStorage.setItem("fee","month");
    toggleCount--;
  }
});

toggle.addEventListener("keydown", (event)=>{
  if(event.key === "Enter" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
    if(toggleCount === 0) {
        setAnnualFee();
        localStorage.setItem("fee","year");
        toggleCount++;
      }else if(toggleCount === 1) {
        setMonthFee();
        localStorage.setItem("fee","month");
        toggleCount--;
      }
  }  
});