if(typeof(document.getElementsByClassName) == 'undefined') {
	document.getElementsByClassName = function( className, nodeName ) {
		var result = [];
		var tag = nodeName || '*';
		var pattern = new RegExp('(^| )' + className + '( |$)');
		var seek = document.getElementsByTagName(tag);

		for(var i = 0; i < seek.length; i++) {
			if(pattern.test(seek[i].className)) result.push(seek[i]);
		}

		return result;
	};
}
