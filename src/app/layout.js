import "./globals.css";

export const metadata = {
  title: "NyuVenture",
  description: "Platform wisata all-in-one",
};


export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-800">

        {/* Navbar */}
        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">
            NyuVenture
          </h1>

          <div className="space-x-6">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="bg-white text-center py-6 mt-10 border-t">
          <p className="text-gray-500 text-sm">
            © 2026 NyuVenture. All rights reserved.
          </p>
        </footer>

      </body>
    </html>
  );
}