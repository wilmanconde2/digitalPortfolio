import { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const useEmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!email || !message) {
      setError('Email and message are required!');
      return;
    }

    const templateParams = {
      name,
      email,
      message,
    };

    try {
      const response = await emailjs.send('service_kl1ozal', 'template_lsi6s7d', templateParams, 'n94QxfC16uQHXAfC6');

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Message sent successfully',
        showConfirmButton: false,
        timer: 1500,
        background: '#0A5984',
        color: '#eee',
      });

      reset();
      
    } catch (error) {
      console.error('Failed to send the message', error);
    }
  };

  const reset = () => {
    setEmail('');
    setMessage('');
    setName('');
    setError('');
  };

  return {
    email,
    setEmail,
    message,
    setMessage,
    name,
    setName,
    error,
    sendEmail,
  };
};

export default useEmailForm;
