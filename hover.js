var r = s.rect(150,150, 25,25);


var events = {
  hoverIn: function (mouseEvent, mouseX,mouseY) { console.log('hover in');},
  hoverOut: function(mouseEvent,mouseX, mouseY) {console.log('hover out');}
};

r.hover(events.hoverIn, events.hoverOut); 