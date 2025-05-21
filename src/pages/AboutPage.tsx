import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutHeader = styled.div`
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

const AboutSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--primary-color);
  }
`;

const ProfileSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  background-image: url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80');
  background-size: cover;
  background-position: center;
  
  @media (max-width: 768px) {
    max-width: 200px;
    margin: 0 auto;
  }
`;

const ProfileInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.7;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled.div`
  background-color: var(--card-color);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
  
  h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);
  }
  
  p {
    color: var(--light-text);
  }
`;

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 10px;
    width: 2px;
    background-color: var(--border-color);
    
    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 40px;
  margin-bottom: 2.5rem;
  
  @media (min-width: 768px) {
    width: 50%;
    padding-left: 0;
    
    &:nth-child(even) {
      margin-left: 50%;
      padding-left: 2rem;
      padding-right: 0;
    }
    
    &:nth-child(odd) {
      padding-right: 2rem;
      text-align: right;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--primary-color);
    left: 3px;
    top: 6px;
    
    @media (min-width: 768px) {
      left: auto;
      right: -8px;
      
      &:nth-child(even) {
        right: auto;
        left: -8px;
      }
    }
  }
`;

const TimelineDate = styled.div`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`;

const TimelineContent = styled.div`
  background-color: var(--card-color);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  
  h3 {
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--light-text);
  }
`;

const AboutPage: React.FC = () => {
  return (
    <AboutContainer>
      <AboutHeader>
        <Title>About Me</Title>
        <Subtitle>
          Learn more about who I am, my experience, and my passion for writing and technology.
        </Subtitle>
      </AboutHeader>
      
      <ProfileSection>
        <ProfileImage />
        <ProfileInfo>
          <h3>Jane Smith</h3>
          <p>
            Hello! I'm Jane, a passionate writer, web developer, and lifelong learner based in San Francisco. 
            I created this blog to share my thoughts, experiences, and knowledge about technology, lifestyle, 
            travel, and personal development.
          </p>
          <p>
            When I'm not coding or writing, you can find me hiking in the mountains, experimenting with new 
            recipes in the kitchen, or curled up with a good book and a cup of coffee.
          </p>
          <SocialLinks>
            <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="mailto:hello@example.com">
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </ProfileInfo>
      </ProfileSection>
      
      <AboutSection>
        <SectionTitle>My Skills</SectionTitle>
        <SkillsGrid>
          <SkillCard>
            <h3>Web Development</h3>
            <p>Proficient in HTML, CSS, JavaScript, React, and TypeScript.</p>
          </SkillCard>
          <SkillCard>
            <h3>Content Creation</h3>
            <p>Writing engaging blog posts, tutorials, and technical documentation.</p>
          </SkillCard>
          <SkillCard>
            <h3>Digital Marketing</h3>
            <p>SEO, social media marketing, and content strategy.</p>
          </SkillCard>
          <SkillCard>
            <h3>Photography</h3>
            <p>Landscape and travel photography with Adobe Lightroom editing.</p>
          </SkillCard>
        </SkillsGrid>
      </AboutSection>
      
      <AboutSection>
        <SectionTitle>My Journey</SectionTitle>
        <Timeline>
          <TimelineItem>
            <TimelineDate>2023 - Present</TimelineDate>
            <TimelineContent>
              <h3>Senior Web Developer</h3>
              <p>Working with cutting-edge technologies to build responsive and accessible web applications.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDate>2020 - 2023</TimelineDate>
            <TimelineContent>
              <h3>Frontend Developer</h3>
              <p>Developed user interfaces for startups and established companies in the tech industry.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDate>2018 - 2020</TimelineDate>
            <TimelineContent>
              <h3>Content Creator & Writer</h3>
              <p>Created technical content and tutorials for various online platforms and publications.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDate>2014 - 2018</TimelineDate>
            <TimelineContent>
              <h3>Computer Science Degree</h3>
              <p>Studied Computer Science with a focus on web technologies and human-computer interaction.</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </AboutSection>
      
      <AboutSection>
        <SectionTitle>Why I Started This Blog</SectionTitle>
        <p>
          I believe in the power of sharing knowledge and experiences. This blog is my digital garden where 
          I document my learning journey, share useful insights, and connect with like-minded individuals 
          from around the world.
        </p>
        <p>
          My goal is to create content that is not only informative but also accessible and enjoyable to read. 
          Whether you're here to learn something new, find inspiration, or simply enjoy the stories I share, 
          I hope you find value in my writing.
        </p>
        <p>
          Thank you for taking the time to get to know me better. I'm excited to have you join me on this journey!
        </p>
      </AboutSection>
    </AboutContainer>
  );
};

export default AboutPage; 