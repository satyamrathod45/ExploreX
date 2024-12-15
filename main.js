function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = ".1px";
    star.style.height = ".1px";
    star.style.top = Math.random() * 100  + "%";
    star.style.left = Math.random() * 100 + "%";
    container.appendChild(star);
  }
}
let count = 0;
let starcount = setInterval(() => {
createStars();
count++;
if (count === 50) {
  clearInterval(starcount);
}
}, 100);