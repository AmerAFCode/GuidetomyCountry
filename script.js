console.log("load")
// Content Loaded, i-e Remove Preloader
window.addEventListener("load", removePreloader)

function removePreloader() {
    document.getElementById("preloader").style.display="none"
}

