var YummyPizza = {
  diameter: 0,
  area: function(diameter) {
    var area = Math.floor(3.14159 * (Math.pow(2,(diameter / 2))));
    return area;
  },
  topping: null,
}
