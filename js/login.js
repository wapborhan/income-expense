document.getElementById("login-btn").addEventListener("click", function () {
  // const nameFeild = document.getElementById("name").value;

  const emailFeild = document.getElementById("email").value;
  const passFeild = document.getElementById("password").value;

  if (emailFeild === "test@gmail.com" && passFeild === "127065") {
    document.getElementById("login-screen").style = "display: none";
    document.getElementById("home-screen").style = "display: block";
  } else {
    console.log("test");
  }
});
