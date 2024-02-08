function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set button position to absolute
    noButton.style.position = "absolute";

    // Change image source to "sad-sad-cat.gif";
    document.getElementsByClassName("image")[0].src = "images/sus.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide name message
    document.getElementById("question").textContent =
      "Aha? Ten przycisk jest tylko do celów wizualnych...... ";
    document.getElementById("name").style.display = "none";

  }

  if (response === "Yes") {
    // Remove name message and no button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    // Update text content, show message, and change image source to "kiss.gif"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "YAAAAAAAAY NIE MOGĘ SIĘ DOCZEKAĆ, BĘDZIE SUPERRR!!!";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/kiss.gif";

    // Remove yes button
    document.getElementById("yesButton").remove();
  }
}

