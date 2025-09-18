(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.apple = function() {
	this.initialize(img.apple);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.banana1 = function() {
	this.initialize(img.banana1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.cherries = function() {
	this.initialize(img.cherries);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.home = function() {
	this.initialize(img.home);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.next = function() {
	this.initialize(img.next);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.thankyou = function() {
	this.initialize(img.thankyou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.TQS = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("TQ_audiomassoutputwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.thankyou();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0877,scaleY:1.0877,x:-22,y:-22},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,556.9,556.9);


(lib.Cher = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Cherrywav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.cherries();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0877,scaleY:1.0877,x:-22,y:-22},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,556.9,556.9);


(lib.C = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("cwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF314C").s().p("AkLP+QjHhGiOiIQiOiJhNjMQhQjNAAkMQAAj5BLjLQBLjLCOiRQCJiLDLhNQDKhMDuAAQCFAABsAQQBpAOBbAYQBeAaBOAjQBLAgA7AcIAAH9Ig+AAQgogig7gvQg9guhMgsQhOgthagfQhagfhnAAQhyAAhoAjQhlAlhYBTQhTBRgzCDQg0CFAAC8QAADFA5CEQA3CDBUBNQBWBOBpAiQBpAfBoAAQBiABBigeQBfgdBSgzQBGgoA7gvQA7guAmghIA5AAIAAH1IiYBDQhHAehQAYQhnAdhZAQQhbAPieAAQjpAAjGhFg");
	this.shape.setTransform(114.25,194.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF314C").s().p("AkvSMQjjhPiiicQiiibhZjpQhajpAAkyQAAkbBVjnQBVjoCjilQCcifDnhXQDmhWEQAAQCXAAB6ARQB4AQBnAcQBsAeBYAmQBXAmBCAgIAAJDIhHAAQgtgmhEg1QhFg1hWgyQhZgzhmgkQhngjh2AAQiCAAh1ApQh0AphkBfQhfBbg5CWQg8CXAADWQAADhBACXQA/CVBgBXQBiBYB4AnQB4AlB2AAQBwAABvgiQBtghBdg6QBPguBEg0QBDg1ArgnIBBAAIAAI8IisBLQhSAkhaAZQh1AihnASQhnASi0AAQkKgBjghOg");
	this.shape_1.setTransform(114.425,195.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AkLP+QjHhGiOiIQiOiJhNjMQhQjNAAkMQAAj5BLjLQBLjLCOiRQCJiLDLhNQDKhMDuAAQCFAABsAQQBpAOBbAYQBeAaBOAjQBLAgA7AcIAAH9Ig+AAQgogig7gvQg9guhMgsQhOgthagfQhagfhnAAQhyAAhoAjQhlAlhYBTQhTBRgzCDQg0CFAAC8QAADFA5CEQA3CDBUBNQBWBOBpAiQBpAfBoAAQBiABBigeQBfgdBSgzQBGgoA7gvQA7guAmghIA5AAIAAH1IiYBDQhHAehQAYQhnAdhZAQQhbAPieAAQjpAAjGhFg");
	this.shape_2.setTransform(114.25,194.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-25.4,258.7,419.7);


(lib.btnC_next = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(0,0,0.3086,0.3086);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.btnC_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(158,0,0.3086,0.3086,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.btnB_next = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(0,0,0.3086,0.3086);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.btnB_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(158,0,0.3086,0.3086,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.btnA_next = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(0,0,0.3086,0.3086);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.btn_Play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AkslaIJZFaIpYFbg");
	this.shape.setTransform(97.6429,34.5365,0.6605,0.6605);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339900").s().p("ANaE5IA5iIIiNlmIB6AAIBXDpIBSjpIB3AAIjIHugAygE5IAAngIDNAAQAtABAfAHQAgAJAYAPQAdATAPAeQAQAeAAApQAAAfgLAfQgMAfgVAVQgcAcgkAPQgjAOg1AAIhMAAIAACdgAwjBBIAjAAQAgABAUgEQAUgEAOgMQAMgKAFgOQAGgOAAgUQAAgUgLgPQgLgOgOgHQgUgHgSgBIgxgBIgVAAgAGCCeQgjghAAgyQAAgnASgZQARgYAhgOQAggPAwgGQAwgHAzgCIAAgDQAAgdgZgLQgYgMgwAAQgdAAggAKQggAKgPAFIgKAAIAAhWQASgGAqgGQApgHApABQBjgBAtAfQArAeABBCIAAD0IhzAAIAAgmIgYARQgNAKgNAGQgRAIgSAEQgTADgWAAQgzAAgjgfgAIiAPQgbADgOAFQgSAFgIAKQgKAMAAAQQAAAMACAGQACAIAIAGQAHAHAKACQALADAWAAQARAAASgGQASgIAOgLIAAhMIg0AGgArCC9IAAn1IB0AAIAAH1g");
	this.shape_1.setTransform(104.6941,37.1952,0.6605,0.6605);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#003300").ss(8,1,1).p("A3NpBMAubAAAQBkAAAABkIAAO7QAABkhkAAMgubAAAQhkAAAAhkIAAu7QAAhkBkAAg");
	this.shape_2.setTransform(104.7399,38.1472,0.6606,0.6606);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("A3NJCQhkgBAAhjIAAu6QAAhlBkAAMAubAAAQBkAAAABlIAAO6QAABjhkABg");
	this.shape_3.setTransform(104.7399,38.1472,0.6606,0.6606);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,217.5,84.3);


(lib.btn_home = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.home();
	this.instance.setTransform(0,0,0.1443,0.1443);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.9,73.9);


(lib.banana = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Bananawav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.banana1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0689,scaleY:1.0689,x:-18,y:-18},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-18,547.3,547.3);


(lib.B = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("bwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB83B").s().p("AuCQaMAAAggzIMwAAQD9AAB2ARQB1ARB0A6QB4A8A7BnQA6BmgBCDQAACYhQB2QhQBziTBBIAAALQDOApB6CAQB3B/ABDTQAACYg+B4Qg9B4hsBPQh7BdiVAnQiWAojkAAgAlnKZIAnAAQDlAABhgBQBjgCBTgjQBUgjAhg6QAeg7AAhNQAAhkgmg2Qgng2hdgbQhAgThtgBQhvgCh6ABIh2AAgAlnjcIBVAAQCAAABbgEQBYgEA1gYQBKggAWgzQAWg1ABhEQgBgzgZg0Qgbg1hCgZQg7gXhXgBQhZgDifAAIgzAAg");
	this.shape.setTransform(125.6,194.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB83B").s().p("AvnSRMAAAgkhIOLAAQEaABCDASQCDATCABBQCGBDBCBzQBBBwgBCTQABCphaCDQhaCAijBIIAAANQDmAtCHCOQCFCPAADqQAACphECFQhFCGh3BYQiKBoilArQimAsj+ABgAmPLkIAsAAQD+AABrgCQBugBBdgnQBegoAkhAQAihCAAhVQAAhvgqg8Qgsg9hogeQhGgUh5gBQh9gCiGAAIiEAAgAmPj0IBeAAQCPAABkgGQBkgEA5gaQBSglAZg5QAag6AAhKQAAg7gcg6Qgeg6hLgcQhBgZhhgCQhigDiyAAIg4AAg");
	this.shape_1.setTransform(126.55,195.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AuCQaMAAAggzIMwAAQD9AAB2ARQB1ARB0A6QB4A8A7BnQA6BmgBCDQAACYhQB2QhQBziTBBIAAALQDOApB6CAQB3B/ABDTQAACYg+B4Qg9B4hsBPQh7BdiVAnQiWAojkAAgAlnKZIAnAAQDlAABhgBQBjgCBTgjQBUgjAhg6QAeg7AAhNQAAhkgmg2Qgng2hdgbQhAgThtgBQhvgCh6ABIh2AAgAlnjcIBVAAQCAAABbgEQBYgEA1gYQBKggAWgzQAWg1ABhEQgBgzgZg0Qgbg1hCgZQg7gXhXgBQhZgDifAAIgzAAg");
	this.shape_2.setTransform(125.6,194.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-20.6,264.9,410.1);


(lib.a_Apple = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Apple_audiomassoutput2wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.apple();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0813,scaleY:1.0813,x:-21,y:-21},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-21,553.6,553.6);


(lib.A = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("audioAwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD2C2C").s().p("AIPQaIiRmoIsIAAIiTGoIohAAMAMHggzIJvAAMAMHAgzgAkIDxIIDAAIkBrwg");
	this.shape.setTransform(121.075,194.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD2C2C").s().p("AJUSjIikngItuAAIilHgIppAAMANtglFIK/AAMANtAlFgAkrEQIJHAAIkjtRg");
	this.shape_1.setTransform(121.175,195.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AIPQaIiRmoIsIAAIiTGoIohAAMAMHggzIJvAAMAMHAgzgAkIDxIIDAAIkBrwg");
	this.shape_2.setTransform(121.075,194.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-23.9,274.2,416.7);


// stage content:
(lib.learn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Welcome:0,A:29,B:59,C:89,"Thank you":119};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [28,58,88,118,119,149];
	// timeline functions:
	this.frame_28 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btnPlay.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(30);
		});
	}
	this.frame_58 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btnANext.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(60);
		});
		
		
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_88 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btnBBack.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(30);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btnBNext.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(90);
		});
	}
	this.frame_118 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btnCBack.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(60);
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btnCNext.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(120);
		});
	}
	this.frame_119 = function() {
		playSound("TQ_audiomassoutputwav");
	}
	this.frame_149 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btnHome.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(1);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(30).call(this.frame_58).wait(30).call(this.frame_88).wait(30).call(this.frame_118).wait(1).call(this.frame_119).wait(30).call(this.frame_149).wait(1));

	// Contents
	this.btnPlay = new lib.btn_Play();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.setTransform(640.1,590.6,1,1,0,0,0,104.8,38.1);
	new cjs.ButtonHelper(this.btnPlay, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AA0CTIAAiOQAAgQgCgRQgCgSgFgIQgEgJgKgFQgKgEgSAAQgLAAgNAEQgNAEgPAJIAADKIhcAAIAAkdIBcAAIAAAfQAYgTAXgKQAWgKAbAAQAuAAAaAbQAaAbAAA2IAAC5g");
	this.shape.setTransform(885.75,167.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AhnCPIAAkcIBcAAIAAApQAdgaAXgIQAWgIATgBIAKABIALABIAABXIgHAAQgHgCgNgBIgVgBQgUAAgPACQgPADgQAGIAAC+g");
	this.shape_1.setTransform(855.85,167.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AhyB+QgcgaAAgnQAAgfAPgUQAOgTAZgLQAagMAlgEQAlgFApgDIAAgBQAAgYgUgJQgTgJglAAQgXAAgaAIIglANIgIAAIAAhFQAPgEAggFQAhgGAhAAQBNAAAjAYQAiAYABA0IAADBIhbAAIAAgeIgSANQgLAIgKAFQgNAGgOADQgOADgSAAQgpAAgbgZgAALANQgUADgLAEQgOAEgHAIQgIAIABAOQAAAJABAFQABAGAHAFQAGAFAHACQAJADARAAQANAAAOgGQAOgFALgKIAAg7IgpAEg");
	this.shape_2.setTransform(822.75,167.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AhpBxQgtgnAAhIQAAhGArgpQArgpBLAAQBGAAAjAjQAjAkAABCIAAAeIjRAAQACAiAYASQAXASAtgBQAdABAbgKQAcgLAPgMIALAAIAABKQgfAMgcAGQgbAFgiAAQhVAAgugmgAgnhPQgRAOgCAeIB2AAQgBgdgNgOQgOgPgcAAQgaAAgRAOg");
	this.shape_3.setTransform(789.025,167.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AiHC9IAAl6IBhAAIAAExICuAAIAABJg");
	this.shape_4.setTransform(756.95,163.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AhyBvQgqgpAAhGQAAhGAqgpQApgoBJAAQBLAAApApQAoAoAABGQAABGgoApQgqAphKAAQhJAAgpgpgAgXhUQgKAEgKALQgIAKgEARQgGARAAAZQABAYADARQAFARAJALQAHAKAMAEQALAFAOAAQAMAAAMgEQALgFAIgKQAIgKAFgQQAFgPAAgcQAAgYgFgRQgFgRgIgKQgIgKgLgFQgMgEgNAAQgNAAgKADg");
	this.shape_5.setTransform(702.75,167.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgrClQgagWAAg0IAAiFIgmAAIAAg+IAmAAIAAhSIBbAAIAABSIBVAAIAAA+IhVAAIAABlIAAAaQAAALAEAJQAEAJAJAFQAJAGASAAQAGgBAMgDQAMgDAEgCIAHAAIAAA/QgPADgQACQgQACgZAAQg0AAgagVg");
	this.shape_6.setTransform(673,164);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AhpBxQgtgnAAhIQAAhGArgpQArgpBLAAQBGAAAjAjQAjAkAABCIAAAeIjRAAQACAiAYASQAXASAtgBQAdABAbgKQAcgLAPgMIALAAIAABKQgfAMgcAGQgbAFgiAAQhVAAgugmgAgnhPQgRAOgCAeIB2AAQgBgdgNgOQgOgPgcAAQgaAAgRAOg");
	this.shape_7.setTransform(626.075,167.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("ACNCTIAAiPIAAgjQgBgOgFgJQgEgJgJgFQgKgEgRAAQgMAAgLAEQgKAEgQAJIAADKIhbAAIAAiPIgBgiQgBgPgFgJQgEgJgJgFQgKgEgQAAQgOAAgNAGQgNAFgJAGIAADKIhdAAIAAkdIBdAAIAAAfQAXgSAWgLQAVgKAbAAQAbAAAVANQAWAMAMAZQAbgXAagOQAagNAaAAQAtAAAZAcQAXAcAAA0IAAC5g");
	this.shape_8.setTransform(581.2,167.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AhyBvQgqgpAAhGQAAhGAqgpQApgoBJAAQBKAAAqApQApAogBBGQABBGgpApQgqAphKAAQhJAAgpgpgAgXhUQgKAEgJALQgIAKgGARQgEARAAAZQAAAYADARQAFARAJALQAIAKALAEQALAFAOAAQAMAAALgEQAMgFAIgKQAIgKAFgQQAFgPAAgcQAAgYgFgRQgFgRgIgKQgIgKgMgFQgLgEgNAAQgMAAgLADg");
	this.shape_9.setTransform(535.7,167.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AgfCOQgfgJgXgTQgWgSgNgdQgMgcAAgmQAAgmANgeQANgdAYgTQAXgSAegJQAegHAggBQAdAAAZAHQAZAGAVAKIAABOIgNAAIgMgLQgIgGgLgFQgLgGgMgDQgMgEgQgBQglAAgTAYQgTAXgBAnQAAAqAVAVQATAVAlAAQARAAAOgEQAOgDAJgGQAJgFAGgFIAMgLIANAAIAABNQgVAKgYAHQgXAGgdAAQglgBgegIg");
	this.shape_10.setTransform(502.75,167.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AgtDGIAAmLIBbAAIAAGLg");
	this.shape_11.setTransform(478.275,162.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("AhpBxQgtgnAAhIQAAhGArgpQArgpBLAAQBGAAAjAjQAjAkAABCIAAAeIjRAAQACAiAYASQAXASAtgBQAdABAbgKQAcgLAPgMIALAAIAABKQgfAMgcAGQgbAFgiAAQhVAAgugmgAgnhPQgRAOgCAeIB2AAQgBgdgNgOQgOgPgcAAQgaAAgRAOg");
	this.shape_12.setTransform(452.075,167.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("ABDC9IhDj1IhCD1IhsAAIhml6IBmAAIA6EEIBGkEIBgAAIBDEEIA9kEIBjAAIhmF6g");
	this.shape_13.setTransform(405.325,163.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66CCFF").s().p("AkLP+QjHhFiOiJQiOiJhNjNQhQjMAAkMQAAj4BLjLQBLjMCOiRQCJiLDLhNQDKhMDuAAQCFAABrAPQBqAPBbAXQBeAcBOAhQBLAhA7AcIAAH9Ig+AAQgogig7guQg9gvhMgrQhOguhagfQhagfhnAAQhyAAhoAkQhmAkhXBUQhTBQgzCDQg0CFAAC7QAADGA5CFQA3CCBUBNQBWBOBpAhQBpAhBoAAQBigBBigdQBfgeBSgyQBGgoA7guQA7gvAmgiIA5AAIAAH3IiYBBQhHAghQAWQhnAehZAPQhbAQieAAQjpAAjGhFg");
	this.shape_14.setTransform(909.85,344);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("AuBQaMAAAggzIMuAAQD9AAB3ARQB1ARBzA5QB4A9A8BnQA5BmABCDQAACYhQB1QhRB0iTBBIAAALQDOApB5B/QB4CBAADSQAACYg8B4Qg+B4hrBPQh8BdiVAoQiVAnjlAAgAlnKZIAoAAQDkAABggCQBjgBBTgjQBVgjAgg6QAgg8AAhLQgBhlglg1Qgog3hdgbQg/gShtgCQhwgBh5gBIh3AAgAlnjcIBVAAQCAAABagEQBagEA0gYQBKghAWgzQAWg0AAhDQAAg1gZg0Qgbg0hCgZQg7gXhXgBQhZgDifAAIgzAAg");
	this.shape_15.setTransform(659.25,387.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006600").s().p("AIPQaIiRmpIsIAAIiTGpIohAAMAMHggzIJvAAMAMHAgzgAkIDwIIDAAIkBrug");
	this.shape_16.setTransform(378.325,344);

	this.instance = new lib.a_Apple();
	this.instance.setTransform(815,338,1,1,0,0,0,256,256);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.a_Apple(), 3);

	this.instance_1 = new lib.A();
	this.instance_1.setTransform(382.45,302.85,1,1,0,0,0,121.2,184.2);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.A(), 3);

	this.btnANext = new lib.btnA_next();
	this.btnANext.name = "btnANext";
	this.btnANext.setTransform(1172,360,1,1,0,0,0,79,79);
	new cjs.ButtonHelper(this.btnANext, 0, 1, 1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DD2C2C").s().p("AiECOQg6gxAAhaQAAhZA3g0QA3g0BeAAQBZAAAsAsQAsAtAABUIAAAnIkIAAQACArAeAWQAeAXA5AAQAlAAAigNQAjgOAUgPIANAAIAABdQgoAQgiAHQgjAHgqAAQhsAAg6gxgAgxhlQgWASgCAmICVAAQgBgkgRgTQgRgSgkAAQghAAgVARg");
	this.shape_17.setTransform(466.525,510.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DD2C2C").s().p("Ag5D7IAAn1IBzAAIAAH1g");
	this.shape_18.setTransform(433.3,503.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DD2C2C").s().p("Ai8D8IAAnuIB0AAIAAAmQAbgVAcgNQAbgNAkAAQBEgBAlAyQAmAyAABXQAAAsgOAkQgOAlgWAXQgXAagdANQgdAMgiABQgegBgVgGQgWgHgXgMIAACXgAgmifQgSAGgQAJIAAC1QAMAEANACQANABANAAQAtAAAXgbQAWgaAAg2QAAg1gSgYQgSgXgmAAQgQAAgRAEg");
	this.shape_19.setTransform(400.225,516.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DD2C2C").s().p("Ai8D8IAAnuIB0AAIAAAmQAbgVAcgNQAbgNAkAAQBEgBAlAyQAmAyAABXQAAAsgOAkQgOAlgWAXQgXAagdANQgdAMgiABQgegBgVgGQgWgHgXgMIAACXgAgmifQgSAGgQAJIAAC1QAMAEANACQANABANAAQAtAAAXgbQAWgaAAg2QAAg1gSgYQgSgXgmAAQgQAAgRAEg");
	this.shape_20.setTransform(354.075,516.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DD2C2C").s().p("AB4DwIgghhIixAAIgiBhIh9AAICynfICOAAICwHfgAg8A3IB1AAIg5irg");
	this.shape_21.setTransform(304.05,504.5);

	this.instance_2 = new lib.banana();
	this.instance_2.setTransform(815,354,1,1,0,0,0,256,256);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.banana(), 3);

	this.instance_3 = new lib.B();
	this.instance_3.setTransform(382.4,302.85,1,1,0,0,0,119,184.2);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.B(), 3);

	this.btnBNext = new lib.btnB_next();
	this.btnBNext.name = "btnBNext";
	this.btnBNext.setTransform(1172,360,1,1,0,0,0,79,79);
	new cjs.ButtonHelper(this.btnBNext, 0, 1, 1);

	this.btnBBack = new lib.btnB_back();
	this.btnBBack.name = "btnBBack";
	this.btnBBack.setTransform(96,360,1,1,0,0,0,79,79);
	new cjs.ButtonHelper(this.btnBBack, 0, 1, 1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFB83B").s().p("AiRCfQgjggAAgyQAAgnASgZQASgYAggPQAhgOAvgHQAvgGAzgDIAAgCQAAgdgYgMQgZgLguAAQgdAAghAKQggAKgOAFIgLAAIAAhXQASgFAqgGQApgHAqAAQBiAAAsAfQAsAeAABBIAAD1IhzAAIAAgmIgYARQgNAKgNAGQgQAIgSADQgSAEgWAAQg0AAgjgggAAPARQgbADgOAFQgRAFgJAKQgKALAAARQAAALACAHQACAHAIAHQAHAGALADQAKADAWAAQAQAAASgHQASgHAOgLIAAhMIgzAGg");
	this.shape_22.setTransform(498.375,510.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFB83B").s().p("ABBC6IAAizQAAgWgCgVQgCgWgGgKQgGgMgMgGQgNgFgWAAQgPAAgQAFQgRAFgTALIAAEAIh0AAIAAlpIB0AAIAAAoQAfgYAdgNQAbgNAjAAQA6AAAiAiQAhAiAABFIAADqg");
	this.shape_23.setTransform(454.275,509.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFB83B").s().p("AiRCfQgjggAAgyQAAgnASgZQASgYAggPQAhgOAvgHQAvgGAzgDIAAgCQAAgdgYgMQgZgLguAAQgdAAghAKQggAKgOAFIgLAAIAAhXQASgFAqgGQApgHAqAAQBiAAAsAfQAsAeAABBIAAD1IhzAAIAAgmIgYARQgNAKgNAGQgQAIgSADQgSAEgWAAQg0AAgjgggAAPARQgbADgOAFQgRAFgJAKQgKALAAARQAAALACAHQACAHAIAHQAHAGALADQAKADAWAAQAQAAASgHQASgHAOgLIAAhMIgzAGg");
	this.shape_24.setTransform(407.325,510.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFB83B").s().p("ABBC6IAAizQAAgWgCgVQgCgWgGgKQgGgMgMgGQgNgFgWAAQgPAAgQAFQgRAFgTALIAAEAIh0AAIAAlpIB0AAIAAAoQAfgYAdgNQAbgNAjAAQA6AAAiAiQAhAiAABFIAADqg");
	this.shape_25.setTransform(363.225,509.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFB83B").s().p("AiRCfQgjggAAgyQAAgnASgZQASgYAggPQAhgOAvgHQAvgGAzgDIAAgCQAAgdgYgMQgZgLguAAQgdAAghAKQggAKgOAFIgLAAIAAhXQASgFAqgGQApgHAqAAQBiAAAsAfQAsAeAABBIAAD1IhzAAIAAgmIgYARQgNAKgNAGQgQAIgSADQgSAEgWAAQg0AAgjgggAAPARQgbADgOAFQgRAFgJAKQgKALAAARQAAALACAHQACAHAIAHQAHAGALADQAKADAWAAQAQAAASgHQASgHAOgLIAAhMIgzAGg");
	this.shape_26.setTransform(316.275,510.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFB83B").s().p("AjNDwIAAnfIC7AAQA5AAAbAEQAbAEAaANQAbAOAOAYQANAXAAAeQAAAigSAbQgTAaghAPIAAADQAvAKAcAcQAbAdABAwQgBAjgOAbQgOAcgYARQgdAWgiAJQghAJg1AAgAhRCYIAJAAIBJAAQAXAAATgJQATgIAIgNQAGgOABgRQAAgXgJgMQgJgMgWgHQgOgEgYAAIg1AAIgbAAgAhRgyIATAAIAygBQAUAAALgGQARgHAGgMQAEgMAAgPQABgMgGgMQgGgMgQgGQgNgFgTAAIg5gBIgLAAg");
	this.shape_27.setTransform(271.85,504.5);

	this.instance_4 = new lib.Cher();
	this.instance_4.setTransform(845,354,1,1,0,0,0,256,256);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Cher(), 3);

	this.instance_5 = new lib.C();
	this.instance_5.setTransform(382.4,302.85,1,1,0,0,0,113.5,184.2);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.C(), 3);

	this.btnCNext = new lib.btnC_next();
	this.btnCNext.name = "btnCNext";
	this.btnCNext.setTransform(1172,360,1,1,0,0,0,79,79);
	new cjs.ButtonHelper(this.btnCNext, 0, 1, 1);

	this.btnCBack = new lib.btnC_back();
	this.btnCBack.name = "btnCBack";
	this.btnCBack.setTransform(96,360,1,1,0,0,0,79,79);
	new cjs.ButtonHelper(this.btnCBack, 0, 1, 1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EF314C").s().p("Ah5D3IA6iHIiNlnIB6AAIBVDrIBTjrIB3AAIjJHug");
	this.shape_28.setTransform(485.525,517.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EF314C").s().p("AiCC1IAAlpIB0AAIAAA2QAlghAdgLQAcgLAXABIAPAAIANAAIAABvIgKAAQgIgCgQgBIgbgCQgZAAgTADQgTADgVAIIAADxg");
	this.shape_29.setTransform(449.85,510.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EF314C").s().p("AiCC1IAAlpIB0AAIAAA2QAmghAcgLQAcgLAYABIANAAIAOAAIAABvIgKAAQgHgCgRgBIgcgCQgYAAgTADQgTADgVAIIAADxg");
	this.shape_30.setTransform(417.05,510.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EF314C").s().p("AiECOQg6gxAAhaQAAhZA3g0QA3g0BeAAQBZAAAsAsQAsAtAABUIAAAnIkIAAQACArAeAWQAeAXA5AAQAlAAAigNQAjgOAUgPIANAAIAABdQgoAQgiAHQgjAHgqAAQhsAAg6gxgAgxhlQgWASgCAmICVAAQgBgkgRgTQgRgSgkAAQghAAgVARg");
	this.shape_31.setTransform(376.575,510.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EF314C").s().p("ABBD7IAAi0QAAgWgCgVQgCgWgGgJQgGgMgMgGQgNgFgWAAQgPAAgQAFQgRAFgTALIAAEAIh0AAIAAn1IB0AAIAAC0QAfgYAdgNQAbgNAjAAQA6AAAiAiQAhAiAABDIAADsg");
	this.shape_32.setTransform(331.325,503.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EF314C").s().p("Ag8DpQgtgPghggQgggfgTgvQgSguAAg+QABg4ARguQARgvAhghQAfggAugRQAugRA2AAQAeAAAZADQAYADAVAGQAVAGASAIIAfAOIAAB0IgPAAIgXgTQgNgKgSgKQgRgKgVgIQgUgHgYAAQgaAAgYAIQgWAJgUATQgTASgMAeQgLAeAAArQAAAtAMAeQANAeATARQAUASAXAIQAYAHAYAAQAWAAAXgGQAVgHATgMQAQgJAOgLIAVgSIAOAAIAABzIgjAPQgRAHgRAFQgYAHgVAEQgVADgjAAQg1AAgtgQg");
	this.shape_33.setTransform(283.95,504.525);

	this.instance_6 = new lib.TQS();
	this.instance_6.setTransform(640,360,1,1,0,0,0,256,256);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2);

	this.btnHome = new lib.btn_home();
	this.btnHome.name = "btnHome";
	this.btnHome.setTransform(1206,58,1,1,0,0,0,37,37);
	new cjs.ButtonHelper(this.btnHome, 0, 1, 1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF7B79").s().p("Ag5A+QgZgWAAgnQAAgmAYgWQAYgXAoAAQAmAAAUATQATAUAAAkIAAARIhyAAQABASANAKQANAKAYAAQAQAAAPgGQAPgGAIgGIAGAAIAAAoQgRAHgPADQgPADgSAAQgvAAgZgVgAgVgrQgJAIgBAQIBAAAQAAgQgIgIQgHgIgQAAQgNAAgKAIg");
	this.shape_34.setTransform(1151.575,72.625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF7B79").s().p("ABOBQIAAhOIgBgSQAAgJgDgFQgCgFgFgCQgFgCgKAAQgGAAgGACIgPAHIAABuIgxAAIAAhOIgBgSQAAgJgDgFQgCgFgFgCQgGgCgJAAQgHAAgHADIgNAGIAABuIgyAAIAAicIAyAAIAAASQANgKAMgGQAMgGAOABQAQAAALAGQAMAHAGAOQAPgNAPgIQAOgGANAAQAaAAANAOQANAQAAAcIAABlg");
	this.shape_35.setTransform(1126.975,72.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF7B79").s().p("Ag+A9QgXgWAAgnQAAgmAXgWQAWgWAoAAQApAAAWAWQAXAWAAAmQAAAngXAWQgWAWgpAAQgoAAgWgWgAgMgtQgGABgFAGQgEAGgDAJQgDAKAAANQAAANADAKQACAJAFAGQAEAFAGADQAGACAHAAQAHAAAGgCQAHgDAEgFQAFgGACgIQADgJAAgPQAAgNgDgJQgCgJgFgGQgEgGgHgCQgGgCgHAAQgGAAgGACg");
	this.shape_36.setTransform(1102.025,72.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF7B79").s().p("AAoBoIAAhbIhPAAIAABbIg1AAIAAjPIA1AAIAABMIBPAAIAAhMIA1AAIAADPg");
	this.shape_37.setTransform(1080.225,70.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btnPlay}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.btnANext},{t:this.instance_1},{t:this.instance}]},29).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.btnBBack},{t:this.btnBNext},{t:this.instance_3},{t:this.instance_2}]},30).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.btnCBack},{t:this.btnCNext},{t:this.instance_5},{t:this.instance_4}]},30).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.btnHome},{t:this.instance_6}]},30).wait(31));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(657,381,594,257.9);
// library properties:
lib.properties = {
	id: '412EDFE22745CC419DE4CD49CDB55253',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/apple.png", id:"apple"},
		{src:"images/banana1.png", id:"banana1"},
		{src:"images/cherries.png", id:"cherries"},
		{src:"images/home.png", id:"home"},
		{src:"images/next.png", id:"next"},
		{src:"images/thankyou.png", id:"thankyou"},
		{src:"sounds/Apple_audiomassoutput2wav.mp3", id:"Apple_audiomassoutput2wav"},
		{src:"sounds/audioAwav.mp3", id:"audioAwav"},
		{src:"sounds/bwav.mp3", id:"bwav"},
		{src:"sounds/Bananawav.mp3", id:"Bananawav"},
		{src:"sounds/cwav.mp3", id:"cwav"},
		{src:"sounds/Cherrywav.mp3", id:"Cherrywav"},
		{src:"sounds/TQ_audiomassoutputwav.mp3", id:"TQ_audiomassoutputwav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

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
an.compositions['412EDFE22745CC419DE4CD49CDB55253'] = {
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;