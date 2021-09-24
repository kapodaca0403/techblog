const logOut = async () => {
  const result = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-type": "application/json" },
  });

  if (result.ok) {
    // if works replace
    document.location.replace("/");
  } else {
    alert("Logout Failed"); //if not then let user know logout failed
  }
};

document.querySelector("#logout").addEventListener("click", logOut); // this should be on the HTML
