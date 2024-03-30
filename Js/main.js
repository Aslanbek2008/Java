

// var ellist = document.querySelector(".list");
// var elitem = document.querySelector(".item");
// var eltext = document.querySelector(".text")

// var cal = 2;

// ellist.addEventListener("submit" , function(evt) {
//     evt.preventDefault();

//     var input = elitem.value.trim()

//     var Hisob = input * cal;

//     if(input) {
//       eltext.textContent = Hisob;
//     }
// });


// var elList = document.querySelector(".list");
// var elItem = document.querySelector(".item");
// var elText = document.querySelector(".text");

// function ChangeEnter(evt) {
//   evt.preventDefault();

//   var input = elItem.value.trim()

//   elText.textContent = input;
// }

// elList.addEventListener("submit" , ChangeEnter);


// var elbutton = document.querySelector(".button");
// var elbuttonka = document.querySelector(".buttonka");
// var elList = document.querySelector(".list");


// function ButtonSubmit(evt) {
//     evt.preventDefault();

//     elList.classList.toggle("open");
// }


// function Buttobka(evt) {
//     evt.preventDefault();

//     elList.classList.toggle("open");
// }

//   elbutton.addEventListener("click", ButtonSubmit);
//   elbuttonka.addEventListener("click", Buttobka);



var odam = 100;
var velik = 150;
var moshin = 180;
var Samolyot = 800;

var elForm = document.querySelector(".form");
var elinput = document.querySelector(".input");
var eltext = document.querySelector(".text");
var elOdam = document.querySelector(".text1");
var elVelik = document.querySelector(".text2");
var elSamalyot = document.querySelector(".text3");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault()

    var input = elinput.value.trim()

    eltext.textContent = "Soat" + input / odam.toFixed()
    elOdam.textContent = "Soat" + input / velik.toFixed()
    elVelik.textContent = "Soat" + input / moshin.toFixed()
    elSamalyot.textContent = "Soat" + input / Samolyot.toFixed()

});

