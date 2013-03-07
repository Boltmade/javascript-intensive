function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}

var Maybe = {
	"bind": function(f) {
		if(this.value !== null) {
			return f(this.value);
		} else {
			return this;
		}
	}
};

var m = object(Maybe);
m.value = 1;
m.bind(function(x) {
	var r = object(Maybe);
	r.value += x + 1;
	return r;
});
