const token = sessionStorage.getItem("token");
function fetchResource() {
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
      console.log(error);
    });
}

export default fetchResource;
