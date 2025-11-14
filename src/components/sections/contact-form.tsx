"use client";

import React, { useState } from 'react';
import { Input } from '@/src/components/ui/input';
import { Textarea } from '@/src/components/ui/textarea';
import { Button } from '@/src/components/ui/button';
import { Label } from '@/src/components/ui/label';
import { email } from 'better-auth';

function Toast({ message, open }: { message: string; open: boolean }) {
  if (!open) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 rounded-md bg-slate-900 text-white px-4 py-2 shadow-md">
      {message}
    </div>
  );
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open: false, message: '' });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const phoneNumber = "5492215937093";

    const text = `Hola! Te contacto desde tu portafolio.
        Nombre: ${formData.get('name')}
        Email: ${formData.get('email')}
        Mensaje: ${formData.get('message')}
        ¡Espero tu respuesta!`
      ;

    try {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

      setToast({ open: true, message: 'Message sent successfully!' });
      window.open(url, "_blank");

    } catch {
      setToast({ open: true, message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
      window.setTimeout(() => setToast({ open: false, message: '' }), 5000);
    }
  }

  // Simple controlled form submit via fetch + tiny toast
  return (
    <>
      <form action="https://formspree.io/f/myzynpbr" method="POST" className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" type="text" placeholder="Full name" required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows={6} placeholder="" required />
        </div>

        {/* recommended Formspree fields */}
        <input type="hidden" name="_subject" value="New contact from website" />
        <div className="flex items-center gap-3">
          <Button
            className="
    bg-primary/80 dark:bg-cyan-300/80 
    transition-all duration-300 
    hover:bg-primary dark:hover:bg-cyan-300 
    hover:shadow-lg hover:shadow-primary/30 
    hover:-translate-y-0.5
  "
            type="submit"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send message'}
          </Button>
        </div>
      </form>

      <Toast open={toast.open} message={toast.message} />
    </>
  );
}
