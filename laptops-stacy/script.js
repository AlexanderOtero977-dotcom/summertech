// efecto pequeño de clic suave
document.addEventListener("click", (e) => {
    const dot = document.createElement("div");
    dot.className = "click";
    dot.style.left = e.pageX + "px";
    dot.style.top = e.pageY + "px";
    document.body.appendChild(dot);

    setTimeout(() => dot.remove(), 500);
});
.click {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #65c6ff;
    border-radius: 50%;
    opacity: 0.8;
    pointer-events: none;
    transform: scale(0);
    animation: clickAnim 0.5s ease-out forwards;
}

@keyframes clickAnim {
    to {
        transform: scale(3);
        opacity: 0;
    }
}
