var s = Snap("#draw");


function allowDrop(ev) { // когда перемещаем по холсту
    ev.preventDefault();
}

function drag(e, typeElement) { // когда схватили
    e.dataTransfer.setData("typeElement", typeElement);
}

var styleRect = {
  "fill": "#b5b5b5",
  "strokeWidth": "1",
  "stroke": "#000000"
}


path = s.path("").attr({
  'stroke': "#222",
  'fill': 'transparent',
  'strokeWidth': 3 
})

function drop(e) { // событие бросили в корзину

   var typeElement = e.dataTransfer.getData("typeElement");

   switch(typeElement) {
    case 'rectangle':

      var width = 150,
          height = 70;

      s.rect(e.offsetX-(width/2), e.offsetY-(height/2), width, height, 0).attr(styleRect).drag()


    break;
    case 'circle':

      var radius = 40;
      s.circle(e.offsetX, e.offsetY, radius/2).attr(styleRect).drag()

      pathString = path.attr('d');
      coords = e.offsetX + ", " + e.offsetY;

      path.attr({
        d: (pathString) ? (pathString + "L " + coords) : ("M " + coords)
      })




    break;
   }

}

var pathArray = []

s.click(function(e){

  if (e.target.tagName == 'svg') {


    var radius = 20;
    s.circle(e.offsetX, e.offsetY, radius/2).attr(styleRect).drag()

    pathArray.push({
      x: e.offsetX,
      y: e.offsetY
    })

    pathString = path.attr('d');
    coords = e.offsetX + ", " + e.offsetY;

    path.attr({
      d: (pathString) ? (pathString + "L " + coords) : ("M " + coords)
    })

  }

})