function render_text() {

  var w = 960,
    h = 500;

  var svg = d3.select("#d3")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  var text = svg
    .append("text")
    .text("Hello D3!")
    .attr("y", 50);

  return text

}