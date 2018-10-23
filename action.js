document.getElementById("container").getElementsByTagName("img")[1].src = "flower2.png";
document.getElementById("container2").getElementsByTagName("img")[1].src = "flower2.png";
document.getElementById("container2").getElementsByTagName("img")[3].src = "flower2.png";

document.getElementById("container3").innerHTML = "Your are doing great!";

let image = document.createElement("img");
document.getElementById("new_element").appendChild(image).src = "flower2.png";


let spans = document.getElementById("rainbow").querySelectorAll('span');
let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
for (var i = 0; i < spans.length; i++) {
	spans[i].style.color = colors[i];
}

var changeSrc = function (event) {
  if (event.target.src) {
    let filename = event.target.src.replace(/^.*[\\\/]/, '');
            if (filename === "flower2.png") {event.target.src = "flower1.png"}
            else if (filename === "flower1.png") {event.target.src = "flower2.png"}
  }
};
document.getElementById("event").addEventListener("mouseover", changeSrc);
