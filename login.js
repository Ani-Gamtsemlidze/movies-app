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
      sessionStorage.setItem("token", userData.token);
      window.location.href = "https://chat.openai.com/";
      fetchResource();
    })
    .catch((error) => {
      console.log(error);
    });
}

function fetchResource() {
  const token = sessionStorage.getItem("token");

  fetch("https://dummyjson.com/auth/RESOURCE", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      //   console.log(error);
    });
}

button.addEventListener("click", checkData);
