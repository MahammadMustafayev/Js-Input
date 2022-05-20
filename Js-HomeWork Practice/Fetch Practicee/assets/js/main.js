let btn =document.querySelector(".btn");
let img=document.getElementById("img");

btn.addEventListener("click",function () {
     fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(result => {
        img.innerHTML=`<img src="${result.message}" />`;
    })
})