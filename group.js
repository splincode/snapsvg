

var s = Snap("#draw");


var sizeX = 400;
var sizeY = 150;

var width = 400;
var height = 250;


var el = s.rect(sizeX, sizeY, width, height).attr('fill', "#b5b5b5");

var el2 = s.rect(600, 600, 100, 100).attr('fill', "#000").drag();


var strokeAddLine = '#fff';
var stylePlus = {
  'font-size': 24, 
  'font-weight': 'bold',
  'fill': strokeAddLine,
  'cursor': 'pointer',
};

var stylePlusAddLine = {
  'fill': 'rgb(180, 180, 180)',
  'stroke': 'rgba(255,255,255,0.75)',
  'strokeWidth': 2,
  'class': 'addLine'
};

var addToRight = s.circle(sizeX+(width), sizeY+(height/2), 12).attr(stylePlusAddLine)
var addToLeft = s.circle(sizeX, sizeY+(height/2), 12).attr(stylePlusAddLine)
var addToTop = s.circle(sizeX+(width/2), sizeY, 12).attr(stylePlusAddLine)
var addToBottom = s.circle(sizeX+(width/2), sizeY+(height), 12).attr(stylePlusAddLine)

var rightText = s.text(sizeX+(width)-7, sizeY+(height/2)+7, "+").attr(stylePlus).attr({
  'id': 'right'
});

var leftText = s.text(sizeX-7, sizeY+(height/2)+7, "+").attr(stylePlus).attr({
  'id': 'left'
});

var topText = s.text(sizeX+((width/2)-7), sizeY+7, "+").attr(stylePlus).attr({
  'id': 'top'
});
var bottomText = s.text(sizeX+((width/2)-7), sizeY+height+7, "+").attr(stylePlus);


var g = s.g(); // создаем группу

var gPlusAddLine = s.g();
gPlusAddLine.add(addToTop, addToBottom, addToLeft, addToRight, rightText, leftText, topText, bottomText);

gPlusAddLine.attr('opacity', 0)


g.add([el, gPlusAddLine]).drag();

var events = {
  hoverIn: function (mouseEvent, mouseX,mouseY) { gPlusAddLine.attr('opacity', 1); },
  hoverOut: function(mouseEvent,mouseX, mouseY) { gPlusAddLine.attr('opacity', 0) }
};

g.hover(events.hoverIn, events.hoverOut); 


s.selectAll('text').forEach(function(el){
  el.node.onclick = function(e){

    var oriental = this.id; // top | right | left | bottom
    var x = e.x;
    var y = e.y;

    console.log(e)
    switch(oriental){
      case 'top':



      break;

      case 'right':
        console.log("M " + (sizeX+(width)) + ", " + (sizeY+(height/2)) + " T " + (sizeX+(width)) + ", " + (sizeY+(height/2)))
        s.path("M " + (sizeX+(width)) + ", " + (sizeY+(height/2)) + " T " + (sizeX+(width)+300) + ", " + (sizeY+(height/2)) + "").attr({
          stroke: "#000",
          strokeWidth: 2,
          fill: "transparent"
       }).drag()

        /*s.line(sizeX+(width), sizeY+(height/2), sizeX+(width), sizeY+(height/2)).attr({
          stroke: "#000",
          strokeWidth: 2
        }).animate({ x2: sizeX+(width) + 300, y2: sizeY+(height/2) }, 300).drag();
*/
      break;
    }

    //console.log(e.x + ":" +  e.y)
  }
})

