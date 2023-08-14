const isLogin = localStorage.getItem("isLogin");

if (isLogin) {
  document.getElementById("login-screen").style = "display: none";
  document.getElementById("home-screen").style = "display: block";
} else if (isLogin === "false") {
  document.getElementById("login-screen").style = "display: block";
  document.getElementById("home-screen").style = "display: none";
}
console.log(isLogin);
document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("isLogin");
  location.reload();
});

document.getElementById("login-btn").addEventListener("click", function () {
  // const nameFeild = document.getElementById("name").value;
  const emailFeild = document.getElementById("email").value;
  const passFeild = document.getElementById("password").value;

  if (emailFeild === "test@gmail.com" && passFeild === "123456") {
    document.getElementById("login-screen").style = "display: none";
    document.getElementById("home-screen").style = "display: block";
    localStorage.setItem("isLogin", true);
  } else {
    alert("আপনি ভুল ইমেইল বা পাসওয়ার্ড দিয়েছেন");
  }
});
