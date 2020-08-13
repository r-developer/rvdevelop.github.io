var modal = document.querySelector(".button-write-us");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".modal-close");
var user = popup.querySelector("[name=name]");

modal.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    user.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});



