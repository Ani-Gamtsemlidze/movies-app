window.location.href = "movies_content.html";

async function checkData() {
  let loginEmail = document.querySelector("#email").value;
  let loginPsw = document.querySelector(".psw-input").value;

  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: loginEmail,
        password: loginPsw,
      }),
    });

    const userData = await response.json();
    console.log(userData.token);

    sessionStorage.setItem("token", userData.token);
    await fetchResource();
    window.location.href = "movies_content.html";
  } catch (error) {
    console.log(error);
  }
}
document.querySelector(".login-button").addEventListener("click", () => {
  checkData();
});
