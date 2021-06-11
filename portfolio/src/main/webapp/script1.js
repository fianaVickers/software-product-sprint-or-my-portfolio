/** Fetches the current date from the server and adds it to the page. */
async function showRandMsg() {
  const responseFromServer = await fetch('/randMsg');
  const textFromResponse = await responseFromServer.json();

  const msgContainer = document.getElementById('randMsgs-container');
  //msgContainer.innerText = textFromResponse;
  console.log(textFromResponse.log);
  console.log(textFromResponse.json);

  msgContainer.innerHTML = '';
  msgContainer.appendChild(
      createListElement('Video Game 1: ' + "Minecraft"));
  msgContainer.appendChild(
      createListElement('Video Game 2: ' + "Overwatch"));
  msgContainer.appendChild(
      createListElement('Video Game 3: ' + "Roblox"));
  
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

function addRandomVideoGame() {
  const videoGames =
      ['Minecraft', 'The Sims 4', 'OverWatch',
       'Pacman'];

  // Pick a random videoGame.
  const videoGame = videoGames[Math.floor(Math.random() * videoGames.length)];

  // Add it to the page.
  const gameContainer = document.getElementById('randVid-container');
  gameContainer.innerText = videoGame;
}