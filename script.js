

document.getElementById("fetchCharacter").addEventListener("click", fetchCharacter);

async function fetchCharacter() {
  const response = await fetch("https://the-one-api.dev/v2/character", {
    headers: {
      "Authorization": "Bearer gv-g09aqoyUxmx-Gbl3B"
    }
  });

  if (!response.ok) {
    const errorMessage = `Error: ${response.status}`;
    document.getElementById("characterInfo").innerText = errorMessage;
    throw new Error(errorMessage);
  }

  const data = await response.json();
  const characters = data.docs;
  const randomIndex = Math.floor(Math.random() * characters.length);
  const character = characters[randomIndex];

  const characterInfo = `
    <h2>${character.name}</h2>
    <p>Race: ${character.race}</p>
    <p>Birth: ${character.birth}</p>
    <p>Death: ${character.death}</p>
  `;

  document.getElementById("characterInfo").innerHTML = characterInfo;
}
