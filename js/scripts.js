var YummyPizza = {
  diameter: 0,
  slices: 0,
  topping: null,
  slicePizza: function(diameter) {
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
    $(".error").hide();

    var inputtedPizzaDiameter = parseInt($("input#pizza-size").val());
    var inputtedPizzaTopping = $("#new-pizza input[type='radio']:checked").val();

    $("input#pizza-size").val("");

    var newPizza = Object.create(YummyPizza);
    newPizza.diameter = inputtedPizzaDiameter;
    newPizza.slices = newPizza.slicePizza(newPizza.diameter);
    newPizza.topping = inputtedPizzaTopping;

    if (newPizza.slices) {
      $(".result").show();
      $("#pizza-result").text("Your Pizza Will Have" + " "
      + newPizza.topping + " " + "and "
      + newPizza.slices + " slices!");
    } else {
      $(".error .text").text(" Invalid or Blank Dimension!");
      $(".result").hide();
      $(".error").show();
    }
  });
});
