// All business logic here, like: create, read, update, etc

class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(UserData) {
    const isDuplicate = this.users.some(u => u.username === UserData.username);
    if (isDuplicate) {
      return { success: false, message: "Username sudah dipakai, coba username lain ya!" };
    }
    const newUser = { id: Date.now(), ...UserData };
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
    return { success: true, message: "User berhasil disimpan" };
  }

  // === FIXED HERE ===
  signInUser(usernameByInput) {
    const input = (usernameByInput || "").trim();
    if (!input) {
      return { success: false, message: "Username wajib diisi." };
    }

    // Login case-sensitive (persis sama)
    const found = this.users.find(u => u.username === input);

    if (found) {
      return { success: true, user: found }; // kembalikan objek user
    } else {
      return { success: false, message: "Data user tidak ditemukan!" };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
  }
}
