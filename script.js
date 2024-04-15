document.getElementById("fetchCharacter").addEventListener("click", fetchCharacter);

async function fetchCharacter() {
  const response = await fetch("https://the-one-api.dev/v2/character", {
    headers: {
      "Authorization": "Bearer gv-g09aqoyUxmx-Gbl3B"
    }
  });

  if (!response.ok) {
    const errorMessage = `Error: ${response.status}`;
    document.getElementById("characterInfoContainer").innerText = errorMessage;
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

  // Create a new div to hold the character info
  const characterContainer = document.createElement('div');
  characterContainer.classList.add('character-container'); // Add a class for styling
  characterContainer.innerHTML = characterInfo;

  // Find the parent element to append the character info
  const characterInfoContainer = document.getElementById("characterInfoContainer");

  // Clear any existing character info
  characterInfoContainer.innerHTML = '';

  // Append the character info to the container
  characterInfoContainer.appendChild(characterContainer);

  // Show the character info container
  characterInfoContainer.style.display = 'block';
}
