let pizzacard = document.querySelector(".pizzacard");
let pizzaimg = document.querySelector(".pizzacard .pizzaimg");
let img1 = document.querySelector(".pizzacard .pizzaimg img");

let burgercard = document.querySelector(".burgercard");
let burgerimg = document.querySelector(".burgercard .burgerimg");
let img2 = document.querySelector(".burgercard .burgerimg img");

let friescard = document.querySelector(".friescard");
let friesimg = document.querySelector(".friescard .friesimg");
let img3 = document.querySelector(".friescard .friesimg img");

let mainfooditemspizza = document.querySelector(".mainfooditemspizza");
let mainfooditemsburger = document.querySelector(".mainfooditemsburger");
let mainfooditemsfries = document.querySelector(".mainfooditemsfries");

let starbucksbannerpinkstar = document.querySelector(".starbucks-banner .pinkstar");
let starbucksbannergreenstar = document.querySelector(".starbucks-banner .greenstar");
let starbucksbanneryellowstar = document.querySelector(".starbucks-banner .yellowstar");

let starbucksbannerdecogreen = document.querySelector(".starbucks-banner .decogreen");
let starbucksbannerdecopink = document.querySelector(".starbucks-banner .decopink");
let starbucksbannerdecoyellow = document.querySelector(".starbucks-banner .decoyellow");

let starbucksbannergreen = document.querySelector(".starbucks-banner .green");
let starbucksbannerpink = document.querySelector(".starbucks-banner .pink");
let starbucksbanneryellow = document.querySelector(".starbucks-banner .yellow");









let dominosbannerpinkstar = document.querySelector(".dominos-banner .pinkstar");
let dominosbannergreenstar = document.querySelector(".dominos-banner .greenstar");
let dominosbanneryellowstar = document.querySelector(".dominos-banner .yellowstar");

let dominosbannerdecogreen = document.querySelector(".dominos-banner .decogreen");
let dominosbannerdecopink = document.querySelector(".dominos-banner .decopink");
let dominosbannerdecoyellow = document.querySelector(".dominos-banner .decoyellow");

let dominosbannergreen = document.querySelector(".dominos-banner .green");
let dominosbannerpink = document.querySelector(".dominos-banner .pink");
let dominosbanneryellow = document.querySelector(".dominos-banner .yellow");

let modeswitch = document.querySelector(".modeswitch");
let switcher = document.querySelector(".switcher");
let body = document.querySelector("body");
let topbar = document.querySelector(".topbar");
let header = document.querySelector(".header");
let logo = document.querySelector(".logo");
let home = document.querySelector(".home");
let quote = document.querySelector(".quote");
let starbucks = document.querySelector(".starbucks-banner");







let fullcocntent = document.querySelector(".fullcontent")




pizzacard.onclick = function () {
    pizzacard.classList.toggle('activepizza')
    pizzaimg.classList.toggle('activepizza')
    img1.classList.toggle('activepizza')
    burgercard.classList.toggle('activepizza')
    burgerimg.classList.toggle('activepizza')
    img2.classList.toggle('activepizza')
    friescard.classList.toggle('activepizza')
    friesimg.classList.toggle('activepizza')
    img3.classList.toggle('activepizza')
    mainfooditemspizza.classList.toggle('activepizza')
    fullcocntent.classList.toggle('slidedown')
}


burgercard.onclick = function () {
    pizzacard.classList.toggle('activeburger')
    pizzaimg.classList.toggle('activeburger')
    img1.classList.toggle('activeburger')
    burgercard.classList.toggle('activeburger')
    burgerimg.classList.toggle('activeburger')
    img2.classList.toggle('activeburger')
    friescard.classList.toggle('activeburger')
    friesimg.classList.toggle('activeburger')
    img3.classList.toggle('activeburger')
    mainfooditemsburger.classList.toggle('activeburger')
    fullcocntent.classList.toggle('slidedown')
}


friescard.onclick = function () {
    pizzacard.classList.toggle('activefries')
    pizzaimg.classList.toggle('activefries')
    img1.classList.toggle('activefries')
    burgercard.classList.toggle('activefries')
    burgerimg.classList.toggle('activefries')
    img2.classList.toggle('activefries')
    friescard.classList.toggle('activefries')
    friesimg.classList.toggle('activefries')
    img3.classList.toggle('activefries')
    mainfooditemsfries.classList.toggle('activefries')
    fullcocntent.classList.toggle('slidedown')
}


// starbucksbannerpink.onclick = function () {
//     starbucksbannerpinkstar.classList.toggle("activepink")
//     starbucksbannergreenstar.classList.toggle("activepink")
//     starbucksbanneryellowstar.classList.toggle("activepink")
//     starbucksbannerdecogreen.classList.toggle("activepink")
//     starbucksbannerdecopink.classList.toggle("activepink")
//     starbucksbannerdecoyellow.classList.toggle("activepink")
//     starbucksbannergreen.classList.toggle("activepink")
//     starbucksbannerpink.classList.toggle("activepink")
//     starbucksbanneryellow.classList.toggle("activepink")
// }


// starbucksbanneryellow.onclick = function () {
//     starbucksbannerpinkstar.classList.toggle("activeyellow")
//     starbucksbannergreenstar.classList.toggle("activeyellow")
//     starbucksbanneryellowstar.classList.toggle("activeyellow")
//     starbucksbannerdecogreen.classList.toggle("activeyellow")
//     starbucksbannerdecopink.classList.toggle("activeyellow")
//     starbucksbannerdecoyellow.classList.toggle("activeyellow")
//     starbucksbannergreen.classList.toggle("activeyellow")
//     starbucksbannerpink.classList.toggle("activeyellow")
//     starbucksbanneryellow.classList.toggle("activeyellow")
// }


