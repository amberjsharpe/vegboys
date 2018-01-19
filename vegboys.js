let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var newBands = "";
for (var i = 0; i < bands.length; i++) {
    newBands += bands[i] + "/ ";
}

document.getElementById("boy-bands").innerHTML = newBands;

var newVegs = "";
for (var j = 0; j < vegetables.length; j++) {
    newVegs += vegetables[j] + "/ ";
}

document.getElementById("vegetables").innerHTML = newVegs;