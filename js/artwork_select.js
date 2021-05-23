function handler() {
    console.log("got click");
}

art_overlay = document.querySelector(".art-popup");

document.querySelectorAll('.art-piece').forEach(item => {
    item.onclick = () => {
        art_overlay.style.visibility = "visible";
        img = document.createElement("img");
        img.src = item.children[0].children[0].src.replace("thumbnails", "artwork");
        img.style.height = "90%";
        img.style.width = "auto";
        art_overlay.appendChild(img);
    };
});
