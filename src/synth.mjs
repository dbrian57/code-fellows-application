import * as Tone from './js/tone.js'

let song = []

const crusher = new window.Tone.BitCrusher(4).toDestination();
let synth = new window.Tone.Synth().connect(crusher);

const timer = ms => new Promise(res => setTimeout(res, ms))

// await window.Tone.start();
// synth.triggerAttackRelease("C4");

document.querySelector('#Poly')?.addEventListener('click', async () => {
	synth = new window.Tone.PolySynth().connect(crusher);
	document.getElementById("#Poly").style.display = ".selected";
//  element.classList.add("selected");
//	(this).addClass("selected");
})

document.querySelector('#Duo')?.addEventListener('click', async () => {
	synth = new window.Tone.DuoSynth().connect(crusher);
})

document.querySelector('#Metal')?.addEventListener('click', async () => {
	synth = new window.Tone.MetalSynth().connect(crusher);
})

document.querySelector('#FM')?.addEventListener('click', async () => {
	synth = new window.Tone.FMSynth().connect(crusher);
})


/*
Makes the keys clickable and plays the correct tone by catching the button ID
(the key's note) and inserting it into synth function. Also inserts key ID into
song array for future playback
*/
document.querySelectorAll('.natural').forEach(btn=>btn.addEventListener('click', async () => {
	let note = "id"
	note = event.srcElement.id;
	synth.triggerAttackRelease(note, "8n");
	song.push(note);
	console.log(song);
//	document.getElementById('screen').innerHTML = song;
	document.getElementById('synthScreen').innerHTML = song;
}))

document.querySelectorAll('.accidental').forEach(btn=>btn.addEventListener('click', async () => {
	let note = "id"
	note = event.srcElement.id;
	synth.triggerAttackRelease(note, "8n");
	song.push(note);
	console.log(song);
	document.getElementById('synthScreen').innerHTML = song;
}))

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

/*
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

*/

// Plays back the recorded notes
document.querySelector('#playBack')?.addEventListener('click', async () => {
	for (var i = 0; i < song.length; i++) {
	    console.log(song[i]);
			synth.triggerAttackRelease(song[i], "8n");
	    await timer(500)
	}
})

// Clears the song from the screen
document.querySelector('#clear')?.addEventListener('click', () => {
	song = []
	document.getElementById('synthScreen').innerHTML = song
	console.log(song)
})

/* TO DO:
1) Make keys fit
2) Add button copy for: play, clear, synths
3) Make buttons/keys darkern or whatever upon click
3) Make screen work and add overflow to interval
4) Style header, write How-to/about @ bottom
*/
