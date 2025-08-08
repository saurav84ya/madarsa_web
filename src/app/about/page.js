// components/AboutUs.jsx
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-[#f9f9f6] text-gray-800">
      
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About Al-Noor Islamic Madrasa</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Dedicated to excellence in Islamic education, moral values, and modern learning.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h2>
          <p>
            To provide quality Islamic education blended with modern knowledge,
            nurturing students to become responsible and righteous members of society.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h2>
          <p>
            To be a leading institution recognized for academic excellence,
            spiritual growth, and community service.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Our History</h2>
          <p className="max-w-4xl mx-auto">
            Established in 1990, Al-Noor Islamic Madrasa has been serving the community
            for over three decades, focusing on authentic Islamic teachings and preparing
            students for the challenges of modern life.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Maulana Ahmed", role: "Founder", img: "/images/team1.jpg" },
            { name: "Fatima Khan", role: "Principal", img: "/images/team2.jpg" },
            { name: "Dr. Yusuf Ali", role: "Islamic Scholar", img: "/images/team3.jpg" },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden text-center p-6"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={200}
                height={200}
                className="mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-green-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-900 py-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Join Us in Our Mission</h2>
        <p className="mb-6">
          Be a part of a community that values education, faith, and service.
        </p>
        <button className="bg-white text-green-900 px-6 py-3 rounded-full font-semibold hover:bg-green-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
