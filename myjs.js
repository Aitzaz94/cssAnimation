$(document).ready(() => {
	$('div.jGravity').on('click', () => { // This can be changed to anything you like in order to trigger jGravity effect
		$('body').jGravity({ // jGravity works best when targeting the body
			target: 'everything', // Enter your target critera e.g. 'div, p, span', 'h2' or 'div#specificDiv', or even 'everything' to target everything in the body
			ignoreClass: 'ignoreMe', // Specify if you would like to use an ignore class, and then specify the class
			weight: 10, // Enter any number 1-100 ideally (25 is default), you can also use 'heavy' or 'light'
			depth: 3, // Enter a value between 1-10 ideally (1 is default), this is used to prevent targeting structural divs or other items which may break layout in jGravity
			drag: true // Decide if users can drag elements which have been effected by jGravity
		});

		// Misc code for demo purposes
		$(this).removeClass('jGravity');
		$(this).delay(1000).queue(() => {
			$(this).html("<h2><a href='http://tinybigideas.com/plugins/jquery-gravity/'>Get jGravity</a></h2>");
		});
		// ----- \\

	});
});

var speed = '1x';
		var direction = 'none';
		var weather = 'none';
		var effect = 'none';
		var flipcount = 1;

		function effectact(val){
			effect = val;
			console.log(val);

			if ((effect === 'flip') && (flipcount == 1)) {
				console.log('flipcount = '+flipcount);
				document.getElementById("sunrisediv").style.transform = 'rotateX(180deg)';
				document.getElementById("sunrisediv").style.transform = 'rotate(180deg)';
				document.getElementById("sunsetdiv").style.transform = 'rotateX(180deg)';
				document.getElementById("sunsetdiv").style.transform = 'rotate(180deg)';
				document.getElementById("weatherdiv").style.transform = 'rotateX(180deg)';
				document.getElementById("weatherdiv").style.transform = 'rotate(180deg)';
				flipcount = flipcount + 1;
			}
			else if ((effect === 'flip') && (flipcount == 2)) {
				console.log('flipcount = '+flipcount);
				document.getElementById("sunrisediv").style.transform = 'rotateX(360deg)';
				document.getElementById("sunrisediv").style.transform = 'rotate(360deg)';
				document.getElementById("sunsetdiv").style.transform = 'rotateX(360deg)';
				document.getElementById("sunsetdiv").style.transform = 'rotate(360deg)';
				document.getElementById("weatherdiv").style.transform = 'rotateX(360deg)';
				document.getElementById("weatherdiv").style.transform = 'rotate(360deg)';
				flipcount = 1;
			}
		}

		function setspeed(value){
			speed = value;
		}
		function weath(val){
			weather = val;
			// Fog
			if ((speed === '1x') && (weather === 'fog') && (direction === 'down')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/fog/1x/down/index.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '1x') && (direction === 'up') && (weather === 'fog')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/fog/1x/up/index.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '1x') && (direction === 'right') && (weather === 'fog')) {
				// console.log('1xrightsr');
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/fog/1x/right/index.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '1x') && (direction === 'left') && (weather === 'fog')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/fog/1x/left/index.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'down') && (weather === 'fog')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/fog/2x/down/index-2x.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'up') && (weather === 'fog')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/fog/2x/up/index-2x.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'right') && (weather === 'fog')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/fog/2x/left/index-2x.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'left') && (weather === 'fog')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/fog/2x/right/index-2x.html" style="width: 100%; height: 582px" ></object>';
			}
			// Rain
			else if ((speed === '1x') && (weather === 'rain') && (direction === 'down')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/rain/1x/down/index.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '1x') && (direction === 'up') && (weather === 'rain')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/rain/1x/up/index.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '1x') && (direction === 'right') && (weather === 'rain')) {
				// console.log('1xrightsr');
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/rain/1x/left/index.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '1x') && (direction === 'left') && (weather === 'rain')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/rain/1x/right/index.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'down') && (weather === 'rain')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/rain/2x/down/index.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'up') && (weather === 'rain')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/rain/2x/up/index.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'right') && (weather === 'rain')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/rain/2x/left/index.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'left') && (weather === 'rain')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/rain/2x/right/index.html" style="width: 100%; height: 582px" ></object>';
			}
			// snow
			else if ((speed === '1x') && (weather === 'snow') && (direction === 'down')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/snow/1x/down/index.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '1x') && (direction === 'up') && (weather === 'snow')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/snow/1x/up/index.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '1x') && (direction === 'right') && (weather === 'snow')) {
				// console.log('1xrightsr');
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/snow/1x/left/index.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '1x') && (direction === 'left') && (weather === 'snow')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/snow/1x/right/index.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'down') && (weather === 'snow')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/snow/2x/down/index-2x.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'up') && (weather === 'snow')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/snow/2x/up/index-2x.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'right') && (weather === 'snow')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/snow/2x/right/index-2x.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'left') && (weather === 'snow')) {
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("weatherdiv").innerHTML = '<object type="text/html" data="Weather/snow/2x/left/index-2x.html" style="width: 100%; height: 582px" ></object>';
			}
		}
		function direct(val){
			direction = val;
		}
		function sunrisefunc(value){
			console.log(speed);
			if ((speed === '1x') && (direction === 'down')) {
				console.log('1xdownsr');
				document.getElementById("sunsetdiv").style.display = "none";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("sunrisediv").innerHTML = '<object type="text/html" data="sun/sunrise/1x/down/sunrise.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '1x') && (direction === 'up')) {
				console.log('1xupsr');
				document.getElementById("sunsetdiv").style.display = "none";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("sunrisediv").innerHTML = '<object type="text/html" data="sun/sunrise/1x/up/sunrise.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '1x') && (direction === 'right')) {
				console.log('1xrightsr');
				document.getElementById("sunsetdiv").style.display = "none";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("sunrisediv").innerHTML = '<object type="text/html" data="sun/sunrise/1x/left/sunrise.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '1x') && (direction === 'left')) {
				console.log('1xleftsr');
				document.getElementById("sunsetdiv").style.display = "none";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("sunrisediv").innerHTML = '<object type="text/html" data="sun/sunrise/1x/right/sunrise.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'down')) {
				console.log('2xdownsr');
				document.getElementById("sunsetdiv").style.display = "none";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("sunrisediv").innerHTML = '<object type="text/html" data="sun/sunrise/2x/down/sunrise-2x.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'up')) {
				console.log('2xupsr');
				document.getElementById("sunsetdiv").style.display = "none";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("sunrisediv").innerHTML = '<object type="text/html" data="sun/sunrise/2x/up/sunrise-2x.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'right')) {
				console.log('2xrightsr');
				document.getElementById("sunsetdiv").style.display = "none";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("sunrisediv").innerHTML = '<object type="text/html" data="sun/sunrise/2x/left/sunrise-2x.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'left')) {
				console.log('2xleftsr');
				document.getElementById("sunsetdiv").style.display = "none";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("sunrisediv").style.display = "block";
				document.getElementById("sunrisediv").innerHTML = '<object type="text/html" data="sun/sunrise/2x/right/sunrise-2x.html" style="width: 100%; height: 582px" ></object>';
			}
			
		}
		function sunsetfunc(){
			console.log(direction);
			if ((speed === '1x') && (direction === 'down')) {
				console.log('1xdownss');
				document.getElementById("sunrisediv").style.display = "none";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunsetdiv").innerHTML = '<object type="text/html" data="sun/sunset/1x/down/sunset.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '1x') && (direction === 'up')) {
				console.log('1xupss');
				document.getElementById("sunrisediv").style.display = "none";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunsetdiv").innerHTML = '<object type="text/html" data="sun/sunset/1x/up/sunset.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '1x') && (direction === 'right')) {
				console.log('1xrightss');
				document.getElementById("sunrisediv").style.display = "none";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunsetdiv").innerHTML = '<object type="text/html" data="sun/sunset/1x/right/sunset.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '1x') && (direction === 'left')) {
				console.log('1xleftss');
				document.getElementById("sunrisediv").style.display = "none";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunsetdiv").innerHTML = '<object type="text/html" data="sun/sunset/1x/left/sunset.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'down')) {
				console.log('2xdownss');
				document.getElementById("sunrisediv").style.display = "none";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunsetdiv").innerHTML = '<object type="text/html" data="sun/sunset/2x/down/sunset-2x.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'up')) {
				console.log('2xupss');
				document.getElementById("sunrisediv").style.display = "none";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunsetdiv").innerHTML = '<object type="text/html" data="sun/sunset/2x/up/sunset-2x.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'right')) {
				console.log('2xrightss');
				document.getElementById("sunrisediv").style.display = "none";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunsetdiv").innerHTML = '<object type="text/html" data="sun/sunset/2x/right/sunset-2x.html" style="width: 100%; height: 582px" ></object>';
			}
			else if ((speed === '2x') && (direction === 'left')) {
				console.log('2xleftss');
				document.getElementById("sunrisediv").style.display = "none";
				document.getElementById("weatherdiv").style.display = "block";
				document.getElementById("sunsetdiv").style.display = "block";
				document.getElementById("sunsetdiv").innerHTML = '<object type="text/html" data="sun/sunset/2x/left/sunset-2x.html" style="width: 100%; height: 582px" ></object>';
			}
			
		}

		setTimeout(function() {
		  var i = 1;
		  var s = 0;
		  var m = 0;
		  var h = 0;
		  var interval = setInterval(function() {
		      s=$('.e-c-pointer').css('transform','rotate('+360*i/60+'deg)');
		      m=$('.e-c-m-pointer').css('transform','rotate('+360*i/60/60+'deg)');
		      h=$('.e-c-h-pointer').css('transform','rotate('+360*i/60/60/60+'deg)');
		      i++; 
		  }, 1000);

		}, 0);
	</script>

	<script type="text/javascript">
		$(() => {  
		  const LAYER_COUNT = 32;
		  const TRANSITION_DURATION = 1.5;
		  const TRANSITION_DELAY = 1.35;
		  
		  let currentLayerCount = LAYER_COUNT;
		  
		  const $target = $('.main-background-part');
		  const target = $target[0];
		  
		  const $effect = $('#effect');
		  
		  const hideTarget = () => {
		  	$target.css({
		    	'transition': `opacity ${TRANSITION_DURATION} ease`,
		      opacity: 0
		    });
		    delay(1e3 * TRANSITION_DURATION).then(() => {
		    	$target.css('visibility', 'hidden');
		    });
		  };
		  
		  const showTarget = () => {
		  	$target.css({
		    	opacity: 1,
		      visibility: 'visible'
		    });
		  };
		  
		  // bind events
		  $('.js-play').on('click', function () {
		  	play(currentLayerCount);
		  });
		  $('.js-reset').on('click', function () {
		  	showTarget();
		  });
		  $('.js-alt').on('click', function($evt) {
		  	$target.toggleClass('alt', $evt.target.checked);
		  });
		  $('.js-border').on('change', function($evt) {
		  	$effect.toggleClass('border', $evt.target.checked);
		  });
		  $('.js-layer-count').on('change', function($evt) {
		  	currentLayerCount = Number($evt.target.value);
		  });
		  $('.js-layer-count').val(currentLayerCount);
		  
		  function play(layerCount) {
		  	showTarget();
		    
		    const bRect = target.getBoundingClientRect();
		    $effect.css({
		      left: bRect.left,
		      top: bRect.top,
		      width: bRect.width,
		      height: bRect.height
		    });
		    
		    html2canvas(target, {
		      backgroundColor: null,
		    })
		    .then(canvas => {
		      const context = canvas.getContext('2d');
		      const { width, height } = canvas;

		      // get element imageData
		      const imgData = context.getImageData(0, 0, width, height);

		      // init empty imageData
		      const effectImgDatas = [];
		      for (let i = 0; i < layerCount; i++) {
		        effectImgDatas.push(context.createImageData(width, height));
		      }
		      sampler(effectImgDatas, imgData, width, height, layerCount);

		      // create cloned canvases
		      for (let i = 0; i < layerCount; i++) {
		        const canvasClone = canvas.cloneNode();
		        canvasClone.getContext('2d').putImageData(effectImgDatas[i], 0, 0);

		        const $canvas = $(canvasClone);
		        const transitionDelay = TRANSITION_DELAY * (i / layerCount);
		        $canvas.css('transition-delay', `${transitionDelay}s`);
		        $effect.append($canvas);

		        delay(0)
		        .then(() => {
		          const rotate1 = 15 * (Math.random() - .5);
		          const rotate2 = 15 * (Math.random() - .5);
		          const fac = 2 * Math.PI * (Math.random() - .5);
		          const translateX = 60 * Math.cos(fac);
		          const translateY = 30 * Math.sin(fac);

		          $canvas.css({
		            transform: `rotate(${rotate1}deg) translate(${translateX}px, ${translateY}px) rotate(${rotate2}deg)`,
		            opacity: 0
		          });

		          const removeDelay = 1e3 * (TRANSITION_DURATION + 1 + Math.random());
		          delay(removeDelay)
		            .then(() => {
		            $canvas.remove();
		          });
		        });

		        hideTarget();
		      }
		    });
		  }
		  
		  function sampler(imgDatas, sourceImgData, width, height, layerCount) {
		  	for (let x = 0; x < width; x++) {
		    	for (let y = 0; y < height; y++) {
		      	for (let l = 0; l < 2; l++) {
		        	// random piece index which tend to grow with x
		        	const pieceIndex = Math.floor(layerCount * (Math.random() + 2 * x / width) / 3);
		          const pixelPos = 4 * (y * width + x);
		          for (let rgbaIndex = 0; rgbaIndex < 4; rgbaIndex++) {
		          	const dataPos = pixelPos + rgbaIndex;
		          	imgDatas[pieceIndex].data[dataPos] = sourceImgData.data[dataPos];
		          }
		        }
		      }
		    }
		  }
		  
		  function delay(ms) {
		  	return new Promise(resolve => {
		    	setTimeout(() => {
		      	resolve()
		      }, ms);
		    })
		  }
		});