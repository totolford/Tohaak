// main.js

function selectMode(mode) {
    const modeSelection = document.getElementById("modeSelection");
    const hostScreen = document.getElementById("hostScreen");
    const joinScreen = document.getElementById("joinScreen"); // Si tu as un écran de join
    const soloScreen = document.getElementById("soloScreen"); // Idem

    // Masquer tous les écrans
    [modeSelection, hostScreen, joinScreen, soloScreen].forEach(el => {
        if (el) el.style.display = "none";
    });

    // Afficher l'écran sélectionné
    switch (mode) {
        case "host":
            hostScreen.style.display = "block";
            break;
        case "join":
            joinScreen.style.display = "block";
            break;
        case "solo":
            soloScreen.style.display = "block";
            break;
        default:
            modeSelection.style.display = "block";
    }
}
