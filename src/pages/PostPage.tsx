import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTags } from 'react-icons/fa';

// Import dummy data
import { allPosts, Post } from '../data/posts';

const PostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 2rem;
  color: var(--light-text);
  font-weight: 500;
  transition: color 0.3s ease;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    color: var(--primary-color);
  }
`;

const PostHeader = styled.div`
  margin-bottom: 2rem;
`;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PostMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--light-text);
  font-size: 0.9rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const CategoryTag = styled.span`
  display: inline-block;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const FeaturedImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 400px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const PostContent = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;
  
  h1, h2, h3, h4, h5, h6 {
    margin: 2rem 0 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  blockquote {
    border-left: 4px solid var(--primary-color);
    padding-left: 1rem;
    margin-left: 0;
    color: var(--light-text);
    font-style: italic;
  }
  
  pre {
    background-color: var(--secondary-color);
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    margin-bottom: 1.5rem;
  }
  
  code {
    font-family: monospace;
    background-color: var(--secondary-color);
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
  }
  
  img {
    max-width: 100%;
    border-radius: 4px;
    margin: 1.5rem 0;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin: 3rem 0;
`;

const Tag = styled.span`
  display: flex;
  align-items: center;
  background-color: var(--hover-color);
  color: var(--light-text);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  
  svg {
    margin-right: 0.4rem;
    font-size: 0.8rem;
  }
`;

const RelatedPosts = styled.div`
  margin-top: 4rem;
  
  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }
`;

const RelatedPostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const RelatedPostCard = styled.div`
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

const RelatedPostImage = styled.div<{ imageUrl: string }>`
  height: 150px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const RelatedPostContent = styled.div`
  padding: 1rem;
`;

const RelatedPostTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 4rem 0;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }
  
  p {
    margin-bottom: 2rem;
    color: var(--light-text);
  }
`;

// Function to convert markdown to HTML (very basic implementation)
const markdownToHtml = (markdown: string): string => {
  // This is a very simplified implementation
  // In a real app, you'd use a library like marked or react-markdown
  let html = markdown
    // Headers
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    // Lists (simplified)
    .replace(/^\- (.*$)/gm, '<li>$1</li>')
    // Code blocks
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Paragraphs (simplified)
    .replace(/^(?!<h|<li|<pre)(.*$)/gm, '<p>$1</p>');
  
  return html;
};

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Find the post with the matching id
    const foundPost = allPosts.find(p => p.id === id);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Find related posts with the same category or tags
      const related = allPosts
        .filter(p => p.id !== foundPost.id)
        .filter(p => 
          p.category === foundPost.category || 
          p.tags.some(tag => foundPost.tags.includes(tag))
        )
        .slice(0, 3);
      
      setRelatedPosts(related);
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!post) {
    return (
      <NotFound>
        <h2>Post Not Found</h2>
        <p>The post you're looking for doesn't exist or has been removed.</p>
        <BackButton to="/blog">
          <FaArrowLeft /> Back to Blog
        </BackButton>
      </NotFound>
    );
  }
  
  return (
    <PostContainer>
      <BackButton to="/blog">
        <FaArrowLeft /> Back to Blog
      </BackButton>
      
      <PostHeader>
        <CategoryTag>{post.category}</CategoryTag>
        <PostTitle>{post.title}</PostTitle>
        
        <PostMeta>
          <MetaItem>
            <FaCalendarAlt /> {post.date}
          </MetaItem>
          <MetaItem>
            <FaUser /> {post.author}
          </MetaItem>
        </PostMeta>
      </PostHeader>
      
      <FeaturedImage imageUrl={post.imageUrl} />
      
      <PostContent dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }} />
      
      <TagsContainer>
        {post.tags.map(tag => (
          <Tag key={tag}>
            <FaTags /> {tag}
          </Tag>
        ))}
      </TagsContainer>
      
      {relatedPosts.length > 0 && (
        <RelatedPosts>
          <h2>Related Posts</h2>
          
          <RelatedPostsGrid>
            {relatedPosts.map(relatedPost => (
              <RelatedPostCard key={relatedPost.id}>
                <Link to={`/blog/${relatedPost.id}`}>
                  <RelatedPostImage imageUrl={relatedPost.imageUrl} />
                  <RelatedPostContent>
                    <RelatedPostTitle>{relatedPost.title}</RelatedPostTitle>
                    <small>{relatedPost.date}</small>
                  </RelatedPostContent>
                </Link>
              </RelatedPostCard>
            ))}
          </RelatedPostsGrid>
        </RelatedPosts>
      )}
    </PostContainer>
  );
};

export default PostPage; 