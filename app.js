// app.js

const clans = [
  { name: "ELITE", discord: "https://discord.gg/elite-900982253679702036" },
  // Add the rest of the clans here...
];

const specialServers = [
  { name: "Special Server 1", discord: "https://discord.gg/special1" },
  { name: "Special Server 2", discord: "https://discord.gg/special2" },
  // Add more special servers as needed...
];

function generateClanList() {
  const clanListContainer = document.getElementById("clan-list");
  clans.forEach((clan) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>${clan.name}</strong>
      <a href="${clan.discord}" target="_blank">Join Discord</a>
    `;
    clanListContainer.appendChild(listItem);
  });
}

function generateSpecialServers() {
  const specialServersContainer = document.getElementById("special-servers");
  specialServers.forEach((server) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>${server.name}</strong>
      <a href="${server.discord}" target="_blank">Join Discord</a>
    `;
    specialServersContainer.appendChild(listItem);
  });
}

// Initialize the content when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  generateClanList();
  generateSpecialServers();
});
