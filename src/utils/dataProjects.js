import Project1 from "/assets/Project-1.svg";
import Project2 from "/assets/Project-2.svg";
import Project3 from "/assets/Project-3.svg";
import Project4 from "/assets/Project-4.svg";
import Project5 from "/assets/Project-5.svg";
import Project6 from "/assets/Project-6.svg";
import Project7 from "/assets/Project-7.svg";
import Project8 from "/assets/Project-8.svg";
import Project9 from "/assets/Project-9.svg";
import ReactLogo from "/react.svg";
import TailwindLogo from "/tailwind-css.svg";
import ViteLogo from "/vitejs.svg";
import HtmlLogo from "/html.svg";
import CssLogo from "/css.svg";
import JavascriptLogo from "/javascript.svg";
import BootstrapLogo from "/bootstrap.svg";
import JqueryLogo from "/jquery.svg";

const getDataProjects = () => {
  return [
    {
      id: 1,
      title: "Website Aplikasi Notes",
      image: Project1,
      linkUrl: "https://ryanfkhrji.github.io/notes-app/",
      description: "Aplikasi untuk mencatat dan menyimpan catatan pengguna. Memiliki fitur kategori dan tampilan daftar catatan yang tersusun rapi.",
      tech: {
        react: ReactLogo,
        tailwindcss: TailwindLogo,
        vite: ViteLogo,
      },
    },
    {
      id: 2,
      title: "Website Aplikasi Daftar Contact",
      image: Project2,
      linkUrl: "https://ryanfkhrji.github.io/contact-app/",
      description: "Aplikasi untuk menyimpan dan mengelola daftar kontak dengan fitur tambah dan hapus kontak. Memiliki tampilan sederhana dengan input nama dan tag kontak.",
      tech: {
        react: ReactLogo,
        tailwindcss: TailwindLogo,
        vite: ViteLogo,
      },
    },
    {
      id: 3,
      title: "Calculator BMI",
      image: Project3,
      linkUrl: "https://ryanfkhrji.github.io/calculator-bmi/",
      description: "Kalkulator untuk menghitung Indeks Massa Tubuh (BMI). Menghasilkan kategori berat badan berdasarkan tinggi dan berat pengguna.",
      tech: {
        html: HtmlLogo,
        css: CssLogo,
        javascript: JavascriptLogo,
      },
    },
    {
      id: 4,
      title: "Website Badut Kita",
      image: Project4,
      linkUrl: "https://ryanfkhrji.github.io/badut-kita/",
      description: "Website penyedia jasa sewa badut murah di Jabodetabek. Menampilkan galeri foto dan tombol pemesanan cepat.",
      tech: {
        html: HtmlLogo,
        tailwindcss: TailwindLogo,
      },
    },
    {
      id: 5,
      title: "Landing Page Sneaker Shop",
      image: Project5,
      linkUrl: "https://ryanfkhrji.github.io/sneakers/",
      description: "Platform untuk menjual sepatu sneakers dengan desain modern. Memiliki kategori produk dan tampilan harga yang jelas.",
      tech: {
        html: HtmlLogo,
        css: CssLogo,
        bootstrap: BootstrapLogo,
      },
    },
    {
      id: 6,
      title: "Website WPU Hat",
      image: Project6,
      linkUrl: "https://ryanfkhrji.github.io/wpu-hat/",
      description: "Menyediakan layanan pemesanan pizza secara online. Menampilkan daftar menu dengan gambar, deskripsi, dan harga.",
      tech: {
        html: HtmlLogo,
        javascript: JavascriptLogo,
        bootstrap: BootstrapLogo,
        jquery: JqueryLogo,
      },
    },
    {
      id: 7,
      title: "To Do List",
      image: Project7,
      linkUrl: "https://ryanfkhrji.github.io/toDoList/",
      description: "Aplikasi untuk mencatat dan mengelola daftar tugas. Memiliki fitur centang untuk tugas selesai dan tombol hapus.",
      tech: {
        html: HtmlLogo,
        css: CssLogo,
        javascript: JavascriptLogo,
      },
    },
    {
      id: 8,
      title: "Website Aplikasi Bookshelf",
      image: Project8,
      linkUrl: "https://ryanfkhrji.github.io/bookshelfApps/",
      description: "Aplikasi untuk mengelola daftar buku yang sedang atau telah dibaca. Fitur pencarian buku dan penyimpanan status bacaan.",
      tech: {
        html: HtmlLogo,
        css: CssLogo,
        javascript: JavascriptLogo,
      },
    },
    {
      id: 9,
      title: "Landing Page Key Me",
      image: Project9,
      linkUrl: "https://ryanfkhrji.github.io/key-me/",
      description: "Website e-commerce untuk menjual keyboard mekanikal. Desain minimalis dengan informasi produk dan tombol pembelian cepat.",
      tech: {
        html: HtmlLogo,
        css: CssLogo,
        bootstrap: BootstrapLogo,
      },
    },
  ];
};

export { getDataProjects };
