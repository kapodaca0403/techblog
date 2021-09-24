const logIn = async (event) => {
  event.preventDefault();
  const email = document.querySelector("email-login").value.trim();
  const pw = document.querySelector("pw-logIn").value.trime();

  if (email && pw) {
    const result = await fetch("/api/users/login", {
      // grabbing login function from API
      method: "POST",
      body: JSON.stringify({ email, pw }), // stringfy input
      headers: { "Content-Type": "application/json" },
    });
    if (result.ok) {
      // if credentials are good then replace
      document.location.replace("/");
    } else {
      alert("Login Failed"); // if fail let user know
    }
  }
};

const signUp = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const pw = document.querySelector("#pw-signup").value.trim();
  if (username && email && pw) {
    const result = await fetch("/api/users", {
      // grabbing login function from API
      method: "POST",
      body: JSON.stringify({ username, email, pw }), // stringfy input
      headers: { "Content-Type": "application/json" },
    });
    if (result.ok) {
      document.location.replace("/");
      // if credentials are good then replace
    } else {
      alert("Sign-up Failed"); // if fail let user know
    }
  }
};

document.querySelector("login-form").addEventListener("submit", logIn); // button on HTML

document.querySelector("sign-form").addEventListener("submit", signUp); // button on HTML
