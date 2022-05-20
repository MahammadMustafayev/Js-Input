let it1 = document.querySelector(".item");
let it2 = document.querySelector(".item2");
let circle = document.querySelector(".circle");

it1.ondragover = function (el) {
    el.preventDefault();
}
it1.ondrop = function () {
    console.log("Drop");
}
circle.ondragstart = function () {

}
