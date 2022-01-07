import * as Tone from '/src/scripts/tone.js';

let song = [];

const crusher = new window.Tone.BitCrusher(4).toDestination();
let synth = new window.Tone.Synth().connect(crusher);

const timer = ms => new Promise(res => setTimeout(res, ms));


document.querySelector('#Poly')?.addEventListener('click', async () => {
	synth = new window.Tone.PolySynth().connect(crusher);
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
	document.getElementById('synthScreen').innerHTML = song;
}))

document.querySelectorAll('.accidental').forEach(btn=>btn.addEventListener('click', async () => {
	let note = "id"
	note = event.srcElement.id;
	synth.triggerAttackRelease(note, "8n");
	song.push(note);
	document.getElementById('synthScreen').innerHTML = song;
}))


// Plays back the recorded notes
document.querySelector('#playBack')?.addEventListener('click', async () => {
	for (var i = 0; i < song.length; i++) {
			synth.triggerAttackRelease(song[i], "8n");
	    await timer(500);
	}
})

// Clears the song from the screen
document.querySelector('#clear')?.addEventListener('click', () => {
	song = [];
	document.getElementById('synthScreen').innerHTML = song;
})
