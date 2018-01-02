var earthShape = $("#earth");

var counter = 0;


function movePlanets(){
counter = counter + 1;

var earthX = calculateXPosition(counter, 500, 220);
var earthY = calculateYPosition(counter, 500, 220);

$("#earth").attr("cx", earthX);
$("#earth").attr("cy", earthY);



}

function calculateXPosition(degrees, sunX, orbitRadius) {
    var velocity = degrees * (Math.PI /180);
    return sunX + (orbitRadius * Math.cos(velocity));
}

function calculateYPosition(degrees, sunY, orbitRadius) {
    var velocity = degrees * (Math.PI /180);
    return sunY + (orbitRadius * Math.sin(velocity));
}

setInterval(movePlanets, 1000);