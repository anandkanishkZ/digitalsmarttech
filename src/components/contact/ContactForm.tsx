import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from '../ui/Button';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await emailjs.sendForm(
        'service_pnfgdyg',          // ✅ Your EmailJS Service ID
        'template_0us0z8o',         // ✅ Your EmailJS Template ID
        form.current!,
        'yq-r8ZpmY0jVaYp-H'         // ✅ Your EmailJS Public Key
      );

      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our services or want to request a consultation? Fill out the
              form below and our team will get back to you as soon as possible.
            </p>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+977 9855079024"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="software">Software Solutions</option>
                    <option value="hardware">Hardware Sales & Services</option>
                    <option value="security">CCTV & Security Systems</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your needs or questions..."
                ></textarea>
              </div>

              <div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className={`w-full ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  onClick={() => {}}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>

                {formSubmitted && (
                  <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                    Thank you for your message! We'll be in touch soon.
                  </div>
                )}

                {error && (
                  <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                    {error}
                  </div>
                )}
              </div>
            </form>
          </div>

          <div>
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                    <p className="text-gray-600">
                      Ashok Watika -13<br />
                      Birgunj<br />
                      Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">
                      info@digitalsmarttech.com.np<br />
                      support@digitalsmarttech.com.np
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">
                      +977 9855079024<br />
                      +977 9806893123
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937585!2d-122.4194!3d37.77493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3c5fda4251%3A0xc86b0b8ad529d0e!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1644458519261!5m2!1sen!2s"
                  width="100%"
                  height="250"
                  className="rounded-lg border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
