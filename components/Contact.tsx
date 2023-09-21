'use client';

import React, { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

import { useSectionInView } from '@/lib/hooks';
import { NavLinkType } from '@/lib/data';
import { validateMailOptions } from '@/lib/helpers';

enum LOAD_STATE {
  IN_PROGRESS = 'IN_PROGRESS',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

const Contact = () => {
  const { ref } = useSectionInView(NavLinkType.CONTACT);

  const [formStatus, setFormStatus] = useState<LOAD_STATE | null>(null);
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

    if (formStatus !== null) setFormStatus(null);

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
      const errorMessage = validateMailOptions(contactForm);
      if (!!errorMessage) return toast.error(errorMessage);

      setFormStatus(LOAD_STATE.IN_PROGRESS);

      const sendEmail = () =>
        emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE_ID ?? '',
          process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '',
          mailOptions,
          process.env.NEXT_PUBLIC_PUBLIC_KEY ?? ''
        );

      await toast.promise(sendEmail(), {
        loading: 'Sending...',
        success: <b>Successfully sent!</b>,
        error: <b>Error sending email</b>,
      });

      setFormStatus(LOAD_STATE.SUCCESS);
    } catch (error) {
      console.log('Error sending email - ', error);

      const errorMessage =
        typeof error === 'string' ? error : 'Error sending email';

      toast.error(errorMessage);

      setFormStatus(LOAD_STATE.ERROR);
    }
  };

  return (
    <section id={NavLinkType.CONTACT} ref={ref}>
      <h1 className="head_text">Contact</h1>
      <p className="mb-4">
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
          type="email"
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
          className="bg-primary-orange mt-4 w-fit rounded-full bg-blue-950/80 px-8 py-2 text-white "
          disabled={
            formStatus === LOAD_STATE.IN_PROGRESS ||
            formStatus === LOAD_STATE.SUCCESS
          }
        >
          {formStatus === LOAD_STATE.SUCCESS
            ? 'Submitted'
            : formStatus === LOAD_STATE.IN_PROGRESS
            ? 'Submitting....'
            : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
