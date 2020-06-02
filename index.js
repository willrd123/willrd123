function check() {
    var match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/),
        version;

    if (match !== undefined && match !== null) {
        version = [
            parseInt(match[1], 10),
            parseInt(match[2], 10),
            parseInt(match[3] || 0, 10)
        ];
        ver=parseFloat(version.join('.'));
	if (ver < 13) {
            document.getElementById('request').style.visibility = 'hidden';
        } else {
            document.getElementById('request').style.visibility = 'visible';
        }

    }
    else {
	document.getElementById('request').style.visibility = 'hidden';
	}
}

 if (location.protocol != 'https:') {
   location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
  }
 
function requestT () {
      if (typeof(DeviceMotionEvent) !== 'undefined' && typeof(DeviceMotionEvent.requestPermission) === 'function') {
          
          DeviceMotionEvent.requestPermission()
          .then(response => {
	alert('Orientation tracking '+ response);
            if (response == 'granted') {
              window.addEventListener('devicemotion', (e) => {
               document.getElementById('request').style.visibility='hidden';
              })
            }
          })
      .catch(console.error)
      }else {
          alert('DeviceMotionEvent is not defined');
      }

  }
  document.getElementById('request').onclick = requestT;



function deviceOrientationHandler(e){

  var a = document.getElementById('alpha');
  var b = document.getElementById('beta');
  var g = document.getElementById('gamma');

  a.innerText = e.alpha;
  b.innerText = e.beta;
  g.innerText = e.gamma;
  return e.alpha;
}

if (window.DeviceOrientationEvent) {

  window.addEventListener('deviceorientation', deviceOrientationHandler, false);
 
} else {
  console.error('Device orientation not supported in this browser.');
}

window.addEventListener('deviceorientation', deviceOrientationHandler, false);
console.log(deviceOrientationHandler());