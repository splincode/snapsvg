# snapsvg
перевод API


### Инициализация холста

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    
    * { 
      margin: 0;
      padding: 0;
    }

    html, body {
      height: 100%; width: 100%;
    }

  </style>
</head>
<body>
  
  <svg id="draw" width="100%" height="100%">
    


  </svg>

  <script src="snap.svg-min.js"></script>
  <script src="app.js"></script>
</body>
</html>
````

```javascript
var s = Snap("#draw"); // теперь можем обращаться к холсту
```

### Перевод радиан в градусы и обратно

```javascript
Snap.rad(90); // 1.5707963267948966
Snap.deg(1.5707963267948966) // 90
```

### Угол между двумя точками

<img src="https://habrastorage.org/files/a48/0cd/b9e/a480cdb9e05744788be4075af690fd5d.png"/>

```javascript
Snap.angle(10, 10, 0, 0) // 45
```

### Привязка к сетке [ Snap.snapTo() ]

```javascript
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
```

### Получение RGB-модели

```javascript
Snap.getRGB('#f5f5f5');

// Object {r: 245, g: 245, b: 245, hex: "#f5f5f5", opacity: 1}
```