import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const showMessage = (message, type) => {
  Toastify({
    text: message,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type === "success" ? "grey" : "red",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};
