const loggedInButtons = document.querySelectorAll("#logged-in");
const loggedOutButtons = document.querySelectorAll("#logged-out");

export const loginCheck = (user) => {
  console.log(loggedInButtons, loggedOutButtons, user);
  if (user) {
    loggedInButtons.forEach((button) => (button.style.display = "block"));
    loggedOutButtons.forEach((button) => (button.style.display = "none"));
  } else {
    loggedInButtons.forEach((button) => (button.style.display = "none"));
    loggedOutButtons.forEach((button) => (button.style.display = "block"));
  }
};
