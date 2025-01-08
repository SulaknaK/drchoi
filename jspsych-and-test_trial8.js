/**
 * jspsych-and-trainingSet2
 * Koeun Choi
 */

jsPsych.plugins['and-test_trial8'] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('and-test_trial8', ['images'], 'image');
  jsPsych.pluginAPI.registerPreload('and-test_trial8', 'audio', 'audio');
  jsPsych.pluginAPI.registerPreload('and-test_trial8', 'audioTrill', 'audio');


  plugin.trial = function(display_element, trial) {

    // default values
    trial.canvas_size = trial.canvas_size || [1024,650];
    trial.image_size = trial.image_size || [120,120];
	  trial.condition = trial.condition || "active";
	  trial.location = trial.location || 0;
	  trial.images = trial.images || ["stims/obj9.png", "stims/obj8.png", "stims/obj10.png"];
    trial.target = trial.target || ["triangle", "circle", "square"];
	  trial.standardIm = trial.standardIm || ["stims/Bear_Smile.png"];
	  trial.standardImTalk = trial.standardImTalk || ["stims/Bear_Talk.png"];
    trial.standardImB = trial.standardImB || ["stims/button-green.png"];
	  trial.audio = trial.audio || ["stims/bleep.wav","stims/bleep.wav","stims/bleep.wav","stims/bleep.wav"];
	  trial.audioDur = trial.audioDur || 1300;
	  trial.audioTrill = trial.audioTrill || "stims/trill.wav";
    trial.audioBleep = trial.audioBleep || "stims/bleep.wav";
	  trial.onsetWait = trial.onsetWait || 0;
	  trial.targetIndex = trial.targetIndex || 0;
    trial.endTrialPause = trial.endTrialPause || 1800;
    trial.endTrialDur = trial.endTrialDur || 5000;
	  trial.input = trial.input || "click";
	  trial.timing_post_trial = typeof trial.timing_post_trial == 'undefined' ? 0 : trial.timing_post_trial;



      // if any trial variables are functions
      // this evaluates the function and replaces
      // it with the output of the function
   trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

   display_element.append($("<svg id='jspsych-and-test_trial8-canvas' width=" + trial.canvas_size[0] + " height=" + trial.canvas_size[1] + "></svg>"));

    var s = Snap("#jspsych-and-test_trial8-canvas");

	  var rectFill = "#FFFFFF";

    var rect = s.rect(270, 300, 280, 270, 10,10);
             rect.attr({
                 fill: "#FFFFFF",
                 stroke: "#000",
                 strokeWidth: 5
             });
    var bigCircle1 = s.circle(390, 150, 100);
             bigCircle1.attr({
                 fill: "#FFFFFF",
                 stroke: "#000",
                 strokeWidth: 5
             });
       var bigCircle2 = s.circle(690, 150, 100);
             bigCircle2.attr({
                 fill: "#FFFFFF",
                 stroke: "#000",
                 strokeWidth: 5
             });
       var bigCircle3 = s.circle(690, 450, 100);
             bigCircle3.attr({
                 fill: "#FFFFFF",
                 stroke: "#000",
                 strokeWidth: 5
             });

	  var imageLocations = [
		  [330, 90],
		  [630, 90],
		  [630, 390]
	  ];

	  var centerLocation=[325,350];


	  var audio1 = new Audio(trial.audio[0]);
	  var audio2 = new Audio(trial.audio[1]);
	  var audio3 = new Audio(trial.audio[2]);
	  var audio4 = new Audio(trial.audio[3]);
	  var audioTrill = new Audio(trial.audioTrill);
    var audioBleep = new Audio(trial.audioBleep);


	  var start_time = (new Date()).getTime();

	  var standard = s.image(trial.standardIm,5,300,169,238);
    var standardB = s.image(trial.standardImB,155,370,100,100);


	  /*var image1 = s.image(trial.images[0], imageLocations[0][0], imageLocations[0][1], 0,0);
	  var image2 = s.image(trial.images[1], imageLocations[1][0], imageLocations[1][1], 0,0);
	  var image3 = s.image(trial.images[2], imageLocations[2][0], imageLocations[2][1], 0,0);
	  var image4 = s.image(trial.images[3], imageLocations[3][0], imageLocations[3][1], 0,0);*/
	  var image1 = s.image(trial.images[0], imageLocations[0][0], imageLocations[0][1], trial.image_size[0],trial.image_size[1]);
	  var image2 = s.image(trial.images[1], imageLocations[1][0], imageLocations[1][1], trial.image_size[0],trial.image_size[1]);
	  var image3 = s.image(trial.images[2], imageLocations[2][0], imageLocations[2][1], trial.image_size[0],trial.image_size[1]);

	  image1.attr({
		  opacity: "1"
	  });
	  image2.attr({
		  opacity: "1"
	  });
	  image3.attr({
		  opacity: "1"
	  });


  var rt = "NA";
  var choice = "NA";
  var trial_time = (new Date()).getTime();
  var start_time = 0

  if (trial.input == "touch") {
			  image1.touchstart(function() {
          changeTH1 = false;
          var t1 = new Snap.Matrix();
      		var imCenterX = 330 +trial.image_size[0]/2;
      		var imCenterY = 90 +trial.image_size[1]/2;
      		audioBleep.play();
      		t1.rotate(10,imCenterX,imCenterY);
      		this.animate({transform: image1.transform(t1)},50,mina.easeinout, function() {
      			t1.rotate(-20,imCenterX,imCenterY);
      			this.animate({transform: image1.transform(t1)},100,mina.easeinout, function() {
      				t1.rotate(20,imCenterX,imCenterY);
      				this.animate({transform: image1.transform(t1)},100,mina.easeinout, function() {
      					t1.rotate(-10,imCenterX,imCenterY);
      					this.animate({transform: image1.transform(t1)},50,mina.easeinout, function() {
      				       	this.animate({
      											x: 285,
      											y: 315
      										},1000,mina.easeinout,function() {
      											standard.attr({
      												href: trial.standardImTalk
      											});
												choice = "obj9";
      											audio.play();
												save_response(choice,rt);
      										});
      					});
      				});
      			});
      		});
			  });

			  image2.touchstart(function() {
          changeTH2 = true;
          var t2 = new Snap.Matrix();
      		var imCenterX = 630 + trial.image_size[0]/2;
      		var imCenterY = 90 +trial.image_size[1]/2;
          audioBleep.play();
      		t2.rotate(10,imCenterX,imCenterY);
      		this.animate({transform: image2.transform(t2)},50,mina.easeinout, function() {
      			t2.rotate(-20,imCenterX,imCenterY);
      			this.animate({transform: image2.transform(t2)},100,mina.easeinout, function() {
      				t2.rotate(20,imCenterX,imCenterY);
      				this.animate({transform: image2.transform(t2)},100,mina.easeinout, function() {
      					t2.rotate(-10,imCenterX,imCenterY);
      					this.animate({transform: image2.transform(t2)},50,mina.easeinout,function() {
      				       	this.animate({
      											x: 415,
      											y: 315
      										},1000,mina.easeinout,function() {
      											standard.attr({
      												href: trial.standardImTalk
      											});
												choice = "obj8";
      											audio.play();
												save_response(choice,rt);
      										});
      					});
      				});
      			});
      		});
			  });
			  image3.touchstart(function() {
          changeTH3 = true;
          var t3 = new Snap.Matrix();
      		var imCenterX = 630 + trial.image_size[0]/2;
      		var imCenterY = 390 + trial.image_size[1]/2;
          audioBleep.play();
      		t3.rotate(10,imCenterX,imCenterY);
      		this.animate({transform: image3.transform(t3)},50,mina.easeinout, function() {
      			t3.rotate(-20,imCenterX,imCenterY);
      			this.animate({transform: image3.transform(t3)},100,mina.easeinout, function() {
      				t3.rotate(20,imCenterX,imCenterY);
      				this.animate({transform: image3.transform(t3)},100,mina.easeinout, function() {
      					t3.rotate(-10,imCenterX,imCenterY);
      					this.animate({transform: image3.transform(t3)},50,mina.easeinout,function() {
      				       	this.animate({
      											x: 415,
      											y: 445
      										},1000,mina.easeinout,function() {
      											standard.attr({
      												href: trial.standardImTalk
      											});
												choice = "obj10";
      											audio.play();
												save_response(choice,rt);
      										});
      					});
      				});
      			});
      		});
			  });
        standardB.touchstart(function() {
          standardB.untouchstart();
                  this.animate({
                    x: 155,
                    y: 450,
                    height: '30px'
                  }, 200);
                  setTimeout(function(){
                   endTrial();
                 },trial.endTrialPause);
                    if(changeTH2 && changeTH3){
                      audioTrill.play();
                       rect.animate({
                       fill: "lawngreen"
                      }, 200);
                      }
                });

  } else {
		  image1.click(function() {
      changeTH1 = false;
      var t1 = new Snap.Matrix();
      var imCenterX = 330 +trial.image_size[0]/2;
      var imCenterY = 90 +trial.image_size[1]/2;
      audioBleep.play();
      t1.rotate(10,imCenterX,imCenterY);
      this.animate({transform: image1.transform(t1)},50,mina.easeinout, function() {
           t1.rotate(-20,imCenterX,imCenterY);
           this.animate({transform: image1.transform(t1)},100,mina.easeinout, function() {
             t1.rotate(20,imCenterX,imCenterY);
             this.animate({transform: image1.transform(t1)},100,mina.easeinout, function() {
               t1.rotate(-10,imCenterX,imCenterY);
               this.animate({transform: image1.transform(t1)},50,mina.easeinout,function() {
                     this.animate({
                           x: 285,
                           y: 315
                         },1000,mina.easeinout,function() {
                           standard.attr({
                             href: trial.standardImTalk
                           });
						   choice = "obj9";
                           audio.play();
						   save_response(choice,rt);
                         });
               });
             });
           });
         });
       });
			  image2.click(function() {
        changeTH2 = true;
          var t2 = new Snap.Matrix();
      		var imCenterX = 630 + trial.image_size[0]/2;
      		var imCenterY = 90 +trial.image_size[1]/2;
          audioBleep.play();
      		t2.rotate(10,imCenterX,imCenterY);
      		this.animate({transform: image2.transform(t2)},50,mina.easeinout, function() {
      			t2.rotate(-20,imCenterX,imCenterY);
      			this.animate({transform: image2.transform(t2)},100,mina.easeinout, function() {
      				t2.rotate(20,imCenterX,imCenterY);
      				this.animate({transform: image2.transform(t2)},100,mina.easeinout, function() {
      					t2.rotate(-10,imCenterX,imCenterY);
      					this.animate({transform: image2.transform(t2)},50,mina.easeinout,function() {
      				       	this.animate({
      											x: 415,
      											y: 315
      										},1000,mina.easeinout,function() {
      											standard.attr({
      												href: trial.standardImTalk
      											});
												choice = "obj8";
      											audio.play();
												save_response(choice,rt);
      										});
      					});
      				});
      			});
      		});
			  });
			  image3.click(function() {
        changeTH3 = true;
          var t3 = new Snap.Matrix();
      		var imCenterX = 630 + trial.image_size[0]/2;
      		var imCenterY = 390 + trial.image_size[1]/2;
          audioBleep.play();
      		t3.rotate(10,imCenterX,imCenterY);
      		image3.animate({transform: image3.transform(t3)},50,mina.easeinout, function() {
      			t3.rotate(-20,imCenterX,imCenterY);
      			image3.animate({transform: image3.transform(t3)},100,mina.easeinout, function() {
      				t3.rotate(20,imCenterX,imCenterY);
      				image3.animate({transform: image3.transform(t3)},100,mina.easeinout, function() {
      					t3.rotate(-10,imCenterX,imCenterY);
      					image3.animate({transform: image3.transform(t3)},50,mina.easeinout,function() {
      				       	image3.animate({
      											x: 415,
      											y: 445
      										},1000,mina.easeinout,function() {
      											standard.attr({
      												href: trial.standardImTalk
      											});
      											choice = "obj10";
												audio.play();
												save_response(choice,rt);
      										});
      					});
      				});
      			});
      		});
			  });

        standardB.click(function() {
          standardB.unclick();
                  this.animate({
                    x: 155,
                    y: 450,
                    height: '30px'
                  }, 200);
                  setTimeout(function(){
                   endTrial();
                 },trial.endTrialPause);
                    if(changeTH2 && changeTH3){
                      audioTrill.play();
                       rect.animate({
                       fill: "lawngreen"
                      }, 200);
                      }
                });
        };


    function endTrial() {
    var trial_data = {
      "image1": trial.images[0],
      "image2": trial.images[1],
      "image3": trial.images[2],
      "rt": rt,
      "choice": choice,
      "choiceImage": trial.images[choice],
      "choiceAudio": trial.audio[choice]
    };
      // clear the display
      display_element.html('');

    jsPsych.finishTrial(trial_data);
    };
  };

		return plugin;
})();
