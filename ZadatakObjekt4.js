var Rectangle = new Object();

Rectangle.width = 2;
Rectangle.height = 4;

var calcArea = function(width,height){
    this.Area = width * height;
};
var calcPerimeter = function(width,height){
    this.Perimeter = width*2 + height*2;
};
Rectangle.calcArea = calcArea;
Rectangle.calcPerimeter = calcPerimeter;

Rectangle.calcArea(Rectangle.width,Rectangle.height);
Rectangle.calcPerimeter(Rectangle.width,Rectangle.height);

console.log(Rectangle.Area);
console.log(Rectangle.Perimeter);
