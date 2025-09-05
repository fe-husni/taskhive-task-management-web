# TaskHive - Task Management Web

TaskHive adalah aplikasi web sederhana untuk **manajemen tugas** berbasis **HTML, TailwindCSS, dan JavaScript**.  
Project ini menggunakan **Tailwind** untuk styling dan menyimpan data task secara lokal menggunakan **localStorage**.

🔗 **Live Demo:** [TaskHive di GitHub Pages](https://fe-husni.github.io/taskhive-task-management-web/)

---
<!-- 
## ✨ Fitur

- ✅ Tambah & kelola task  
- ✅ Tambah & kelola user  
- ✅ Simpan data di localStorage browser  
- ✅ Responsive UI berbasis TailwindCSS  
- ✅ Deploy otomatis via GitHub Pages  

--- -->

## 📂 Struktur Project

```
.
├── docs/                    # Folder hasil build (dipakai GitHub Pages)
│   ├── index.html          # Landing page (signin.html)
│   ├── add-task.html
│   ├── add-user.html
│   ├── tasks.html
│   ├── dist/               # CSS hasil build Tailwind
│   ├── img/                # Asset gambar & ikon
│   └── js/                 # File JavaScript
│
├── src/                    # Source utama untuk development
│   ├── *.html
│   ├── input.css           # Entry CSS untuk Tailwind
│   └── js/                 # JS source
│
├── package.json
├── tailwind.config.js
└── README.md
```

---

## ⚙️ Instalasi & Development

### 1. Clone Repository

```bash
git clone https://github.com/fe-husni/taskhive-task-management-web.git
cd taskhive-task-management-web
```

### 2. Install Dependencies

Pastikan sudah install **Node.js 16+**.

```bash
npm install
```

### 3. Jalankan Tailwind Dev Build

```bash
npm run dev
```

→ akan membangkitkan `dist/output.css` dari `src/input.css`.

### 4. Preview Lokal

Buka file HTML dari folder `src/` (misalnya `src/signin.html`) menggunakan **Live Server** (VS Code extension).

---

## 🚀 Build & Deploy ke GitHub Pages

### 1. Build dan Siapkan Folder `docs/`

```bash
npm run deploy:docs
```

Script ini akan:
- Build Tailwind → `dist/output.css`
- Copy file dari `src/` ke `docs/`
- Fix semua path asset (CSS, JS, IMG)
- Rename `signin.html` → `index.html`
- Tambahkan `.nojekyll`

### 2. Commit & Push ke Repository

```bash
git add .
git commit -m "build: deploy to docs"
git push
```

### 3. Aktifkan GitHub Pages

1. Buka **Settings** → **Pages**
2. **Source**: `main` branch, folder `/docs`
3. Akses di: 👉 https://fe-husni.github.io/taskhive-task-management-web/

---

## 🛠️ Scripts yang Tersedia

| Script | Deskripsi |
|--------|-----------|
| `npm run dev` | Build TailwindCSS + watch |
| `npm run build:css` | Build CSS sekali (minify) |
| `npm run deploy:docs` | Siapkan folder docs untuk GitHub Pages |

---

## 📱 Screenshots

*Coming soon...*

<!-- ---

## 🤝 Contributing

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/amazing-feature`)
3. Commit perubahan (`git commit -m 'Add some amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

---

## 👨‍💻 Author

**Husni** - [GitHub Profile](https://github.com/fe-husni)

Project Link: [https://github.com/fe-husni/taskhive-task-management-web](https://github.com/fe-husni/taskhive-task-management-web) -->