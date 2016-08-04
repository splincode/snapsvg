var s = Snap("#draw");

var gridSize = 50;
var orig = {
  x: 0,
  y: 0
};
var block = s.rect(100, 100, 100, 100, 20, 20);
block.attr({
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 3
});
block.drag(

  function (dx, dy, x, y, e) {
      var xSnap = Snap.snapTo(gridSize, orig.x + dx, 100000000);
      var ySnap = Snap.snapTo(gridSize, orig.y + dy, 100000000);
      this.attr({
          x: xSnap,
          y: ySnap
      });
  },
  
  function (x, y, e) {
      orig.x = e.toElement.x.baseVal.value;
      orig.y = e.toElement.y.baseVal.value;
  }

);