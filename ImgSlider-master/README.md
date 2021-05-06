# ImgSlider
Web page slider for images using css/js

[Slider demo](https://int47.github.io/ImgSlider/)

<p align="center">
  <img src="https://github.com/int47/imgSlider/blob/gh-pages/demo-screenshot.png">
</p>

## Features
* buttons for switching slides
* autoplay and pause
* smooth slides switching
* slides are looped
* both `img` and `div` can be a slide
* available switching slides with touch control
* possible to use multiple sliders on the page

## Options
* **autoplayEnabled** (boolean) - enable or disable slides autoplay. Default value: `false`
```javascript
imgSlider("slider01", { autoplayEnabled: true })
```
* **autoplayInterval** (number) - set the time in milliseconds before switching a single slide. Default value: `5000`
```javascript
imgSlider("slider01", { autoplayInterval: 5000 })
```
* **buttonsVisible** (boolean) - set visibility of all slider buttons. Default value: `true`
```javascript
imgSlider("slider01", { buttonsVisible: false })
```
* **maxWidth** (string) - set slider max width in appropriate units. Default value: `'500px'`
```javascript
imgSlider("slider01", {
    maxWidth: '50%',
    maxHeight: '250px'
});
```
* **maxHeight** (string) - set slider max height in appropriate units. Default value: `'500px'`

## Usage
You need to use only script from /dist/imgSlider.js for your page.
Then specify the `id` of slider container with content and the object with slider options if necessary:
```javascript
imgSlider("slider01", {
    autoplayEnabled: true,
    autoplayInterval: 3000,
    buttonsVisible: false
});
imgSlider("slider02", {
    maxWidth: '500px',
    maxHeight: '300px'
);
imgSlider("slider03"); // Default values for all options will be used.
```

### Basic markup

```html
<!DOCTYPE html>
<html>

<head>
    <script src="./dist/imgSlider.js"></script>
</head>

<body>
    <div id="slider01">
        <img src="...">
        <img src="...">
        <img src="...">
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function (event) {
            imgSlider("slider01", {
                autoplayEnabled: true
            });
        });
    </script>
</body>

</html>
```
