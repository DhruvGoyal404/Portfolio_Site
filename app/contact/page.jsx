"use client"
// //<Select name="service" onValueChange={(value) => setFormData({ ...formData, service: value })} required>
// <SelectTrigger className="w-full">
// <SelectValue placeholder="Select a service" />
// </SelectTrigger>
// <SelectContent>
// <SelectGroup>
//   <SelectLabel>Select a service</SelectLabel>
//   <SelectItem value="web-development">Web Development</SelectItem>
//   <SelectItem value="programming">Programming</SelectItem>
//   <SelectItem value="ai-ml">AI/ML</SelectItem>
//   <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
// </SelectGroup>
// </SelectContent>
// </Select>

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "8858880050" },
  { icon: <FaEnvelope />, title: "Email", description: "dhruv621999goyal@gmail.com", link: "mailto:dhruv621999goyal@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Lucknow, UP, India.", link: "https://www.google.com/maps/place/Lucknow,+Uttar+Pradesh/@26.8489028,80.7776995,11z/data=!3m1!4b1!4m6!3m5!1s0x399bfd991f32b16b:0x93ccba8909978be7!8m2!3d26.8466937!4d80.946166!16zL20vMDIydHE0?entry=ttu" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Invalid Phone Number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully');
        // Handle success here
      } else {
        toast.error('Failed to send message');
        // Handle failure here
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Error sending message');
    }
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-6">
      <ToastContainer />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Want to contact me? Kindly fill the following form!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} required />
                <Input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} required />
                <Input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required />
                <div className="relative">
                  <Input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                  {errors.phone && <p className="text-red-500 text-xs absolute -bottom-6">{errors.phone}</p>}
                </div>
              </div>
              <Select name="service" onValueChange={(value) => setFormData({ ...formData, service: value })} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="programming">Programming</SelectItem>
                    <SelectItem value="ai-ml">AI/ML</SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} required />
              <Button type="submit" variant="outline" className="text-white border-white/40 hover:bg-accent hover:border-accent">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="xl:w-[30%] flex flex-col gap-6">
            <h3 className="text-4xl text-accent">Contact information.</h3>
            <p className="text-white/60">
              Please reach out to me through the following contact information.
            </p>
            {info.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="text-accent text-2xl">{item.icon}</div>
                <div>
                  <h4 className="text-lg">{item.title}</h4>
                  {item.link ? (
                    <a href={item.link} className="text-white/60 hover:text-accent transition">{item.description}</a>
                  ) : (
                    <p className="text-white/60">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

