import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Import dummy data for featured posts
import { featuredPosts } from '../data/posts';

const HeroSection = styled.section`
  padding: 4rem 0;
  text-align: center;
  background-color: var(--background-color);
  border-radius: 10px;
  margin-bottom: 3rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  color: var(--light-text);
`;

const CallToAction = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: var(--primary-color);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(107, 63, 160, 0.4);
  }
  
  svg {
    margin-left: 8px;
  }
`;

const FeaturedPostsSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 3px;
    background-color: var(--primary-color);
  }
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const PostCard = styled.div`
  background-color: var(--card-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
`;

const PostImage = styled.div<{ imageUrl: string }>`
  height: 200px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const PostContent = styled.div`
  padding: 1.5rem;
`;

const PostCategory = styled.span`
  display: inline-block;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const PostTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const PostMeta = styled.div`
  display: flex;
  color: var(--light-text);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const PostDate = styled.span`
  margin-right: 1rem;
`;

const PostAuthor = styled.span``;

const ViewAllLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;
  font-weight: 500;
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;

const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  padding: 2rem;
  
  h2 {
    margin-bottom: 1.5rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const AboutImage = styled.div`
  background-image: url('/images/about.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  min-height: 300px;
  
  @media (max-width: 768px) {
    height: 300px;
    order: -1;
  }
`;

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroTitle>Welcome to My Personal Blog</HeroTitle>
        <HeroSubtitle>
          A place where I share my thoughts, ideas, and experiences about life, technology, and everything in between.
        </HeroSubtitle>
        <CallToAction to="/blog">
          Explore All Posts <FaArrowRight />
        </CallToAction>
      </HeroSection>
      
      <FeaturedPostsSection>
        <SectionTitle>Featured Posts</SectionTitle>
        
        <PostGrid>
          {featuredPosts.map(post => (
            <PostCard key={post.id}>
              <Link to={`/blog/${post.id}`}>
                <PostImage imageUrl={post.imageUrl} />
              </Link>
              <PostContent>
                <PostCategory>{post.category}</PostCategory>
                <Link to={`/blog/${post.id}`}>
                  <PostTitle>{post.title}</PostTitle>
                </Link>
                <PostMeta>
                  <PostDate>{post.date}</PostDate>
                  <PostAuthor>by {post.author}</PostAuthor>
                </PostMeta>
                <p>{post.excerpt}</p>
              </PostContent>
            </PostCard>
          ))}
        </PostGrid>
        
        <ViewAllLink to="/blog">
          View All Posts <FaArrowRight />
        </ViewAllLink>
      </FeaturedPostsSection>
      
      <AboutSection>
        <AboutContent>
          <SectionTitle>About Me</SectionTitle>
          <p>
            Hello! I'm a passionate writer, developer, and creative thinker. This blog is my digital garden where I share my thoughts, learnings, and experiences.
          </p>
          <p>
            Whether it's technology, personal development, travel adventures, or simply random musings, you'll find a bit of everything here.
          </p>
          <CallToAction to="/about">
            Learn More <FaArrowRight />
          </CallToAction>
        </AboutContent>
        <AboutImage />
      </AboutSection>
    </>
  );
};

export default HomePage; 