import * as Tone from '/src/scripts/tone.js';

let song = [];

let songStorage = document.getElementById('synthScreen').innerHTML;
songStorage = document.getElementById('synthScreen').innerHTML;

if (localStorage.getItem("songStorage")) {
    song = JSON.parse(localStorage.getItem("songStorage"));
		document.getElementById('synthScreen').innerHTML = song;
} else {
    song = [];
}


const crusher = new window.Tone.BitCrusher(4).toDestination();
let synth = new window.Tone.Synth().connect(crusher);

const timer = ms => new Promise(res => setTimeout(res, ms));

//Synth selection buttons
document.getElementById('Poly').addEventListener('click', async () => {
	synth = new window.Tone.PolySynth().connect(crusher);
	let x = document.getElementsByClassName("synthButton");
	var i;
	for (i = 0; i < x.length; i++) {
	x[i].style.backgroundColor = "transparent";
	};
	document.getElementById('Poly').style.backgroundColor = 'rgba(252, 186, 3, 0.75)';
});

document.getElementById('Duo').addEventListener('click', async () => {
	synth = new window.Tone.DuoSynth().connect(crusher);
	let x = document.getElementsByClassName("synthButton");
	var i;
	for (i = 0; i < x.length; i++) {
	x[i].style.backgroundColor = "transparent";
	};
	document.getElementById('Duo').style.backgroundColor = 'rgba(252, 186, 3, 0.75)';
});

document.getElementById('Metal').addEventListener('click', async () => {
	synth = new window.Tone.MetalSynth().connect(crusher);
	let x = document.getElementsByClassName("synthButton");
	var i;
	for (i = 0; i < x.length; i++) {
	x[i].style.backgroundColor = "transparent";
	};
	document.getElementById('Metal').style.backgroundColor = 'rgba(252, 186, 3, 0.75)';
});

document.getElementById('FM').addEventListener('click', async () => {
	synth = new window.Tone.FMSynth().connect(crusher);
	let x = document.getElementsByClassName("synthButton");
	var i;
	for (i = 0; i < x.length; i++) {
	x[i].style.backgroundColor = "transparent";
	};
	document.getElementById('FM').style.backgroundColor = 'rgba(252, 186, 3, 0.75)';
});


/*
Makes the keys clickable and plays the correct tone by catching the button ID
(the key's note) and inserting it into synth function. Also inserts key ID into
song array for future playback
*/
document.querySelectorAll('.natural').forEach(btn=>btn.addEventListener('click', async () => {
	let note = "id";
	note = event.srcElement.id;
	synth.triggerAttackRelease(note, "8n");
	song.push(note);
	localStorage.setItem("songStorage", JSON.stringify(song));
	document.getElementById('synthScreen').innerHTML = song;
}));

document.querySelectorAll('.accidental').forEach(btn=>btn.addEventListener('click', async () => {
	let note = "id";
	note = event.srcElement.id;
	synth.triggerAttackRelease(note, "8n");
	song.push(note);
	localStorage.setItem("songStorage", JSON.stringify(song));
	document.getElementById('synthScreen').innerHTML = song;
}));

// Plays back the recorded notes
document.querySelector('#playBack').addEventListener('click', async () => {
	for (var i = 0; i < song.length; i++) {
			synth.triggerAttackRelease(song[i], "8n");
	    await timer(500);
	};
});

// Clears the song from the screen
document.querySelector('#clear').addEventListener('click', () => {
	song = [];
	localStorage.removeItem(songStorage);
	document.getElementById('synthScreen').innerHTML = song;
});

// Creates a new user object and stores it in localStorage
class User {
  constructor(username, songTitle) {
    this.username = username;
    this.songTitle = songTitle;
    this.songInput = song;
  }
  storeObject(username){
    let key = username;
    localStorage.setItem(key, JSON.stringify(this));
  }
}

document.getElementById('submitSong').addEventListener('click', (e) => {
  e.preventDefault();
  let nameValue = document.getElementById('username').value;
  let songValue = document.getElementById('songTitle').value;
  let message = 'Your song was saved!'
  
  if (nameValue == 0 || songValue == 0 ) {
    alert("You must enter text into the Username and Song Title fields before saving.")
  } else {
  new User(nameValue, songValue).storeObject(nameValue);
  document.getElementById('username').value = '';
  document.getElementById('songTitle').value = '';
  document.getElementById('yourSongSaved').innerHTML = message;
  }
})
