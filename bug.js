```javascript
//In your Tailwind CSS configuration file (tailwind.config.js or tailwind.config.cjs)
module.exports = {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind CSS Bug</title>
  <link href="output.css" rel="stylesheet">
</head>
<body>
  <div class="bg-red-500 p-4">This div is red!</div>
  <div class="bg-blue-500 p-4">This div is blue!</div>
</body>
</html>
```