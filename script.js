let size = 22;
let clicks = 0;

document.getElementById("no").onclick = function () {
  clicks++;
  size += 10;
  document.getElementById("yes").style.fontSize = size + "px";

  if (clicks >= 10) {
    document.getElementById("no").style.display = "none";
  }
};
