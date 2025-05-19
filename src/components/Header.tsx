import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: var(--background-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const NavLinks = styled.nav<{ isOpen: boolean }>`
  display: flex;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background-color: var(--background-color);
    flex-direction: column;
    padding: 2rem;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
`;

const NavItem = styled.div<{ active: boolean }>`
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
  
  a {
    color: ${({ active }) => active ? 'var(--primary-color)' : 'var(--text-color)'};
    font-weight: ${({ active }) => active ? '600' : '400'};
    position: relative;
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--primary-color);
    }
    
    &::after {
      content: '';
      position: absolute;
      width: ${({ active }) => active ? '100%' : '0'};
      height: 2px;
      bottom: -5px;
      left: 0;
      background-color: var(--primary-color);
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <HeaderContainer>
      <div className="container">
        <NavContainer>
          <Logo to="/">My Blog</Logo>
          
          <MenuButton onClick={toggleMenu}>
            <FaBars />
          </MenuButton>
          
          <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
          
          <NavLinks isOpen={isMenuOpen}>
            <CloseButton onClick={closeMenu}>
              <FaTimes />
            </CloseButton>
            
            <NavItem active={location.pathname === '/'}>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </NavItem>
            
            <NavItem active={location.pathname === '/blog' || location.pathname.includes('/blog/')}>
              <Link to="/blog" onClick={closeMenu}>Blog</Link>
            </NavItem>
            
            <NavItem active={location.pathname === '/about'}>
              <Link to="/about" onClick={closeMenu}>About</Link>
            </NavItem>
            
            <NavItem active={location.pathname === '/contact'}>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </NavItem>
          </NavLinks>
        </NavContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header; 