// dominosbannerpink.onclick = function () {
//     dominosbannerpinkstar.classList.toggle("activepinkd")
//     dominosbannergreenstar.classList.toggle("activepinkd")
//     dominosbanneryellowstar.classList.toggle("activepinkd")
//     dominosbannerdecogreen.classList.toggle("activepinkd")
//     dominosbannerdecopink.classList.toggle("activepinkd")
//     dominosbannerdecoyellow.classList.toggle("activepinkd")
//     dominosbannergreen.classList.toggle("activepinkd")
//     dominosbannerpink.classList.toggle("activepinkd")
//     dominosbanneryellow.classList.toggle("activepinkd")
// }


// dominosbanneryellow.onclick = function () {
//     dominosbannerpinkstar.classList.toggle("activeyellowd")
//     dominosbannergreenstar.classList.toggle("activeyellowd")x    
//     dominosbanneryellowstar.classList.toggle("activeyellowd")
//     dominosbannerdecogreen.classList.toggle("activeyellowd")
//     dominosbannerdecopink.classList.toggle("activeyellowd")
//     dominosbannerdecoyellow.classList.toggle("activeyellowd")
//     dominosbannergreen.classList.toggle("activeyellowd")
//     dominosbannerpink.classList.toggle("activeyellowd")
//     dominosbanneryellow.classList.toggle("activeyellowd")
// }


modeswitch.onclick = function () {
    modeswitch.classList.toggle('switch')
    switcher.classList.toggle('switch')
    body.classList.toggle('switch')
    topbar.classList.toggle('switch')
    header.classList.toggle('switch')
    logo.classList.toggle('switch')
    home.classList.toggle('switch')
    quote.classList.toggle('switch')
    starbucks.classList.toggle('switch')
     
}

modeswitch.addEventListener('click', function(){
  var spans = document.querySelectorAll(".sp");
   spans.forEach(function(i){
    i.style.color = "var(--bcg)"
   })
})



function starpink(){
    starbucksbannerdecogreen.style.left = "50%";
    starbucksbannerdecopink.style.left = "0%";
    starbucksbannerdecoyellow.style.left = "50%";
    starbucksbannergreenstar.style.transform = "translateX(160%)"
    starbucksbannerpinkstar.style.transform = "translateX(0%)"
    starbucksbanneryellowstar.style.transform = "translateX(160%)"
    starbucksbannerpink.style.boxShadow = "inset 2px 2px 10px black";
    starbucksbannergreen.style.boxShadow = "none";
    starbucksbanneryellow.style.boxShadow = "none";

    
}
function staryellow(){
    starbucksbannerdecogreen.style.left = "50%";
    starbucksbannerdecopink.style.left = "50%";
    starbucksbannerdecoyellow.style.left = "0%";
    starbucksbannergreenstar.style.transform = "translateX(160%)"
    starbucksbannerpinkstar.style.transform = "translateX(160%)"
    starbucksbanneryellowstar.style.transform = "translateX(0%)"
    starbucksbanneryellowstar.style.transform = "rotate(-20deg)"
    starbucksbannerpink.style.boxShadow = "none";
    starbucksbannergreen.style.boxShadow = "none";
    starbucksbanneryellow.style.boxShadow = "inset 2px 2px 10px black";

}
function stargreen(){
    starbucksbannerdecogreen.style.left = "0%";
    starbucksbannerdecopink.style.left = "50%";
    starbucksbannerdecoyellow.style.left = "50%";
    starbucksbannergreenstar.style.transform = "translateX(0%)"
    starbucksbannerpinkstar.style.transform = "translateX(160%)"
    starbucksbanneryellowstar.style.transform = "translateX(160%)"
    starbucksbannerpink.style.boxShadow = "none";
    starbucksbannergreen.style.boxShadow = "inset 2px 2px 10px black";
    starbucksbanneryellow.style.boxShadow = "none";

}

function dominospink(){
    dominosbannerdecogreen.style.left = "-100%";
    dominosbannerdecopink.style.left = "0%";
    dominosbannerdecoyellow.style.left = "-100%";
    dominosbannergreenstar.style.transform = "translateX(-160%)"
    dominosbannerpinkstar.style.transform = "translateX(0%)"
    dominosbanneryellowstar.style.transform = "translateX(-160%)"
    dominosbannerpink.style.boxShadow = "inset 2px 2px 10px black";
    dominosbannergreen.style.boxShadow = "none";
    dominosbanneryellow.style.boxShadow = "none";
}
function dominosyellow(){
    dominosbannerdecogreen.style.left = "-100%";
    dominosbannerdecopink.style.left = "-100%";
    dominosbannerdecoyellow.style.left = "0%";
    dominosbannergreenstar.style.transform = "translateX(-160%)"
    dominosbannerpinkstar.style.transform = "translateX(-160%)"
    dominosbanneryellowstar.style.transform = "translateX(0%)"
    dominosbannerpink.style.boxShadow = "none";
    dominosbannergreen.style.boxShadow = "none";
    dominosbanneryellow.style.boxShadow = "inset 2px 2px 10px black";
}
function dominosgreen(){
    dominosbannerdecogreen.style.left = "0%";
    dominosbannerdecopink.style.left = "-100%";
    dominosbannerdecoyellow.style.left = "-100%";
    dominosbannergreenstar.style.transform = "translateX(0%)"
    dominosbannerpinkstar.style.transform = "translateX(-160%)"
    dominosbanneryellowstar.style.transform = "translateX(-160%)"
    dominosbannerpink.style.boxShadow = "none";
    dominosbannergreen.style.boxShadow = "inset 2px 2px 10px black";
    dominosbanneryellow.style.boxShadow = "none";
}






