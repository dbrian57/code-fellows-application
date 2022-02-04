import * as Tone from '/src/scripts/tone.js';
const crusher = new window.Tone.BitCrusher(4).toDestination();
let synth = new window.Tone.Synth().connect(crusher);

const timer = ms => new Promise(res => setTimeout(res, ms));

for ( let i = 0, len = localStorage.length; i < len; ++i ) {
  let object = JSON.parse(localStorage.getItem(localStorage.key( i )))
  if ( object.username != null) {
      let username = object.username
      let songTitle = object.songTitle
      let song = object.songInput
      let tableBody = document.getElementById('userSongs').getElementsByTagName('tbody')[0];

      let newRow = tableBody.insertRow(-1);

      let newCell1 = newRow.insertCell();
      let newCell2 = newRow.insertCell();
      let newCell3 = newRow.insertCell();
      let newCell4 = newRow.insertCell();

      let userText = document.createTextNode(username);
      let songTitleText = document.createTextNode(songTitle);
      let songText = document.createTextNode(song);
      let btn = document.createElement("button");
      btn.innerHTML = "Play Song";
      btn.onclick = async () => {
        for (var i = 0; i < song.length; i++) {
        		synth.triggerAttackRelease(song[i], "8n");
        	   await timer(500);
        	};
        };
      
      newCell1.appendChild(userText);
      newCell2.appendChild(songTitleText);
      newCell3.appendChild(songText);
      newCell4.appendChild(btn);

    }
}