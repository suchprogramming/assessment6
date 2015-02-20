var orders = []
var YummyPizza = {
  diameter: 0,
  orderDate: null,
  slices: 0,
  toppings: [],
  slicePizza: function(diameter) {
    this.diameter = diameter
    if (isNaN(diameter) || diameter < 1) {
      return false;
    } else {
      var area = Math.floor(3.14159 * (Math.pow((diameter / 2), 2)));
      if (area <= 50) {
        return 4;
      } else if (area > 50 && area < 114) {
        return 6
      } else {
        return 8
      }
    }
  },
}

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedPizzaDiameter = parseInt($("input#pizza-size").val());
    var pizzaToppings = $('input[name=pizza-topping]:checked').map(function() {
      return $(this).parent().text();
    }).get();

    // var inputtedPizzaTopping = $("#new-pizza input[type='checkbox']:checked").val();

    $("input#pizza-size").val("");
    $('input:checkbox').removeAttr('checked');

    var newPizza = Object.create(YummyPizza);
    newPizza.diameter = inputtedPizzaDiameter;
    newPizza.orderDate = ((new Date().toLocaleDateString()) + " " + (new Date().toLocaleTimeString()));
    newPizza.slices = newPizza.slicePizza(newPizza.diameter);
    newPizza.toppings = [];
    newPizza.toppings.push(pizzaToppings);
    orders.push(newPizza);

    if (newPizza.slices) {
      $(".result").show();
      $("#pizza-result").text("Your " + newPizza.diameter
      + " inch" + " Pizza Will Have " + newPizza.toppings
      + " and " + newPizza.slices + " slices!");
      $("ul#order-history").append("<li>" + newPizza.orderDate + "</li>")
    } else {
      $(".error .text").text(" Invalid or Blank Dimension!");
      $(".result").hide();
      $(".error").show();
    }
  });
});
