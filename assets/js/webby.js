var svg = d3.select("svg"),
    width = + svg.attr("width"),
    height = + svg.attr("height");

var color = d3.scaleOrdinal(d3.schemeCategory20);

var simulation;

let cnt = 1;


//d3.json("graph.json", function(error, graph) {
//  if (error) throw error;
var graph = {
  "nodes": [],
  "links": []
}

document.getElementById('btn-start').addEventListener('click', function(){
  var concept = document.getElementById('concept').value

  if(typeof concept === 'undefined' || concept === "") return;

  createRootNode(concept);
});

function createRootNode( concept ){
  svg.selectAll("*").remove();
  graph.nodes = [];
  graph.links = [];
  simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(200).strength(1))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));
  graph.nodes[0] = {"id": ""+concept, "group": 1};

  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", 50)
      .attr("fill", function(d) { return color(d.group); })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended))
      .on('click', function(d){
        if (d3.event.defaultPrevented) return;
          console.log('click');
          //this.style.fill = this.style.fill === 'red' ? 'grey' : 'red';
          var n = {id: "new subject "+ cnt++, group: 1}
          graph.nodes.push(n);
          graph.links.push({source: n.id, target: d.id});
          restart();
      });



  var text = svg.append("g").attr("class", "labels").selectAll("g")
      .data(graph.nodes)
    .enter().append("g");

  text.append("text")
       .attr("text-anchor", "middle")
      .style("font-family", "sans-serif")
      .style("font-size", "1em")
      .text(function(d) { return d.id; });

  node.append("title")
      .text(function(d) { return d.id; });


  //  node.append("text")
  //    .text(function (d) {return d.id;});


  //node._groups[0][0].className = 'root';
  //node._groups[0][0].attr("r", 10)
  d3.select(node._groups[0][0]).attr("r", 75);
  d3.select(text._groups[0][0]).style("font-size", "2em");


  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);
//console.log(simulation.nodes().push({"id": "aaa", "group": 1}))
function restart() {

  // Apply the general update pattern to the nodes.
  node = node.data(graph.nodes, function(d) { return d.id;});
  node.exit().remove();
  node = node.enter()
    .append("circle")
      .attr("fill", function(d) { return color(d.group); }).attr("r", 50).merge(node)
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended))
        .on('click', function(d){
          if (d3.event.defaultPrevented) return;
          console.log('click');
          //this.style.fill = this.style.fill === 'red' ? 'grey' : 'red';
          var n = {id: "new subject "+ cnt++, group: 1}
          graph.nodes.push(n);
          graph.links.push({source: n.id, target: d.id});
          restart();
        });
  // Apply the general update pattern to the links.
  link = link.data(graph.links, function(d) { return d.source.id + "-" + d.target.id; });
  link.exit().remove();
  link = link.enter().append("line").merge(link);

  // Update and restart the simulation.
  simulation.nodes(graph.nodes);
  simulation.force("link").links(graph.links);
  simulation.alpha(1).restart();
}

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  //  node[0].x = w / 2;
  //  node[0].y = h / 2;

    text
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })

  }
}
//});

function dragstarted(d) {
  console.log('drag started');
  d3.event.sourceEvent.stopPropagation();
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {

  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  d3.event.sourceEvent.stopPropagation();

  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
