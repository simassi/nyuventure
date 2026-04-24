"use client";

import Image from "next/image";
import { Map, Navigation, Hotel, Car, Utensils, Ticket } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {

  const features = [
    {
      title: "Destinasi Terkurasi",
      desc: "Jelajahi tempat wisata favorit dengan detail tiket dan rekomendasi aktivitas.",
      icon: <Map className="text-green-600" />
    },
    {
      title: "Dekat Anda",
      desc: "Menampilkan wisata dan kuliner terdekat dari lokasi Anda.",
      icon: <Navigation className="text-green-600" />
    },
    {
      title: "Penginapan Nyaman",
      desc: "Bandingkan pilihan penginapan dengan harga transparan.",
      icon: <Hotel className="text-green-600" />
    },
    {
      title: "Transportasi Praktis",
      desc: "Temukan rute tercepat dan estimasi waktu perjalanan.",
      icon: <Car className="text-green-600" />
    },
    {
      title: "Kuliner Lokal",
      desc: "Cari makanan khas Banyumas berdasarkan rating.",
      icon: <Utensils className="text-green-600" />
    },
    {
      title: "Tiket Online",
      desc: "Pesan tiket langsung tanpa antre.",
      icon: <Ticket className="text-green-600" />
    }
  ];

  return (
    <main className="bg-white">

      {/* HERO */}
            <section className="relative h-[90vh] flex items-center px-6 md:px-20">
        <img
          src="/images/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* <Image
          src="/images/hero.png"
          alt="Hero"
          fill
          className="object-cover"
        /> */}

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Jelajahi Banyumas tanpa ribet
          </h1>

          <p className="text-gray-200 mb-6">
            Temukan destinasi, kuliner, penginapan, dan transportasi dalam satu platform.
          </p>

          <div className="flex gap-4">
            <button className="bg-green-500 px-6 py-3 rounded-lg">
              Mulai
            </button>

            <a href="/contact" className="border px-6 py-3 rounded-lg">
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* FITUR */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 text-center">

        <h2 className="text-3xl font-bold mb-10">Fitur Utama</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow text-left"
            >
              <div className="mb-3">{item.icon}</div>

              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* MAP */}
      <section className="py-20 px-6 md:px-20 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Lokasi Wisata Banyumas
        </h2>

        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps?q=Banyumas&output=embed"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>

      {/* DATA */}
      <section className="py-20 bg-gray-50 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Data & Capaian
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-4xl font-bold text-green-600">120+</h3>
            <p className="text-gray-500">Destinasi</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-600">50+</h3>
            <p className="text-gray-500">Kuliner</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-600">1000+</h3>
            <p className="text-gray-500">Pengguna</p>
          </div>

        </div>
      </section>

    </main>
  );
}