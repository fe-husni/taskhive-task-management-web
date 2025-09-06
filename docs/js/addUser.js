// Bridge antara UI dari HTML dan Model User

document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('userForm');
  const userManager = new User();
  const usernameInput = document.getElementById('username');
  const usernameError = document.getElementById('usernameError');

  userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // reset error dulu
    usernameError.textContent = "";
    usernameError.classList.add("hidden");

    const UserData = {
      username: usernameInput.value.trim(),
    };

    const result = userManager.saveUser(UserData);

    if (result.success) {
      return window.location.href = 'signin.html';
    } else {
      // tampilkan error di bawah input
      usernameError.textContent = result.message;
      usernameError.classList.remove("hidden");
    }
  });
});
