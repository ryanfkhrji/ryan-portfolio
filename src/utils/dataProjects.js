const getDataProjects = () => {
  return [
    {
      id: 1,
      title: "Website Aplikasi Notes",
      image: import.meta.env.BASE_URL + "/assets/Project-1.svg",
      linkUrl: "https://ryanfkhrji.github.io/notes-app/",
      description: "Aplikasi untuk mencatat dan menyimpan catatan pengguna. Memiliki fitur kategori dan tampilan daftar catatan yang tersusun rapi.",
      tech: {
        react: import.meta.env.BASE_URL + "/react.svg",
        tailwindcss: import.meta.env.BASE_URL + "/tailwind-css.svg",
        vite: import.meta.env.BASE_URL + "/vitejs.svg",
      },
    },
    {
      id: 2,
      title: "Website Aplikasi Daftar Contact",
      image: import.meta.env.BASE_URL + "/assets/Project-2.svg",
      linkUrl: "https://ryanfkhrji.github.io/contact-app/",
      description: "Aplikasi untuk menyimpan dan mengelola daftar kontak dengan fitur tambah dan hapus kontak. Memiliki tampilan sederhana dengan input nama dan tag kontak.",
      tech: {
        react: import.meta.env.BASE_URL + "/react.svg",
        tailwindcss: import.meta.env.BASE_URL + "/tailwind-css.svg",
        vite: import.meta.env.BASE_URL + "/vitejs.svg",
      },
    },
    {
      id: 3,
      title: "Calculator BMI",
      image: import.meta.env.BASE_URL + "/assets/Project-7.svg",
      linkUrl: "https://ryanfkhrji.github.io/calculator-bmi/",
      description: "Kalkulator untuk menghitung Indeks Massa Tubuh (BMI). Menghasilkan kategori berat badan berdasarkan tinggi dan berat pengguna.",
      tech: {
        html: import.meta.env.BASE_URL + "/html.svg",
        css: import.meta.env.BASE_URL + "/css.svg",
        javascript: import.meta.env.BASE_URL + "/javascript.svg",
      },
    },
    {
      id: 4,
      title: "Website Badut Kita",
      image: import.meta.env.BASE_URL + "/assets/Project-3.svg",
      linkUrl: "https://ryanfkhrji.github.io/badut-kita/",
      description: "Website penyedia jasa sewa badut murah di Jabodetabek. Menampilkan galeri foto dan tombol pemesanan cepat.",
      tech: {
        html: import.meta.env.BASE_URL + "/html.svg",
        tailwindcss: import.meta.env.BASE_URL + "/tailwind-css.svg",
      },
    },
    {
      id: 5,
      title: "Landing Page Sneaker Shop",
      image: import.meta.env.BASE_URL + "/assets/Project-4.svg",
      linkUrl: "https://ryanfkhrji.github.io/sneakers/",
      description: "Platform untuk menjual sepatu sneakers dengan desain modern. Memiliki kategori produk dan tampilan harga yang jelas.",
      tech: {
        html: import.meta.env.BASE_URL + "/html.svg",
        css: import.meta.env.BASE_URL + "/css.svg",
        bootstrap: import.meta.env.BASE_URL + "/bootstrap.svg",
      },
    },
    {
      id: 6,
      title: "Website WPU Hat",
      image: import.meta.env.BASE_URL + "/assets/Project-5.svg",
      linkUrl: "https://ryanfkhrji.github.io/wpu-hat/",
      description: "Menyediakan layanan pemesanan pizza secara online. Menampilkan daftar menu dengan gambar, deskripsi, dan harga.",
      tech: {
        html: import.meta.env.BASE_URL + "/html.svg",
        javascript: import.meta.env.BASE_URL + "/javascript.svg",
        bootstrap: import.meta.env.BASE_URL + "/bootstrap.svg",
        jquery: import.meta.env.BASE_URL + "/jquery.svg",
      },
    },
    {
      id: 7,
      title: "To Do List",
      image: import.meta.env.BASE_URL + "/assets/Project-6.svg",
      linkUrl: "https://ryanfkhrji.github.io/toDoList/",
      description: "Aplikasi untuk mencatat dan mengelola daftar tugas. Memiliki fitur centang untuk tugas selesai dan tombol hapus.",
      tech: {
        html: import.meta.env.BASE_URL + "/html.svg",
        css: import.meta.env.BASE_URL + "/css.svg",
        javascript: import.meta.env.BASE_URL + "/javascript.svg",
      },
    },
    {
      id: 8,
      title: "Website Aplikasi Bookshelf",
      image: import.meta.env.BASE_URL + "/assets/Project-8.svg",
      linkUrl: "https://ryanfkhrji.github.io/bookshelfApps/",
      description: "Aplikasi untuk mengelola daftar buku yang sedang atau telah dibaca. Fitur pencarian buku dan penyimpanan status bacaan.",
      tech: {
        html: import.meta.env.BASE_URL + "/html.svg",
        css: import.meta.env.BASE_URL + "/css.svg",
        javascript: import.meta.env.BASE_URL + "/javascript.svg",
      },
    },
    {
      id: 9,
      title: "Landing Page Key Me",
      image: import.meta.env.BASE_URL + "/assets/Project-9.svg",
      linkUrl: "https://ryanfkhrji.github.io/key-me/",
      description: "Website e-commerce untuk menjual keyboard mekanikal. Desain minimalis dengan informasi produk dan tombol pembelian cepat.",
      tech: {
        html: import.meta.env.BASE_URL + "/html.svg",
        css: import.meta.env.BASE_URL + "/css.svg",
        bootstrap: import.meta.env.BASE_URL + "/bootstrap.svg",
      },
    },
  ];
};

export { getDataProjects };
