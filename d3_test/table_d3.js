var W = document.documentElement.clientWidth;
var H = document.documentElement.clientWidth;
var wW = window.innerWidth;
var wH = window.innerHeight;

var data = {
  "Client Width": W,
  "Client Height": H,
  "Window Width": wW,
  "Window Height": wH
}

var matrix = [
  [11975,  5871, 8916, 2868],
  [ 1951, 10048, 2060, 6171],
  [ 8010, 16145, 8090, 8045],
  [ 1013,   990,  940, 6907]
];

var tr = d3.select('#d3')
  .append("table")
  .append("tbody")
  .selectAll("tr")
  .data(matrix)
  .enter().append("tr");

var td = tr.selectAll("td")
  .data(function(d) { return d; })
  .enter().append("td")
    .text(function(d) { return d; });