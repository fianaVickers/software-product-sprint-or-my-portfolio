/** Fetches the current date from the server and adds it to the page. */
async function showRandMsg() {
  const responseFromServer = await fetch('/randMsg');
  const textFromResponse = await responseFromServer.text();

  const msgContainer = document.getElementById('randMsgs-container');
  msgContainer.innerText = textFromResponse;
}