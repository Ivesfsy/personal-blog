import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 0;
`;

const NotFoundCode = styled.div`
  font-size: 8rem;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const NotFoundTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const NotFoundMessage = styled.p`
  max-width: 500px;
  margin: 0 auto 2rem;
  color: var(--light-text);
  font-size: 1.1rem;
`;

const NotFoundButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NotFoundButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const PrimaryButton = styled(NotFoundButton)`
  background-color: var(--primary-color);
  color: white;
  
  &:hover {
    background-color: #5a3485;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(107, 63, 160, 0.3);
  }
`;

const SecondaryButton = styled(NotFoundButton)`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  
  &:hover {
    background-color: var(--hover-color);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const NotFoundIllustration = styled.div`
  max-width: 400px;
  margin-bottom: 2rem;
  
  img {
    width: 100%;
    height: auto;
  }
`;

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundIllustration>
        <img 
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" 
          alt="404 Illustration"
        />
      </NotFoundIllustration>
      
      <NotFoundCode>404</NotFoundCode>
      <NotFoundTitle>Page Not Found</NotFoundTitle>
      <NotFoundMessage>
        The page you're looking for doesn't exist or has been moved.
        It might be due to a typo in the URL or the page may have been deleted.
      </NotFoundMessage>
      
      <NotFoundButtons>
        <PrimaryButton to="/">
          <FaHome /> Go to Homepage
        </PrimaryButton>
        <SecondaryButton to="/blog">
          <FaSearch /> Explore the Blog
        </SecondaryButton>
      </NotFoundButtons>
    </NotFoundContainer>
  );
};

export default NotFoundPage; 