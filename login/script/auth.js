function fetchResource() {
  const token = localStorage.getItem("token");

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
