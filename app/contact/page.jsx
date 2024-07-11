"use client"
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
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Lucknow, UP, India.", link: "https://t.ly/Y20xX" },
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

    if (!formData.service) {
      newErrors.service = "Please select a service";
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
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        toast.error('Failed to send message');
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
              {errors.service && <span className="text-red-500">{errors.service}</span>}
              <Textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="h-40" // Adjust the height as needed, e.g., h-40, h-48, etc.
              />
              <Button type="submit" variant="outline" className="text-white border-white/40 hover:bg-accent hover:border-accent">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          {/* <div className="xl:w-[30%] flex flex-col gap-10 ml-10 pl-20">
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
          </div> */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex gap-6 items-center">
                  <div className="text-accent rounded-md flex items-center justify-center w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition">{item.description}</a>
                    ) : (
                      <p className="text-white/60">{item.description}</p>
                    )}
            </div>
      </li>
    ))}
  </ul>
</div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
