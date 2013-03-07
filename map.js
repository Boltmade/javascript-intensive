function map(f, arr) {
	var r = [];
	for(var i = 0; i < arr.length; i++) {
		r.push(f(arr[i]));
	}

	return r;
}

var y = 1;
map(function(x){return x + y;}, [1,2,3]);
