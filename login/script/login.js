import fetchResource from "./auth";

const button = document.querySelector(".login-button");

function checkData() {
  let loginEmail = document.querySelector("#email").value;
  let loginPsw = document.querySelector(".psw-input").value;

  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: loginEmail,
      password: loginPsw,
    }),
  })
    .then((res) => res.json())
    .then((userData) => {
      localStorage.setItem("token", userData.token);
      console.log(userData.token);

      // Fetch the protected resource first, then navigate to the new page
      fetchResource().then(() => {
        window.location.href = "movies_content.html";
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

button.addEventListener("click", checkData);
