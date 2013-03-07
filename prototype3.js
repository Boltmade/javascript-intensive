var config = {
	"timeout": 12,
	"url": "http://example.com",
	"go": function() {console.log("went!");}
};

var newConfig = object(config);
newConfig.timeout = 14;
