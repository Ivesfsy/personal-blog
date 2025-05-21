import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--light-text);
  max-width: 600px;
  margin: 0 auto;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--secondary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: var(--primary-color);
  font-size: 1.2rem;
`;

const ContactDetails = styled.div`
  h3 {
    margin-bottom: 0.5rem;
  }
  
  p, a {
    color: var(--light-text);
    line-height: 1.6;
  }
  
  a:hover {
    color: var(--primary-color);
  }
`;

const ContactForm = styled.form`
  background-color: var(--card-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 3px 15px rgba(0,0,0,0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(107, 63, 160, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(107, 63, 160, 0.2);
  }
`;

const FormButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #5a3485;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: #bbb;
    cursor: not-allowed;
    transform: none;
  }
  
  svg {
    margin-right: 0.5rem;
  }
`;

const FormMessage = styled.div<{ success: boolean }>`
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 4px;
  background-color: ${props => props.success ? '#e6f7e6' : '#ffebeb'};
  color: ${props => props.success ? '#2e7d32' : '#c62828'};
  font-size: 0.9rem;
`;

const MapContainer = styled.div`
  margin-top: 4rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 15px rgba(0,0,0,0.05);
  
  iframe {
    width: 100%;
    height: 400px;
    border: none;
  }
`;

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // Simulate form submission
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        type: 'success',
        message: 'Your message has been sent! I will get back to you soon.'
      });
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: null, message: '' });
      }, 5000);
    }, 1500);
  };
  
  return (
    <ContactContainer>
      <ContactHeader>
        <Title>Get In Touch</Title>
        <Subtitle>
          Have a question, suggestion, or just want to say hello? I'd love to hear from you!
        </Subtitle>
      </ContactHeader>
      
      <ContactContent>
        <ContactInfo>
          <ContactInfoItem>
            <IconContainer>
              <FaEnvelope />
            </IconContainer>
            <ContactDetails>
              <h3>Email</h3>
              <p><a href="mailto:hello@example.com">hello@example.com</a></p>
            </ContactDetails>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            <ContactDetails>
              <h3>Phone</h3>
              <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
            </ContactDetails>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <IconContainer>
              <FaMapMarkerAlt />
            </IconContainer>
            <ContactDetails>
              <h3>Location</h3>
              <p>San Francisco, California</p>
              <p>United States</p>
            </ContactDetails>
          </ContactInfoItem>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="name">Name *</FormLabel>
            <FormInput 
              type="text" 
              id="name" 
              name="name" 
              value={formState.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email *</FormLabel>
            <FormInput 
              type="email" 
              id="email" 
              name="email" 
              value={formState.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput 
              type="text" 
              id="subject" 
              name="subject" 
              value={formState.subject}
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="message">Message *</FormLabel>
            <FormTextarea 
              id="message" 
              name="message" 
              value={formState.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormButton type="submit" disabled={isSubmitting}>
            <FaPaperPlane /> {isSubmitting ? 'Sending...' : 'Send Message'}
          </FormButton>
          
          {formStatus.type && (
            <FormMessage success={formStatus.type === 'success'}>
              {formStatus.message}
            </FormMessage>
          )}
        </ContactForm>
      </ContactContent>
      
      <MapContainer>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017940301!3d37.75781499404099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1623015074778!5m2!1sen!2s" 
          allowFullScreen 
          loading="lazy"
          title="Map of San Francisco"
        />
      </MapContainer>
    </ContactContainer>
  );
};

export default ContactPage; 