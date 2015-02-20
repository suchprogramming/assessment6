describe("YummyPizza", function() {
  describe("area", function() {
    it("returns pizza area based on diameter", function() {
      expect(YummyPizza.area(8)).to.equal(50);
    });
  });
});
