function evbind(el, ev, handler) {
	if(el.addEventListener) {
		el.addEventListener(ev, handler, false);
	} else if(el.attachEvent) {
		el.attachEvent('on'+ev, function() {handler.apply(el);});
	}
}
