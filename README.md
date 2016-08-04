# snapsvg
перевод API


*** Инициализация холста

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

*** Перевод радиан в градусы и обратно

```
Snap.rad(90); // 1.5707963267948966 (радиан)

Snap.deg(1.5707963267948966) // 90 (градусов)
```
