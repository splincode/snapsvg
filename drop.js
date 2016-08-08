  
var styleRect = {
  "fill": "#b5b5b5",
  "strokeWidth": "1",
  "stroke": "#000000"
}

var path = s.path("").attr({
    'stroke': '#b5b5b5',
    'strokeWidth': 3,
    'fill': 'transparent'
})



function allowDrop(ev) { // когда перемещаем по холсту
    ev.preventDefault();
}

function drag(e, typeElement) { // когда схватили
    e.dataTransfer.setData("typeElement", typeElement);
}




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

    break;
   }

   


  /* var pathString = path.attr('d')
   var coords = "" + e.offsetX + ", " + e.offsetY

   path.attr({
    'd': (pathString ? (pathString + "L " + coords + "") : ("M " + coords))
   })*/


}
