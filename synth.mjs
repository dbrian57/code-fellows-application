import * as Tone from './tone/build/tone.js'

let song = []

const synth = new window.Tone.Synth().toDestination();
//attach a click listener to a play button
document.querySelector('#C4')?.addEventListener('click', async () => {
	await window.Tone.start()
  synth.triggerAttackRelease("C4", "8n");
  let add_note = song.push("C4");
  console.log(song);
})

document.querySelector('#C5')?.addEventListener('click', async () => {
	await window.Tone.start()
  synth.triggerAttackRelease("C5", "8n");
  let add_note = song.push("C5");
  console.log(song);
})

//create a synth and connect it to the main output (your speakers)
synth.triggerAttackRelease("C4")



//play a middle 'C' for the duration of an 8th note
