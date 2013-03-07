function Maybe(v) {
	this.value = v;
}

Maybe.prototype.bind = function(f) {
	if(this.value !== null) {
		return f(this.value);
	} else {
		return this;
	}
}

var m = new Maybe(2);
m.bind(function(x) { return new Maybe(x + 1);});
