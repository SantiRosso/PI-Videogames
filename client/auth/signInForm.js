import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    //close modal
    // const signinModal = document.querySelector("#signInModal");
    // const modal = bootstrap.Modal.getInstance(signinModal);
    // modal.hide();
    showMessage("Welcome back " + credentials.user.email, "success");
  } catch (error) {
    console.log(error.code);
    if (error.code === "auth/wrong-password") {
      showMessage("Wrong password", "error");
    } else if (error.code === "auth/user-not-found") {
      showMessage("User not found", "error");
    } else {
      showMessage(error.message, "error");
    }
  }
});
