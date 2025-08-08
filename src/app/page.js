import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-white">
    {/* Navbar */}
    <header className="bg-green-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Madarsa An-Noor</h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#about" className="hover:underline">About</a>
          <a href="#courses" className="hover:underline">Courses</a>
          <a href="#admission" className="hover:underline">Admission</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>

    {/* Hero Section */}
    <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-center text-white h-[90vh] flex items-center justify-center">
      <div className="bg-black bg-opacity-50 p-6 rounded-md text-center max-w-xl">
        <h2 className="text-4xl font-bold mb-4">Welcome to Madarsa An-Noor</h2>
        <p className="text-lg">An Islamic Institution Dedicated to Quranic and Islamic Studies</p>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4">About Us</h3>
        <p className="text-lg leading-relaxed">Madarsa An-Noor has been providing quality Islamic education for over 15 years. We aim to nurture young minds with the knowledge of the Holy Quran, Hadith, and other Islamic sciences. Our environment is spiritual, peaceful, and focused on personal development through faith.</p>
      </div>
    </section>

    {/* Courses Section */}
    <section id="courses" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-12">Our Courses</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">Hifz-ul-Quran</h4>
            <p>Memorization of the entire Quran with tajweed under expert guidance.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">Aalim Course</h4>
            <p>In-depth study of Islamic jurisprudence, Hadith, Arabic, and more.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">Basic Urdu & Arabic</h4>
            <p>Language classes designed to understand and read Islamic texts confidently.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Admission Section */}
    <section id="admission" className="py-16 px-6 bg-green-50">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4">Admissions Open</h3>
        <p className="mb-6">Apply now for the upcoming academic session. Limited seats available.</p>
        <a href="/admission" className="inline-block bg-green-700 text-white px-6 py-3 rounded hover:bg-green-900">Apply Now</a>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
        <p className="mb-4">📍 Madarsa Street, Khalilabad, UP</p>
        <p className="mb-4">📞 +91-9876543210</p>
        <p className="mb-4">✉️ info@madarsaan-noor.org</p>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-green-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Madarsa An-Noor. All rights reserved.</p>
      </div>
    </footer>
  </div>
  );
}
