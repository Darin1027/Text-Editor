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

butInstall.addEventListener("click", async () => {
  // Show the prompt
  window.deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const choice = await window.deferredPrompt.userChoice;
  if (choice.outcome === "accepted") {
    console.log("User accepted the A2HS prompt");
  } else {
    console.log("User dismissed the A2HS prompt");
  }
  // Hide the "Add to Home Screen" button
  butInstall.style.display = "none";
  // Clear the deferred prompt variable
  window.deferredPrompt = null;
});

window.addEventListener("appinstalled", (event) => {
  console.log("PWA Installed", event);
  alert("PWA Installed Successfully!");
});
