'use client';

import React, { ChangeEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

import Link from 'next/link';

const Contact = () => {
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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailOptions = {
      from: contactForm.email,
      to: 'andrewkn09@gmail.com',
      message: `Name: ${contactForm.name}\nEmail: ${contactForm.email}\nMessage: ${contactForm.message}`,
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID ?? '',
      process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '',
      mailOptions,
      process.env.NEXT_PUBLIC_PUBLIC_KEY ?? ''
    );
  };

  return (
    <section>
      <h1 className="head_text">Contact</h1>
      <p>
        If you have any questions or want to work together, please fill out the
        form below or email me at{' '}
        <Link href="mailto:andrewkn09@gmail.com" className="font-bold">
          Andrewkn09@gmail.com
        </Link>
      </p>

      <form className="flex flex-col gap-y-1" onSubmit={onSubmit}>
        <input
          placeholder="Name"
          type="text"
          id="name"
          onChange={onFieldChange}
        />
        <input
          placeholder="Email"
          type="text"
          id="email"
          onChange={onFieldChange}
        />
        <textarea
          placeholder="Your Message"
          id="message"
          onChange={onFieldChange}
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
