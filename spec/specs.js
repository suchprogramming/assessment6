describe("YummyPizza", function() {
  describe("slices", function() {

    it("returns an error if non-numerical values are entered", function() {
      expect(YummyPizza.slicePizza("a")).to.equal(false);
    });

    it("returns 4 slices if the area is less than 50", function() {
      expect(YummyPizza.slicePizza(3)).to.equal(4);
    });

    it("returns 6 slices if the area is between 50 and 114", function() {
      expect(YummyPizza.slicePizza(12)).to.equal(6);
    });

    it("returns 8 slices if the area is greater than 114", function() {
      expect(YummyPizza.slicePizza(17)).to.equal(8);
    });
  });
});
