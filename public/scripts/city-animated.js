(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"city_animated_atlas_", frames: [[806,0,16,480],[539,719,354,110],[0,573,537,256],[539,573,425,144],[0,0,804,571],[806,482,45,74]]}
];


// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["city_animated_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cityrectanglecontents = function() {
	this.initialize(ss["city_animated_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cityrectangleshadow = function() {
	this.initialize(ss["city_animated_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cityrectangle = function() {
	this.initialize(ss["city_animated_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.city = function() {
	this.initialize(ss["city_animated_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.iminimized = function() {
	this.initialize(ss["city_animated_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.rect_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cityrectangleshadow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rect_shadow, new cjs.Rectangle(0,0,537,256), null);


(lib.rect_contents = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cityrectanglecontents();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rect_contents, new cjs.Rectangle(0,0,354,110), null);


(lib.rect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cityrectangle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rect, new cjs.Rectangle(0,0,425,144), null);


(lib.hotspotA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.iminimized();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hotspotA, new cjs.Rectangle(0,0,45,74), null);


(lib.flagpole = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-4,-4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flagpole, new cjs.Rectangle(-4,-4,8,240), null);


// stage content:
(lib.cityanimated = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rect_contents
	this.instance = new lib.rect_contents();
	this.instance.setTransform(876,197,1,1,0,0,0,177,55);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(77).to({alpha:0.8889},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0},0).wait(27));

	// flagpole
	this.instance_1 = new lib.flagpole();
	this.instance_1.setTransform(665.8,360.95,1,0.0043,0,0,0,0.1,116.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:116,x:665.7},0).wait(103).to({alpha:1},0).wait(1).to({scaleY:0.0629,y:354.2},0).wait(1).to({scaleY:0.1214,y:347.45},0).wait(1).to({scaleY:0.18,y:340.65},0).wait(1).to({scaleY:0.2386,y:333.85},0).wait(1).to({scaleY:0.2972,y:327.05},0).wait(1).to({scaleY:0.3557,y:320.3},0).wait(1).to({scaleY:0.4143,y:313.55},0).wait(1).to({scaleY:0.4729,y:306.75},0).wait(1).to({scaleY:0.5314,y:300},0).wait(1).to({scaleY:0.59,y:293.2},0).wait(1).to({scaleY:0.6486,y:286.45},0).wait(1).to({scaleY:0.7071,y:279.7},0).wait(1).to({scaleY:0.7657,y:272.85},0).wait(1).to({scaleY:0.8243,y:266.1},0).wait(1).to({scaleY:0.8829,y:259.3},0).wait(1).to({scaleY:0.9414,y:252.55},0).wait(1).to({scaleY:1,y:245.8},0).wait(130).to({scaleY:0.917,y:255.35},0).wait(1).to({scaleY:0.834,y:264.95},0).wait(1).to({scaleY:0.7511,y:274.55},0).wait(1).to({scaleY:0.6681,y:284.15},0).wait(1).to({scaleY:0.5851,y:293.75},0).wait(1).to({scaleY:0.5021,y:303.35},0).wait(1).to({scaleY:0.4192,y:312.9},0).wait(1).to({scaleY:0.3362,y:322.55},0).wait(1).to({scaleY:0.2532,y:332.1},0).wait(1).to({scaleY:0.1702,y:341.75},0).wait(1).to({scaleY:0.0873,y:351.3},0).wait(1).to({scaleY:0.0043,y:360.95},0).wait(2));

	// rect
	this.instance_2 = new lib.rect();
	this.instance_2.setTransform(669,198,0.0023,1,0,0,0,0,72);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:212.5,x:669.5},0).wait(119).to({scaleX:0.0014,x:669.3},0).wait(1).to({scaleX:0.0005,x:669.1},0).wait(1).to({skewY:180,x:668.9},0).wait(1).to({scaleX:0.0014,x:668.7},0).wait(1).to({scaleX:0.0023,x:668.5,alpha:1},0).wait(1).to({scaleX:0.0812,skewY:0,x:686.25},0).wait(1).to({scaleX:0.1647,x:704},0).wait(1).to({scaleX:0.2482,x:721.75},0).wait(1).to({scaleX:0.3318,x:739.5},0).wait(1).to({scaleX:0.4153,x:757.25},0).wait(1).to({scaleX:0.4988,x:775},0).wait(1).to({scaleX:0.5824,x:792.75},0).wait(1).to({scaleX:0.6659,x:810.5},0).wait(1).to({scaleX:0.7494,x:828.25},0).wait(1).to({scaleX:0.8329,x:846},0).wait(1).to({scaleX:0.9165,x:863.75},0).wait(1).to({scaleX:1,x:881.5},0).wait(102).to({scaleX:0.9169,x:863.85},0).wait(1).to({scaleX:0.8337,x:846.15},0).wait(1).to({scaleX:0.7506,x:828.5},0).wait(1).to({scaleX:0.6674,x:810.85},0).wait(1).to({scaleX:0.5843,x:793.15},0).wait(1).to({scaleX:0.5012,x:775.5},0).wait(1).to({scaleX:0.418,x:757.85},0).wait(1).to({scaleX:0.3349,x:740.15},0).wait(1).to({scaleX:0.2518,x:722.5},0).wait(1).to({scaleX:0.1686,x:704.85},0).wait(1).to({scaleX:0.0855,x:687.15},0).wait(1).to({scaleX:0.0023,x:669.5},0).wait(1).to({alpha:0},0).wait(14));

	// shadow
	this.instance_3 = new lib.rect_shadow();
	this.instance_3.setTransform(881.5,253,1,1,0,0,0,268.5,128);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(137).to({alpha:0.1667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:1},0).wait(92).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(27));

	// hotspot_B_copy
	this.instance_4 = new lib.hotspotA();
	this.instance_4.setTransform(667,309.35,1,1,0,0,180,22.5,37);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(11).to({y:307.5},0).wait(1).to({y:305.65},0).wait(1).to({y:303.8},0).wait(1).to({y:302},0).wait(1).to({y:300.15},0).wait(1).to({y:298.3},0).wait(1).to({y:296.5},0).wait(1).to({y:294.65},0).wait(1).to({y:292.8},0).wait(1).to({y:291},0).wait(1).to({y:292.8},0).wait(1).to({y:294.65},0).wait(1).to({y:296.5},0).wait(1).to({y:298.3},0).wait(1).to({y:300.15},0).wait(1).to({y:302},0).wait(1).to({y:303.8},0).wait(1).to({y:305.65},0).wait(1).to({y:307.5},0).wait(1).to({y:309.35},0).wait(1).to({y:307.5},0).wait(1).to({y:305.65},0).wait(1).to({y:303.8},0).wait(1).to({y:302},0).wait(1).to({y:300.15},0).wait(1).to({y:298.3},0).wait(1).to({y:296.5},0).wait(1).to({y:294.65},0).wait(1).to({y:292.8},0).wait(1).to({y:291},0).wait(1).to({y:292.8},0).wait(1).to({y:294.65},0).wait(1).to({y:296.5},0).wait(1).to({y:298.3},0).wait(1).to({y:300.15},0).wait(1).to({y:302},0).wait(1).to({y:303.8},0).wait(1).to({y:305.65},0).wait(1).to({y:307.5},0).wait(1).to({y:309.35},0).wait(1).to({y:307.5},0).wait(1).to({y:305.65},0).wait(1).to({y:303.8},0).wait(1).to({y:302},0).wait(1).to({y:300.15},0).wait(1).to({y:298.3},0).wait(1).to({y:296.5},0).wait(1).to({y:294.65},0).wait(1).to({y:292.8},0).wait(1).to({y:291},0).wait(1).to({y:293},0).wait(1).to({y:295.05},0).wait(1).to({y:297.1},0).wait(1).to({y:299.15},0).wait(1).to({y:301.15},0).wait(1).to({y:303.2},0).wait(1).to({y:305.25},0).wait(1).to({y:307.3},0).wait(1).to({y:309.35},0).wait(2).to({scaleX:1.0379,scaleY:1.0379,y:307.4,alpha:0.9},0).wait(1).to({scaleX:1.0757,scaleY:1.0757,y:305.5,alpha:0.8},0).wait(1).to({scaleX:1.1136,scaleY:1.1136,y:303.55,alpha:0.7},0).wait(1).to({scaleX:1.1514,scaleY:1.1514,y:301.65,alpha:0.6},0).wait(1).to({scaleX:1.1893,scaleY:1.1893,y:299.7,alpha:0.5},0).wait(1).to({scaleX:1.2271,scaleY:1.2271,y:297.8,alpha:0.4},0).wait(1).to({scaleX:1.265,scaleY:1.265,y:295.85,alpha:0.3},0).wait(1).to({scaleX:1.3028,scaleY:1.3028,y:293.95,alpha:0.2},0).wait(1).to({scaleX:1.3407,scaleY:1.3407,y:292,alpha:0.1},0).wait(1).to({scaleX:1.3785,scaleY:1.3785,y:290.1,alpha:0},0).wait(39).to({_off:true},1).wait(120));

	// hotspot_B
	this.instance_5 = new lib.hotspotA();
	this.instance_5.setTransform(422,117.3,1,1,0,0,0,22.5,37);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(11).to({y:115.45},0).wait(1).to({y:113.6},0).wait(1).to({y:111.8},0).wait(1).to({y:109.95},0).wait(1).to({y:108.15},0).wait(1).to({y:106.3},0).wait(1).to({y:104.45},0).wait(1).to({y:102.65},0).wait(1).to({y:100.8},0).wait(1).to({y:99},0).wait(1).to({y:100.8},0).wait(1).to({y:102.65},0).wait(1).to({y:104.5},0).wait(1).to({y:106.3},0).wait(1).to({y:108.15},0).wait(1).to({y:110},0).wait(1).to({y:111.8},0).wait(1).to({y:113.65},0).wait(1).to({y:115.5},0).wait(1).to({y:117.35},0).wait(1).to({y:115.5},0).wait(1).to({y:113.65},0).wait(1).to({y:111.8},0).wait(1).to({y:110},0).wait(1).to({y:108.15},0).wait(1).to({y:106.3},0).wait(1).to({y:104.5},0).wait(1).to({y:102.65},0).wait(1).to({y:100.8},0).wait(1).to({y:99},0).wait(1).to({y:100.8},0).wait(1).to({y:102.65},0).wait(1).to({y:104.5},0).wait(1).to({y:106.3},0).wait(1).to({y:108.15},0).wait(1).to({y:110},0).wait(1).to({y:111.8},0).wait(1).to({y:113.65},0).wait(1).to({y:115.5},0).wait(1).to({y:117.35},0).wait(1).to({y:115.5},0).wait(1).to({y:113.65},0).wait(1).to({y:111.8},0).wait(1).to({y:110},0).wait(1).to({y:108.15},0).wait(1).to({y:106.3},0).wait(1).to({y:104.5},0).wait(1).to({y:102.65},0).wait(1).to({y:100.8},0).wait(1).to({y:99},0).wait(1).to({y:100.8},0).wait(1).to({y:102.65},0).wait(1).to({y:104.5},0).wait(1).to({y:106.3},0).wait(1).to({y:108.15},0).wait(1).to({y:110},0).wait(1).to({y:111.8},0).wait(1).to({y:113.65},0).wait(1).to({y:115.5},0).wait(1).to({y:117.35},0).wait(6).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).wait(39).to({_off:true},1).wait(120));

	// hotspot_A
	this.instance_6 = new lib.hotspotA();
	this.instance_6.setTransform(113.5,253,1,1,0,0,0,22.5,37);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(11).to({y:251.15},0).wait(1).to({y:249.3},0).wait(1).to({y:247.5},0).wait(1).to({y:245.65},0).wait(1).to({y:243.85},0).wait(1).to({y:242},0).wait(1).to({y:240.15},0).wait(1).to({y:238.35},0).wait(1).to({y:236.5},0).wait(1).to({y:234.7},0).wait(1).to({y:236.5},0).wait(1).to({y:238.35},0).wait(1).to({y:240.2},0).wait(1).to({y:242},0).wait(1).to({y:243.85},0).wait(1).to({y:245.7},0).wait(1).to({y:247.5},0).wait(1).to({y:249.35},0).wait(1).to({y:251.2},0).wait(1).to({y:253.05},0).wait(1).to({y:251.2},0).wait(1).to({y:249.35},0).wait(1).to({y:247.5},0).wait(1).to({y:245.7},0).wait(1).to({y:243.85},0).wait(1).to({y:242},0).wait(1).to({y:240.2},0).wait(1).to({y:238.35},0).wait(1).to({y:236.5},0).wait(1).to({y:234.7},0).wait(1).to({y:236.5},0).wait(1).to({y:238.35},0).wait(1).to({y:240.2},0).wait(1).to({y:242},0).wait(1).to({y:243.85},0).wait(1).to({y:245.7},0).wait(1).to({y:247.5},0).wait(1).to({y:249.35},0).wait(1).to({y:251.2},0).wait(1).to({y:253.05},0).wait(1).to({y:251.2},0).wait(1).to({y:249.35},0).wait(1).to({y:247.5},0).wait(1).to({y:245.7},0).wait(1).to({y:243.85},0).wait(1).to({y:242},0).wait(1).to({y:240.2},0).wait(1).to({y:238.35},0).wait(1).to({y:236.5},0).wait(1).to({y:234.7},0).wait(1).to({y:236.5},0).wait(1).to({y:238.35},0).wait(1).to({y:240.2},0).wait(1).to({y:242},0).wait(1).to({y:243.85},0).wait(1).to({y:245.7},0).wait(1).to({y:247.5},0).wait(1).to({y:249.35},0).wait(1).to({y:251.2},0).wait(1).to({y:253.05},0).wait(6).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).wait(39).to({_off:true},1).wait(120));

	// city
	this.instance_7 = new lib.city();
	this.instance_7.setTransform(0,149);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(264));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,422.1,550,297.9);
// library properties:
lib.properties = {
	id: 'C8988853946B4B0E9C2B031DC42B0D5B',
	width: 1200,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"./vendor/city-animated_atlas_.png", id:"city_animated_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C8988853946B4B0E9C2B031DC42B0D5B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers, container) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;
		if (container === window) {	
			var iw = window.innerWidth, ih=window.innerHeight;
		} else {
			var iw = container.offsetWidth, ih=container.offsetHeight;
		}		
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;