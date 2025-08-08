import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import TextInput from "./TextInput";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: ${({ theme }) => theme.bgLight};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  border-radius: 6px;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.bg};
  resize: vertical;
  min-height: 100px;
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:arpangupta1001@gmail.com?subject=Contact from ${name}&body=${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <TextInput
          label="Your Name"
          placeholder="Enter your name"
          value={name}
          handelChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label="Your Email"
          placeholder="Enter your email"
          value={email}
          handelChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <label style={{ color: "var(--text_primary)" }}>Message</label>
          <TextArea
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button text="Send Email" />
      </Form>
      <ContactInfo>
        <p style={{ color: "var(--text_secondary)" }}>
          Or you can reach out directly:
        </p>
        <Link href="mailto:arpangupta1001@gmail.com">
          arpangupta1001@gmail.com
        </Link>
        <p style={{ color: "var(--text_secondary)" }}>
          And find us on Instagram:
        </p>
        <Link href="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer">
          Instagram Handle
        </Link>
      </ContactInfo>
    </Container>
  );
};

export default Contact;