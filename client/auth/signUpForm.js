import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const singUpForm = document.querySelector("#");

singUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = singUpForm["signUp-email"].value;
  const password = singUpForm["signUp-password"].value;

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    //close the signup Modal
    // const signupModal = document.querySelector("#signUpModal");
    // const modal = bootstrap.Modal.getInstance(signupModal);
    // modal.hide();

    console.log(userCredentials);

    showMessage("Welcome " + userCredentials.user.email, "success");
  } catch (error) {
    if (error.code === "auth/invalid-email") {
      showMessage("Invalid email", "error");
    } else if (error.code === "auth/weak-password") {
      showMessage("Password is too weak", "error");
    } else if (error.code === "auth/email-already-in-use") {
      showMessage("Email already in use", "error");
    } else if (error.code) {
      showMessage("Something went wrong", "error");
    }
  }
});
