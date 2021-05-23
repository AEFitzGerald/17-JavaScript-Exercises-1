var totalFollowers = document.querySelector(".fans");
var totalFish = document.querySelector(".fish");
var totalPets = document.querySelector(".pets");
//console.log(totalFollowers);
//console.log(totalFish);
//console.log(totalPets);

totalFollowers.addEventListener("mouseover", function () {
  totalFollowers.innerText = "123K";
});
totalFish.addEventListener("mouseover", function () {
  totalFish.innerText = "47K";
});
totalPets.addEventListener("mouseover", function () {
  totalPets.innerText = "20k";
});
