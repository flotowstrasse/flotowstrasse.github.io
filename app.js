// init
var controller = new ScrollMagic.Controller();

// the effect
var tween = TweenMax.to("#animate", 0.5, {
	scale: 1.3,
	repeat: 5,
	yoyo: true
});

// connect it
var scene = new ScrollMagic.Scene({
	triggerElement: "#trigger",
	duration: "100%"
}).setTween(tween).addIndicators().addTo(controller);






