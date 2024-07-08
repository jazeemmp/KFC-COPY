let scrollContainer = document.querySelector(".card-container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const show1 = document.querySelector(".show1")
const show2 = document.querySelector(".show2")
const show3 = document.querySelector(".show3")
const show4 = document.querySelector(".show4")

const cont1 = document.getElementById("cont1")
const cont2 = document.getElementById("cont2")
const cont3 = document.getElementById("cont3")
const cont4 = document.getElementById("cont4")

scrollContainer.addEventListener("wheel", (event) => {
  if (event.deltaX !== 0) {
    event.preventDefault();
  }
});

left.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 350;
});
right.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 350;
});

function showContent1(){
    show1.classList.toggle("active")
    cont1.classList.toggle("visible")
} 
function showContent2(){
    show2.classList.toggle("active")
    cont2.classList.toggle("visible")
}
function showContent3(){
    show3.classList.toggle("active")
    cont3.classList.toggle("visible")
    
}
function showContent4(){
    show4.classList.toggle("active")
    cont4.classList.toggle("visible")
}
