'use client'

import React, { useState } from 'react';
import {
    Heart,
    BookOpen,
    Building,
    Utensils,
    Shirt,
    CreditCard,
    Shield,
    Download,
    Phone,
    Mail,
    MapPin,
    CheckCircle,
    Star,
    Users,
    Target,
    PieChart,
    Lock,
    Gift,
    Calendar,
    ChevronRight,
    Award,
    Zap,
    Globe,
    FileText
} from 'lucide-react';

const DonationPage = () => {
    const [donationData, setDonationData] = useState({
        fullName: '',
        email: '',
        phone: '',
        donationType: '',
        amount: '',
        paymentMode: '',
        message: '',
        wantReceipt: false
    });
    const [selectedAmount, setSelectedAmount] = useState('');
    const [donationSuccess, setDonationSuccess] = useState(false);

    const donationOptions = [
        {
            type: 'zakat',
            title: 'Zakat',
            description: 'Fulfill your religious obligation',
            icon: '🕌',
            color: 'emerald'
        },
        {
            type: 'sadaqah',
            title: 'Sadaqah',
            description: 'Voluntary charity for Allah\'s pleasure',
            icon: '🤲',
            color: 'teal'
        },
        {
            type: 'fitrah',
            title: 'Zakat-ul-Fitr',
            description: 'Purify your fasting',
            icon: '🌙',
            color: 'yellow'
        },
        {
            type: 'general',
            title: 'General Donation',
            description: 'Support our overall mission',
            icon: '💝',
            color: 'emerald'
        },
        {
            type: 'sponsorship',
            title: 'Student Sponsorship',
            description: 'Sponsor a student\'s education',
            icon: '🎓',
            color: 'teal'
        },
        {
            type: 'monthly',
            title: 'Monthly Support',
            description: 'Ongoing monthly contribution',
            icon: '📅',
            color: 'yellow'
        }
    ];

    const impactAreas = [
        {
            icon: BookOpen,
            title: 'Sponsor Hifz Students',
            description: 'Help children memorize the Holy Quran',
            percentage: '40%',
            color: 'emerald'
        },
        {
            icon: Building,
            title: 'Masjid & Infrastructure',
            description: 'Maintain and expand our facilities',
            percentage: '25%',
            color: 'teal'
        },
        {
            icon: Utensils,
            title: 'Free Meals Program',
            description: 'Nutritious food for hostel students',
            percentage: '15%',
            color: 'yellow'
        },
        {
            icon: Users,
            title: 'Teacher Salaries',
            description: 'Support our dedicated educators',
            percentage: '10%',
            color: 'emerald'
        },
        {
            icon: FileText,
            title: 'Books & Materials',
            description: 'Islamic books and learning resources',
            percentage: '10%',
            color: 'teal'
        }
    ];

    const quickAmounts = ['₹500', '₹1000', '₹2500', '₹5000', '₹10000'];
    const paymentMethods = ['UPI', 'Debit/Credit Card', 'Net Banking', 'Wallet'];

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setDonationData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleAmountSelect = (amount) => {
        setSelectedAmount(amount);
        setDonationData(prev => ({ ...prev, amount: amount.replace('₹', '') }));
    };

    const handleDonate = () => {
        console.log('Donation submitted:', donationData);
        setDonationSuccess(true);
        setTimeout(() => setDonationSuccess(false), 8000);
    };

    const getColorClasses = (color) => {
        const colors = {
            emerald: 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100',
            teal: 'bg-teal-50 border-teal-200 text-teal-800 hover:bg-teal-100',
            yellow: 'bg-yellow-50 border-yellow-200 text-yellow-800 hover:bg-yellow-100'
        };
        return colors[color] || colors.emerald;
    };

    return (
        <div className="min-h-screen bg-gray-50">


            {/* Hero Section */}
            <section className="relative rounded-2xl mt-5 overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 text-white py-20">
                {/* Floating Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute top-32 right-20 w-24 h-24 bg-yellow-400/20 rounded-full blur-lg"></div>
                    <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-lg font-medium mb-8">
                            <Heart className="w-6 h-6 mr-3 text-red-300" />
                            Every Donation Makes a Difference
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Support Our
                            <span className="block text-yellow-300">Mission 🙏</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-12 text-emerald-100 max-w-4xl mx-auto leading-relaxed">
                            Your kindness can educate a child, feed a soul, and spread the light of Deen.
                            Join us in building a better tomorrow through Islamic education.
                        </p>

                        {/* Quick Donation Buttons */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {quickAmounts.map((amount, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAmountSelect(amount)}
                                    className={`px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${selectedAmount === amount
                                            ? 'bg-yellow-500 text-gray-900 shadow-lg'
                                            : 'bg-white/20 hover:bg-white/30 border border-white/30'
                                        }`}
                                >
                                    {amount}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Donate Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Why Your Donation Matters
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Every contribution helps us continue our mission of providing quality Islamic education
                            and support to those in need
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {impactAreas.map((area, index) => (
                            <div key={index} className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className={`p-4 rounded-xl ${area.color === 'emerald' ? 'bg-emerald-100' :
                                            area.color === 'teal' ? 'bg-teal-100' : 'bg-yellow-100'
                                        } group-hover:scale-110 transition-transform`}>
                                        <area.icon className={`w-8 h-8 ${area.color === 'emerald' ? 'text-emerald-600' :
                                                area.color === 'teal' ? 'text-teal-600' : 'text-yellow-600'
                                            }`} />
                                    </div>
                                    <div className={`ml-4 text-2xl font-bold ${area.color === 'emerald' ? 'text-emerald-600' :
                                            area.color === 'teal' ? 'text-teal-600' : 'text-yellow-600'
                                        }`}>
                                        {area.percentage}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                                <p className="text-gray-600">{area.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Donation Options */}
            <section className="py-16 bg-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Choose Your Impact
                        </h2>
                        <p className="text-xl text-gray-600">
                            Select the type of donation that resonates with your heart
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {donationOptions.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => setDonationData(prev => ({ ...prev, donationType: option.type }))}
                                className={`p-6 rounded-2xl border-2 transition-all text-left hover:shadow-lg transform hover:scale-105 ${donationData.donationType === option.type
                                        ? 'border-emerald-500 bg-emerald-50 shadow-lg'
                                        : 'border-gray-200 bg-white hover:border-emerald-300'
                                    }`}
                            >
                                <div className="flex items-center mb-4">
                                    <span className="text-4xl mr-4">{option.icon}</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">{option.title}</h3>
                                        <p className="text-gray-600 text-sm">{option.description}</p>
                                    </div>
                                </div>
                                {donationData.donationType === option.type && (
                                    <div className="flex items-center mt-4 text-emerald-600">
                                        <CheckCircle className="w-5 h-5 mr-2" />
                                        <span className="font-medium">Selected</span>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>



            {/* Donation Form */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Complete Your Donation
                        </h2>
                        <p className="text-xl text-gray-600">
                            Fill in your details for a secure donation process
                        </p>
                    </div>

                    {donationSuccess && (
                        <div className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-8">
                            <div className="flex items-center justify-center mb-4">
                                <CheckCircle className="w-12 h-12 text-green-600 mr-4" />
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-green-800 mb-2">🎉 JazakAllahu Khair!</h3>
                                    <p className="text-green-700 text-lg">
                                        Your donation was successful. May Allah bless you abundantly!
                                    </p>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors mr-4">
                                    <Download className="w-5 h-5 mr-2 inline" />
                                    Download Receipt
                                </button>
                                <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-6 rounded-lg transition-colors">
                                    Make Another Donation
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-3">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={donationData.fullName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-3">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={donationData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-3">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={donationData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-3">
                                    Donation Amount (₹) *
                                </label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={donationData.amount}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                                    placeholder="Enter amount"
                                    min="1"
                                />
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="mt-8">
                            <label className="block text-sm font-bold text-gray-700 mb-3">
                                Payment Method *
                            </label>
                            <div className="grid md:grid-cols-4 gap-4">
                                {paymentMethods.map((method, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setDonationData(prev => ({ ...prev, paymentMode: method }))}
                                        className={`p-4 rounded-xl border-2 transition-all text-center font-medium ${donationData.paymentMode === method
                                                ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                                                : 'border-gray-200 hover:border-emerald-300 text-gray-700'
                                            }`}
                                    >
                                        <CreditCard className="w-6 h-6 mx-auto mb-2" />
                                        {method}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <label className="block text-sm font-bold text-gray-700 mb-3">
                                Optional Message
                            </label>
                            <textarea
                                name="message"
                                value={donationData.message}
                                onChange={handleInputChange}
                                rows={4}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                                placeholder="Share your thoughts or dedication message..."
                            ></textarea>
                        </div>

                        <div className="mt-8 flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="wantReceipt"
                                    checked={donationData.wantReceipt}
                                    onChange={handleInputChange}
                                    className="w-5 h-5 text-emerald-600 border-2 border-gray-300 rounded focus:ring-emerald-500"
                                />
                                <span className="ml-3 text-gray-700 font-medium">I want a tax receipt</span>
                            </label>

                            <div className="flex items-center text-green-600">
                                <Lock className="w-5 h-5 mr-2" />
                                <span className="text-sm font-medium">100% Secure Payment</span>
                            </div>
                        </div>

                        <div className="mt-12">
                            <button
                                onClick={handleDonate}
                                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-5 px-8 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center text-lg shadow-lg"
                            >
                                <Heart className="w-6 h-6 mr-3" />
                                Donate Now - ₹{donationData.amount || '0'}
                                <ChevronRight className="w-6 h-6 ml-3" />
                            </button>
                        </div>

                        {/* Security Badges */}
                        <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
                            <div className="flex items-center">
                                <Shield className="w-4 h-4 mr-2" />
                                SSL Secured
                            </div>
                            <div className="flex items-center">
                                <Award className="w-4 h-4 mr-2" />
                                Registered NGO
                            </div>
                            <div className="flex items-center">
                                <FileText className="w-4 h-4 mr-2" />
                                80G Tax Benefit
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* Bank Transfer Info */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Bank Transfer Details
                        </h2>
                        <p className="text-lg text-gray-600">
                            Prefer direct bank transfer? Use the details below
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Bank Name:</h3>
                                <p className="text-gray-700 mb-4">State Bank of India</p>

                                <h3 className="font-bold text-gray-900 mb-2">Account Name:</h3>
                                <p className="text-gray-700 mb-4">Madarsa Al-Hikmah Trust</p>

                                <h3 className="font-bold text-gray-900 mb-2">Account Number:</h3>
                                <p className="text-gray-700 font-mono bg-gray-50 px-3 py-2 rounded">123456789012</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">IFSC Code:</h3>
                                <p className="text-gray-700 font-mono bg-gray-50 px-3 py-2 rounded mb-4">SBIN0001234</p>

                                <h3 className="font-bold text-gray-900 mb-2">Branch:</h3>
                                <p className="text-gray-700 mb-4">Patna Main Branch</p>

                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                    <p className="text-sm text-yellow-800">
                                        <strong>Note:</strong> After donation, please send screenshot to
                                        <strong> +91-9876543210</strong> for receipt generation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* Quranic Verse Section */}
            <section className="py-16 bg-gradient-to-r rounded-2xl from-emerald-600 to-teal-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-8">
                        <div className="inline-block p-4 bg-white/20 rounded-full mb-6">
                            <BookOpen className="w-8 h-8" />
                        </div>
                        <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
                            "The example of those who spend their wealth in the way of Allah is like a seed
                            of grain which grows seven spikes; in each spike is a hundred grains.
                            And Allah multiplies His reward for whom He wills."
                        </blockquote>
                        <cite className="text-xl text-emerald-200">— Quran 2:261</cite>
                    </div>

                    <div className="border-t border-white/30 pt-8">
                        <p className="text-xl mb-4">Prophet Muhammad ﷺ said:</p>
                        <p className="text-2xl font-medium italic">
                            "Charity does not decrease wealth, and Allah increases His servant in honor
                            when he forgives, and no one humbles himself for Allah's sake but Allah raises him."
                        </p>
                    </div>
                </div>
            </section>





            {/* Contact & Support */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Need Help with Donation?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our team is here to assist you with any questions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-emerald-50 rounded-2xl p-8 text-center">
                            <Phone className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
                            <p className="text-emerald-700 font-medium mb-2">+91-9876543210</p>
                            <p className="text-gray-600 text-sm">Mon-Fri, 9AM-6PM</p>
                        </div>

                        <div className="bg-teal-50 rounded-2xl p-8 text-center">
                            <Mail className="w-12 h-12 text-teal-600 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>
                            <p className="text-teal-700 font-medium mb-2">donations@madrasaalhikmah.edu</p>
                            <p className="text-gray-600 text-sm">Response within 24 hours</p>
                        </div>

                        <div className="bg-yellow-50 rounded-2xl p-8 text-center">
                            <MapPin className="w-12 h-12 text-yellow-600 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Office</h3>
                            <p className="text-yellow-700 font-medium mb-2">Madarsa Campus</p>
                            <p className="text-gray-600 text-sm">123 Education Street, Patna</p>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    );
};

export default DonationPage;