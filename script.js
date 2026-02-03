let size = 22;

document.getElementById("no").onclick = function () {
  size = size + 10;
  document.getElementById("yes").style.fontSize = size + "px";
};
