let cities = [];
var totalcities = 6;
let minDistance;
var bestEver;
let div;

function setup() {
  createCanvas(600, 400);
  div = createDiv(minDistance);
  for (var i = 0; i < totalcities; i++) {
    var v = createVector(random(width), random(height));
    cities[i] = v;
  }

  var d = calcDistance(cities);
  minDistance = d;
  bestEver = cities.slice();
}

function draw() {
  background(0);

  for (var i = 0; i < cities.length; i++) {
    stroke(255);
    ellipse(cities[i].x, cities[i].y, 8, 8);
  }

  beginShape();
  for (var i = 0; i < cities.length; i++) {
    strokeWeight(1);
    stroke(255, 100);
    noFill();
    vertex(cities[i].x, cities[i].y);
  }
  endShape();

  beginShape();
  for (var i = 0; i < cities.length; i++) {
    strokeWeight(3);
    stroke(255, 0, 0);
    vertex(bestEver[i].x, bestEver[i].y);
  }
  endShape();

  var a = floor(random(cities.length));
  var b = floor(random(cities.length));
  swap(cities, a, b);

  var d = calcDistance(cities);
  if (d < minDistance) {
    minDistance = d;
    console.log(minDistance);
    bestEver = cities.slice();
  }
  
  div.html(minDistance);
}

function swap(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDistance(points) {
  let sum = 0;
  for (var i = 0; i < points.length - 1; i++) {
    var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    sum += d;
  }
  return sum;
}
