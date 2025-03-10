import Sertifikat1 from "/assets/Sertifikat-1.svg";
import Sertifikat2 from "/assets/Sertifikat-2.svg";
import Sertifikat3 from "/assets/Sertifikat-3.svg";

const getDataSertifikat = () => {
  return [
    {
      id: 1,
      title: "Belajar Dasar Pemrograman Javascript",
      imageUrl: Sertifikat1,
      linkUrl: "https://www.dicoding.com/certificates/53XEDJE49PRN",
    },
    {
      id: 2,
      title: "Belajar Dasar Pemrograman Web",
      imageUrl: Sertifikat2,
      linkUrl: "https://www.dicoding.com/certificates/07Z6WQG22ZQR",
    },
    {
      id: 3,
      title: "Belajar Membuat Front-end Web Untuk Pemula",
      imageUrl: Sertifikat3,
      linkUrl: "https://www.dicoding.com/certificates/NVP7KNM3OZR0",
    },
  ];
};

export { getDataSertifikat };
