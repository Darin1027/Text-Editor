const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the default prompt
  event.preventDefault();

  // Store the event to use it later
  window.deferredPrompt = event;

  // Show the "Add to Home Screen" button
  butInstall.style.display = "block";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {});
