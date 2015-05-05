var greet = require("greet");
describe('greet', function() {
	it("is a dummy success case", function () {
		expect(1).to.eql(1);
	});
	it("should greet a person by name", function () {
		expect("hello, zeng").to.eql(greet("zeng"));
	});
	it("should greet a person flirtatiously if drunk", function () {
		expect("hello, zeng, you look sexy today")
			.to.eql(greet("zeng", "--drunk"));
	});
});
