export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Siap membantu perjalanan Anda di Banyumas
        </h1>
        <p className="text-gray-500 mt-2">
          Kirim pesan untuk kolaborasi, masukan fitur, atau bantuan seputar rekomendasi destinasi.
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

        {/* LEFT - KONTAK */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-semibold text-lg mb-2">
            Kontak Langsung
          </h2>

          <p className="text-gray-500 mb-6">
            Tim kami siap merespons pertanyaan Anda setiap hari untuk membantu pengalaman wisata yang lebih nyaman.
          </p>

          <div className="space-y-4 text-gray-600">
            <p>📧 weare@nyuventure.id</p>
            <p>📞 +62 812 3456 7890</p>
            <p>📍 Purwokerto, Banyumas</p>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <div className="bg-white p-6 rounded-2xl shadow">

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Masukkan nama"
              className="border p-3 rounded w-full"
            />
            <input
              type="email"
              placeholder="nama@gmail.com"
              className="border p-3 rounded w-full"
            />
          </div>

          <textarea
            placeholder="Tuliskan kebutuhan atau pertanyaan Anda"
            className="border p-3 rounded w-full h-32 mb-4"
          ></textarea>

          <div className="text-right">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Kirim
            </button>
          </div>

        </div>

      </div>

    </main>
  );
}