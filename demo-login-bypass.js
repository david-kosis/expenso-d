/* DEMO ONLY. This intentionally does not authenticate credentials. */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Required fields are checked by native form validation; credentials are not verified.
    window.location.href = "dashboard.html";
  });
});