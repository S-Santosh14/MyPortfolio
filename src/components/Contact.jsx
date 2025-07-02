import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram
} from 'lucide-react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/myzjvypb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "santoshsiddamsetti0507@gmail.com",
      link: "mailto:santoshsiddamsetti0507@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 9014288517",
      link: "tel:+919014288517"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Hyderabad, Telangana",
      link: "https://maps.app.goo.gl/bVHqJpzaBKYHYdoT9"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/S-Santosh14",
      icon: <Github className="h-6 w-6" />,
      color: "hover:text-slate-900"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/siddamsetti-santosh-048a0a255/",
      icon: <Linkedin className="h-6 w-6" />,
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      url: "https://x.com/s_santosh_14",
      icon: <Twitter className="h-6 w-6" />,
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/s.santosh_007/",
      icon: <Instagram className="h-6 w-6" />,
      color: "hover:text-pink-600"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6 font-medium">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">
              Let's Start a{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Conversation
              </span>
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 hover:border-indigo-200 transform hover:-translate-y-1"
                >
                  <div className="text-indigo-600 mr-6 group-hover:scale-110 transition-transform duration-300 bg-indigo-50 p-3 rounded-xl">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 text-lg">{info.title}</h4>
                    <p className="text-slate-600 font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-slate-600 ${social.color} border border-slate-200/50 hover:border-indigo-200 transform hover:-translate-y-1`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 p-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl text-white shadow-xl">
              <h4 className="text-xl font-bold mb-3">Ready to Work Together?</h4>
              <p className="text-indigo-100 mb-6 font-medium">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              <a href="/resume.pdf" download>
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-2xl font-bold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Download Resume
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-10 border border-slate-200/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 font-medium"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 font-medium"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 font-medium"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none font-medium"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-xl"
              >
                <Send className="h-6 w-6 mr-3" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
