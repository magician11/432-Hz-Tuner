# Notes on technical implementations

I'll use the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API), and specifically the [OscillatorNode interface](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode) to generate specific tones.

## Sample code for audio generation
I'll probably start by trying something like this..

```
// one context per document
var context = new (window.AudioContext || window.webkitAudioContext)();
var osc = context.createOscillator(); // instantiate an oscillator
osc.type = 'sine'; // this is the default - also square, sawtooth, triangle
osc.frequency.value = 440; // Hz
osc.connect(context.destination); // connect it to the destination
osc.start(); // start the oscillator
osc.stop(context.currentTime + 2); // stop 2 seconds after the current time
```

[source](https://stackoverflow.com/a/16573282/2813041)
