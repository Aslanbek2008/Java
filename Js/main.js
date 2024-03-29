

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


var elbutton = document.querySelector(".button");
var elbuttonka = document.querySelector(".buttonka");
var elList = document.querySelector(".list");


function ButtonSubmit(evt) {
    evt.preventDefault();

    elList.classList.toggle("open");
}


function Buttobka(evt) {
    evt.preventDefault();

    elList.classList.toggle("open");
}

  elbutton.addEventListener("click", ButtonSubmit);
  elbuttonka.addEventListener("click", Buttobka);