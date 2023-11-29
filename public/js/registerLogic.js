function registerUser() {
  let name = document.getElementById("nameofuser").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  console.log(name, email, username, password);

  const link = "http://localhost:3000/register";

  let senddata = JSON.stringify({
    name: name,
    email: email,
    username: username,
    password: password,
  });


  fetch(link, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: senddata,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network Response was not ok");
      }

      if (response.redirected) {
        window.location.href = response.url;
      }
      return response.json();
    })

    .then((data) => {

      if (data.token) {

        setTimeout(() => {
          location.href = "./login.html"
        }, 2000)


      }
    })
    .catch((error) => {
      console.log(error.message);
    });
}
