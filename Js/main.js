

var ellist = document.querySelector(".list");
var elitem = document.querySelector(".item");
var eltext = document.querySelector(".text")

ellist.addEventListener("submit" , function(evt) {
    evt.preventDefault();

    var input = elitem.value.trim()

    console.log("item");

    if(input) {
      eltext.textContent = input;
    }
});


