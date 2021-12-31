import * as Tone from './tone/build/tone.js'

let song = []

const synth = new window.Tone.Synth().toDestination();
//attach a click listener to a play button

// await window.Tone.start();
// synth.triggerAttackRelease("C4");

/*
document.querySelector("button")?.addEventListener('click', async () => {
	let note = "id"
	note = event.srcElement.id;
	synth.triggerAttackRelease(note, "8n");
	song.push(note);
	console.log(song);
	document.getElementById('screen').innerHTML = song;
})
*/

document.querySelector('#C4')?.addEventListener('click', async () => {
	await window.Tone.start()
  synth.triggerAttackRelease("C4", "8n");
  song.push("C4");
  console.log(song);
	document.getElementById('screen').innerHTML = song
})

document.querySelector('#A5')?.addEventListener('click', async () => {
	await window.Tone.start()
  synth.triggerAttackRelease("A5", "8n");
  song.push("A5");
  console.log(song);
	document.getElementById('screen').innerHTML = song
})

document.querySelector('#C5')?.addEventListener('click', async () => {
	await window.Tone.start()
  synth.triggerAttackRelease("C5", "8n");
  song.push("C5");
  console.log(song);
	document.getElementById('screen').innerHTML = song
})

document.querySelector('#play')?.addEventListener('click', () => {
	for (var i = 0; i < song.length; i++) {
	    console.log(song[i]);
			synth.triggerAttackRelease(song[i], "8n");
	    //Do something
	}
})

document.querySelector('#clear')?.addEventListener('click', () => {
	song = []
	document.getElementById('screen').innerHTML = song
	console.log(song)
})



/* Things still to do:
1) Capture button (key) `id` on click as a variable and insert it into synth trigger
2) Make a PLAY button that works (need to add a delay function to this)
*/
