const inputNode = document.querySelector("#font-size-control");
const outNode = document.querySelector("#text");

inputNode.addEventListener("input", inputStatus);

function inputStatus(e) {
  outNode.setAttribute("style", `font-size: ${inputNode.value}px`);
}
