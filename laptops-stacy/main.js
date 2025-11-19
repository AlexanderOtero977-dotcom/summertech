document.addEventListener("click", function(e) {
    const efecto = document.createElement("span");
    efecto.className = "click-efecto";
    efecto.style.left = e.pageX + "px";
    efecto.style.top = e.pageY + "px";
    document.body.appendChild(efecto);

    setTimeout(() => {
        efecto.remove();
    }, 800);
});
