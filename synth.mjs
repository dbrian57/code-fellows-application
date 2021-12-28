import * as Tone from './tone/build/tone.js'

//attach a click listener to a play button
document.querySelector('button')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
})

//create a synth and connect it to the main output (your speakers)


//play a middle 'C' for the duration of an 8th note
