const DataFood = [
    {
        img: "../../foodAsset/Picture1.png",
        nama: "Pengkang",
        deskripsi: "merupakan makanan tradisional berbahan ketan dengan isi udang ebi yang dibungkus dengan daun pisang dan dikukus",
        kategori: "Berat",
        harga: "Rp8.000 - 30.000"
    },
    {
        img: "../../foodAsset/Picture2.png",
        nama: "Kerupuk Basah",
        deskripsi: "Makanan ini adalah makanan khas Kalimantan Barat, khususnya Kota Putussibau. Bentuknya mirip pempek palembang yaitu lonjong dan memanjang.Panjangnya berkisar 15 sampai 25 cm. Diameternya biasanya berkisar antara 2 sampai 3 meter. Makanan ini lebih nikmat bila disantap dengan menggunakan sambal khas Pontianak.",
        kategori: "Ringan",
        harga: "Rp10.000 - 25.000"
    },
    {
        img: "../../foodAsset/Picture3.png",
        nama: "Sotong pangkong",
        deskripsi: " Sotong adalah makanan yang terbuat dari cumi yang sudah cukup dikenal. Namun, di Kalimantan Barat ada sotong pangkong, yaitu cumi yang digeprek hingga menjadi gepeng. Cara membuatnya yaitu dengan memanggang cumi sampai matang. Setelah matang kemudian cumi dipukul sampai gepeng. Selanjutnya dijemur sampai kering. Cara menikmati makanan ini adalah mencampurnya dengan saus asam pedas atau saus kacang",
        kategori: "Ringan",
        harga: "Rp23.000 - 120.000"
    },
    {
        img: "../../foodAsset/Picture4.png",
        nama: " Asam Pedas Tempoyak",
        deskripsi: "Asam pedas tempoyak adalah jenis makanan yang akan mudah ditemui di Ketapang. Bahan dasar tempoyak adalah dari buah durian Kalbar yang difermentasi.",
        kategori: "Berat",
        harga: "Rp33.000 - 35.000"
    },
    {
        img: "../../foodAsset/Picture19.png",
        nama: "Choipan",
        deskripsi: "Choipan adalah salah satu kuliner khas tionghoa yang ada di Kota Singkawang. Nama Choipan Tjhia diambil dari nama keluarga Tjhia yang mempelopori makanan ini di Kota Singkawang",
        kategori: "Ringan",
        harga: "Rp5.000 - 15.000"
    },
    {
        img: "../../foodAsset/Picture5.png",
        nama: "Pekasam",
        deskripsi: "merupakan jenis makanan yang dibuat dari ikan yang digiling dan difermentasikan dengan bahan-bahan seperti garam, asam jawa, dan rempah-rempah. Pekasam ini terkenal karena rasa yang kuat dan kaya akan protein yang disebabkan oleh penambahan ikan yang segar dan bahan fermentasi yang khas.",
        kategori: "Berat",
        harga: "Rp18.000 - 75.000"
    },
    {
        img: "../../foodAsset/Picture6.png",
        nama: "Tumpi",
        deskripsi: "Kue Tumpi ini terbuat dari bahan tepung terigu dan gula merah. Selanjutnya bahan-bahan tersebut dicampur dengan bahan lain kemudian digoreng di minyak panas. Rasa tumpi ini manis dan legit. Teksturnya lembut dan kenyal. Sangat cocok untuk disantap sebagai cemilan atau teman minum kopi.",
        kategori: "Ringan",
        harga: "Rp2.000 - 5.000"
    },
    {
        img: "../../foodAsset/Picture7.png",
        nama: "Kue Kantong Semar",
        deskripsi: "terbuat dari beras ketan yang dicampur dengan santan, gula, garam dan kacang beras. Yang unik, adonan beras ketan tersebut selanjutnya di ke dalam sebuah wadah seperti kantong Semar",
        kategori: "Ringan",
        harga: "Rp3.000 - 5.000"
    },
    {
        img: "../../foodAsset/Picture8.png",
        nama: "Kiam Ko Kwe",
        deskripsi: "adalah salah satu camilan malam di wilayah Pontianak yang mudah ditemui di kota tersebut. Berbahan dasar tepung beras dengan tumisan ayam di atasnya.",
        kategori: "Ringan",
        harga: "Rp12.000 - 31.000"
    },
    {
        img: "../../foodAsset/Picture9.png",
        nama: "Lek Tau Suan",
        deskripsi: " berarti Butiran Mutiara Kacang Hijau, yang mengacu pada bahan dasar makanan ini yakni kacang hijau yang sudah dikupas kulitnya.",
        kategori: "Berat",
        harga: "Rp10.000 - 20.000"
    },
    {
        img: "../../foodAsset/Picture10.png",
        nama: "Mie Tiaw Asuk",
        deskripsi: "Makanan china yang bernama mie tiaw asu ini banyak dijumpai di Singkawang dan Pontianak. Asu berarti paman dalam bahasa Mandarin. Setidaknya ada dua versi mie tiaw khas Kalbar yakni versi kuah dan versi goreng. Menu ini menggunakan mi putih berbentuk pipih dari tepung beras dan mirip seperti mie kwetiau tetapi lebih kecil.",
        kategori: "Berat",
        harga: "Rp15.000 - 30.000"
    },
    {
        img: "../../foodAsset/Picture11.png",
        nama: "Jorong-jorong",
        deskripsi: "Jorong-jorong merupakan makanan yang terbuat dari tepung beras dan santan. Adonan makanan ini dicetak di dalam wadah takir yang terbuat dari daun pisang lalu dikukus. Rasa kue ini manis dan gurih.",
        kategori: "Ringan",
        harga: "Rp15.000 - 35.000"
    },
    {
        img: "../../foodAsset/Picture12.png",
        nama: "Ketupat colet",
        deskripsi: "Ketupat colet merupakan makanan yang berasal dari Ketapang, Kalimantan Barat. Ketupat colet tidak seperti halnya ketupat pada umumnya, bedanya dalam cara penyajiannya.",
        kategori: "Ringan",
        harga: "Rp15.000 - 25.000"
    },
    {
        img: "../../foodAsset/Picture13.png",
        nama: "ce Hun Tiao/Ce Hun Tiaw",
        deskripsi: "Minuman khas Pontianak ini disebut es campur ala Pontianak. Isinya berupa kacang merah, cincau dipotong dadu, jelly bening panjang, ketan hitam dan sepotong bongko atau kue hijau. Semua bahan-bahan tersebut ditumpuk dengan es serut dan disiram kuah santan.",
        kategori: "Ringan",
        harga: "Rp19.000 - 27.000"
    },
    {
        img: "../../foodAsset/Picture14.png",
        nama: "Es Lidah buaya",
        deskripsi: "Minuman yang satu ini menjadi favorit masyarakat Kota Pontianak. Es lidah buaya selalu hadir pada saat Lebaran dengan berbagai variasi. Biasanya, es lidah buaya dibuat dengan sirup melon ataupun leci dan dicampur dengan biji selasih. Sensasi rasa segar dan manis ini menjadikan es lidah buaya minuman favorit saat Lebaran.",
        kategori: "Minuman",
        harga: "Rp23.000 - 30.000"
    },
    {
        img: "../../foodAsset/Picture15.png",
        nama: "Air serbat",
        deskripsi: "Air Serbat merupakan minuman tradisional khas Kalimantan Barat yang sering disajikan saat tradisi saprahan. Minuman ini terbuat dari rempah-rempah seperti kayu sepang, kapulaga, kayu manis, jahe, daun pandan, dan cengkeh. ",
        kategori: "Minuman",
        harga: "Rp15.000 - 20.000"
    },
    {
        img: "../../foodAsset/Picture16.png",
        nama: "Bingke Berendam",
        deskripsi: "Berkunjung ke Kota Pontianak rasanya belum sah kalau tidak membawa bingke berendam sebagai buah tangan. Kue ini hadir dalam dua varian, yakni bingke biasa dan bingke berendam. Perbedaan antara keduanya terletak pada metode memasaknya. Kalau bingke biasa diolah dengan cara dipanggang, bingke berendam dimasak dengan cara dikukus. ",
        kategori: "Ringan",
        harga: "Rp25.000 - 35.000"
    },
    {
        img: "../../foodAsset/Picture17.png",
        nama: "Pisang Srikaya",
        deskripsi: "Camilan khas Kota Pontianak yang satu ini terbuat dari potongan pisang yang tebal, kemudian digoreng dengan tepung dan siraman pasta srikaya yang manis. Cita rasa pisang srikaya pun lezat dengan perpaduan antara renyah, gurih, dan manis. Tidak hanya itu, banderol harganya juga sangat terjangkau. Berbekal uang Rp5.000 saja, Anda sudah bisa mendapatkannya. ",
        kategori: "Ringan",
        harga: "Rp5.000 - 15.000"
    },
    {
        img: "../../foodAsset/Picture18.png",
        nama: "Es krim angi",
        deskripsi: "Es krim angi merupakan kuliner manis yang berasal dari Kota Pontianak, Kalimantan Barat. Sudah lama ada, es krim angi selalu dicari para pelancong yang berkunjung ke Kota Khatulistiwa tersebut.",
        kategori: "Ringan",
        harga: "Rp10.000 - 25.000"
    }
];

export default DataFood;