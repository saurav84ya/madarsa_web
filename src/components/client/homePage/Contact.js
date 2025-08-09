



import { Mail, MapPin, Phone } from 'lucide-react'
import ContactBox from './ContactBox'


export default function Contact() {




    return (
        <section className="py-20" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center ">


                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Get in touch with us for admissions, inquiries, or to schedule a visit.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-emerald-600 mt-1 mr-4" />
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                                    <p className="text-gray-600">123 Education Street, Islamic Quarter<br />City, State 12345</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="w-6 h-6 text-emerald-600 mt-1 mr-4" />
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-emerald-600 mt-1 mr-4" />
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                                    <p className="text-gray-600">info@ Madrasah Islamia Arabia Quran Memorization</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ContactBox />


                </div>
            </div>
        </section>
    )
}
