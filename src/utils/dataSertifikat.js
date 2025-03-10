const getDataSertifikat = () => {
  return [
    {
      id: 1,
      title: "Belajar Dasar Pemrograman Javascript",
      imageUrl: import.meta.env.BASE_URL + "/assets/Sertifikat-1.svg",
      linkUrl: "https://www.dicoding.com/certificates/53XEDJE49PRN",
    },
    {
      id: 2,
      title: "Belajar Dasar Pemrograman Web",
      imageUrl: import.meta.env.BASE_URL + "/assets/Sertifikat-2.svg",
      linkUrl: "https://www.dicoding.com/certificates/07Z6WQG22ZQR",
    },
    {
      id: 3,
      title: "Belajar Membuat Front-end Web Untuk Pemula",
      imageUrl: import.meta.env.BASE_URL + "/assets/Sertifikat-3.svg",
      linkUrl: "https://www.dicoding.com/certificates/NVP7KNM3OZR0",
    },
  ];
};

export { getDataSertifikat };
