// Bridge antara UI dari HTML dan Model User

document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('userForm');
  const userManager = new User();
  const usernameInput = document.getElementById('username');
  const usernameError = document.getElementById('usernameError');

  userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // reset error UI
    usernameError.textContent = "";
    usernameError.classList.add("hidden");

    const usernameByInput = usernameInput.value;

    const result = userManager.signInUser(usernameByInput);

    if (result.success) {
      // contoh "remember me" sederhana:
      const remember = document.getElementById('remember').checked;
      (remember ? localStorage : sessionStorage).setItem('currentUser', result.user.username);
      window.location.href = 'tasks.html';
    } else {
      usernameError.textContent = result.message;
      usernameError.classList.remove("hidden");
    }
  });
});
