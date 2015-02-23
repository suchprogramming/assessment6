var orders = []
var YummyPizza = {
  diameter: null,
  orderDate: null,
  slices: null,
  toppings: [],
  slicePizza: function(diameter) {
    if (isNaN(this.diameter) || this.diameter < 1) {
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
      $(".error").hide();
      $(".form-group").addClass("has-success has-feedback").removeClass("has-error has-feedback");
      $("#pizza-result").text("Your " + newPizza.diameter
      + " inch" + " Pizza Will Have " + newPizza.toppings
      + " and " + newPizza.slices + " slices!");
      $(".col-md-12").show();
      $("#order-info").append("<tr>" + "<td>" + newPizza.orderDate + "</td>" + "<td>" + newPizza.diameter + "</td>" + "<td>" + newPizza.toppings + "</td>" + "</tr>");
    } else {
      $(".result").hide();
      $(".error").show();
      $(".form-group").addClass("has-error has-feedback").removeClass("has-success has-feedback");;
      $(".error .text").text(" Invalid or Blank Dimension!");
    }
  });
});
