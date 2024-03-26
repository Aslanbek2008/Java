

var elList = document.querySelector(".List");
var elItem = document.querySelector(".Item");
var elText = document.querySelector(".text");

elList.addEventListener("submit" , function(evt) {
    evt.preventDefault()

    var Item = elItem.value.trim()

    console.log("Item");

    elText.textContent = Item;
});