import React, { useState, useEffect } from "react";
import { User, Mail, MessageSquare, Send, Github, Twitter } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Sending Message...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      await e.target.submit();

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thanks for reaching out — I’ll get back to you soon.",
        confirmButtonColor: "#6366f1",
        timer: 2000,
        timerProgressBar: true,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#6366f1",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="px-[5%] lg:px-[10%] pb-28">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Contact Me
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Every great conversation begins with a single thought. Let’s talk.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* LEFT — SOCIAL LINKS */}
        <div data-aos="fade-right">
          <h3 className="text-xl font-semibold text-white mb-6">
            Reach me directly
          </h3>

          <div className="space-y-4">
            <SocialItem
              label="Email"
              value="imanishita17@gmail.com"
              icon={Mail}
            />
            <SocialItem
              label="GitHub"
              value="github.com/imanishita"
              icon={Github}
            />
            <SocialItem
              label="LeetCode"
              value="leetcode.com/imanishita"
              icon={SiLeetcode}
            />
            <SocialItem
              label="Twitter"
              value="@imanishita"
              icon={Twitter}
            />
          </div>
        </div>

        {/* RIGHT — CONTACT FORM */}
        <div
          data-aos="fade-left"
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-2">
            Get in Touch
          </h3>
          <p className="text-gray-400 mb-6">
            Say hey anytime — let’s build something meaningful.
          </p>

          <form
            action="https://formsubmit.co/imanishita17@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* FormSubmit config */}
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <Input
              icon={User}
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
            />

            <Input
              icon={Mail}
              placeholder="Your Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />

            <Textarea
              icon={MessageSquare}
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-semibold transition hover:scale-[1.02] disabled:opacity-50"
            >
              <span className="flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/* ---------------- SMALL COMPONENTS ---------------- */

const SocialItem = ({ label, value, icon: Icon }) => (
  <div
    className="
      flex items-center gap-4
      bg-white/5 border border-white/10
      rounded-xl px-5 py-4
      hover:bg-white/10 transition
    "
  >
    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
      <Icon className="w-5 h-5 text-gray-300" />
    </div>

    <div className="flex flex-col">
      <span className="text-sm text-gray-300">{label}</span>
      <span className="text-xs text-gray-400">{value}</span>
    </div>
  </div>
);

const Input = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <Icon className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
    <input
      {...props}
      required
      className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/40"
    />
  </div>
);

const Textarea = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <Icon className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
    <textarea
      {...props}
      required
      rows={5}
      className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/40"
    />
  </div>
);

export default ContactPage;
