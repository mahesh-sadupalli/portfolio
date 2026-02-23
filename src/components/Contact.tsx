import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import ScrollReveal from './ScrollReveal';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      const subject = `Portfolio Contact from ${name}`;
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
      window.location.href = `mailto:mahesh.sadupalli@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      fontFamily: 'var(--font-body)',
      borderRadius: '12px',
      backgroundColor: 'var(--card-bg)',
      '& fieldset': { borderColor: 'var(--border)' },
      '&:hover fieldset': { borderColor: 'var(--accent)' },
      '&.Mui-focused fieldset': { borderColor: 'var(--accent)', borderWidth: '1.5px' },
    },
    '& .MuiInputLabel-root': {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-tertiary)',
      '&.Mui-focused': { color: 'var(--accent)' },
    },
    '& .MuiOutlinedInput-input': {
      color: 'var(--text-primary)',
    },
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-grid">
          <ScrollReveal direction="left" className="contact-info">
            <span className="section-label">Say Hello</span>
            <h1 className="contact-heading">Let's work<br /><em>together</em></h1>
            <p className="contact-description">Interested in collaboration on AI/ML research or have a project in mind? I'm open to research opportunities, consulting projects, and technical discussions.</p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="contact-detail-label">Email</span>
                <a href="mailto:mahesh.sadupalli@gmail.com">mahesh.sadupalli@gmail.com</a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-label">Location</span>
                <span>Berlin, Germany</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200} className="contact-form-wrapper">
            <div className="contact-form-card">
              <Box
                ref={form}
                component="form"
                noValidate
                autoComplete="off"
                className='contact-form'
              >
                <div className='form-flex'>
                  <TextField
                    required
                    id="outlined-required"
                    label="Your Name"
                    placeholder="What's your name?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={nameError}
                    helperText={nameError ? "Please enter your name" : ""}
                    sx={inputSx}
                  />
                  <TextField
                    required
                    id="outlined-required-email"
                    label="Email / Phone"
                    placeholder="How can I reach you?"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError}
                    helperText={emailError ? "Please enter your email or phone number" : ""}
                    sx={inputSx}
                  />
                </div>
                <TextField
                  required
                  id="outlined-multiline-static"
                  label="Message"
                  placeholder="Tell me about your project or inquiry..."
                  multiline
                  rows={6}
                  className="body-form"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  error={messageError}
                  helperText={messageError ? "Please enter your message" : ""}
                  sx={inputSx}
                />
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={sendEmail}
                  disableElevation
                  sx={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textTransform: 'none',
                    backgroundColor: 'var(--accent)',
                    color: '#fff',
                    padding: '12px 32px',
                    borderRadius: '12px',
                    letterSpacing: '0.01em',
                    transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                    '&:hover': {
                      backgroundColor: 'var(--accent-hover)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(74, 124, 255, 0.25)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

export default Contact;