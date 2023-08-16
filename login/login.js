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

      console.log(userData);
      fetchResource();
    })
    .catch((error) => {
      console.log(error);
    });
}

function fetchResource() {
  const token = sessionStorage.getItem("token");

  fetch("https://dummyjson.com/auth/products", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      // Redirect after fetching the resource
      window.location.href = "newpage.html";
    })
    .catch((error) => {
      console.log(error);
    });
}

// Call checkData to initiate the login process
checkData();
