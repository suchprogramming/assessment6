describe("YummyPizza", function() {
  describe("slices", function() {

    it("returns an error if non-numerical values are entered", function() {
      expect(YummyPizza.slicePizza("a")).to.equal(false);
    });

    it("returns pizza slices based on diameter", function() {
      expect(YummyPizza.slicePizza(8)).to.equal(4);
    });

    it("returns pizza slices based on diameter", function() {
      expect(YummyPizza.slicePizza(3)).to.equal(4);
    });

    it("returns pizza slices based on diameter", function() {
      expect(YummyPizza.slicePizza(12)).to.equal(6);
    });

    it("returns pizza slices based on diameter", function() {
      expect(YummyPizza.slicePizza(16)).to.equal(8);
    });
  });
});
