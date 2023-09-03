'use client';

import React, { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

import { useSectionInView } from '@/lib/hooks';
import { NavLinkType } from '@/lib/data';

const Contact = () => {
  const { ref } = useSectionInView(NavLinkType.CONTACT);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value: (typeof contactForm)[keyof typeof contactForm] =
      event.target.value;

    setContactForm((prevMessage) => ({
      ...prevMessage,
      [event.target.id]: value,
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailOptions = {
      from: contactForm.email,
      to: 'andrewkn09@gmail.com',
      message: `Name: ${contactForm.name}\nEmail: ${contactForm.email}\nMessage: ${contactForm.message}`,
    };

    try {
      emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '',
        mailOptions,
        process.env.NEXT_PUBLIC_PUBLIC_KEY ?? ''
      );
    } catch (error) {}
  };

  return (
    <section id={NavLinkType.CONTACT} ref={ref}>
      <h1 className="head_text">Contact</h1>
      <p>
        If you have any questions or want to work together, please fill out the
        form below or email me at{' '}
        <Link href="mailto:andrewkn09@gmail.com" className="link-indicator">
          Andrewkn09@gmail.com
        </Link>
      </p>

      <form className="flex flex-col gap-y-1" onSubmit={onSubmit}>
        <input
          className="form_input"
          placeholder="Your name"
          type="text"
          id="name"
          onChange={onFieldChange}
        />
        <input
          className="form_input"
          placeholder="Your email"
          type="text"
          id="email"
          onChange={onFieldChange}
        />
        <textarea
          className="form_textarea"
          placeholder="Your message"
          id="message"
          onChange={onFieldChange}
        />

        <button
          type="submit"
          className="bg-primary-orange mt-2 w-fit rounded-full bg-blue-950/80 px-8 py-2 text-white"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
