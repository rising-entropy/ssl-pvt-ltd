let btnContainer = document.getElementById("navbar");

let btns = btnContainer.querySelectorAll(".btn");
console.log(btns);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}