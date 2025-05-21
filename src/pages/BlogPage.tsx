import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaTags } from 'react-icons/fa';

// Import dummy post data
import { allPosts, Post } from '../data/posts';

const BlogContainer = styled.div`
  width: 100%;
`;

const BlogHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const BlogDescription = styled.p`
  font-size: 1.1rem;
  color: var(--light-text);
  max-width: 700px;
  margin: 0 auto;
`;

const SearchContainer = styled.div`
  display: flex;
  max-width: 500px;
  margin: 2rem auto;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 1px solid var(--border-color);
  border-radius: 30px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(107, 63, 160, 0.2);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--light-text);
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const Filter = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'var(--secondary-color)'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : 'var(--hover-color)'};
  }
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
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

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  display: flex;
  align-items: center;
  background-color: var(--hover-color);
  color: var(--light-text);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  font-size: 0.75rem;
  
  svg {
    margin-right: 0.3rem;
    font-size: 0.7rem;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--light-text);
  
  h3 {
    margin-bottom: 1rem;
  }
`;

// Extract all categories and tags from posts
const allCategories = Array.from(new Set(allPosts.map(post => post.category)));
const allTags = Array.from(new Set(allPosts.flatMap(post => post.tags)));

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(allPosts);
  const location = useLocation();
  
  useEffect(() => {
    // Get category from URL query params if any
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [location]);
  
  useEffect(() => {
    // Filter posts based on search term and category
    let filtered = allPosts;
    
    if (activeCategory) {
      filtered = filtered.filter(post => 
        post.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }
    
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredPosts(filtered);
  }, [searchTerm, activeCategory]);
  
  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
  };
  
  return (
    <BlogContainer>
      <BlogHeader>
        <BlogTitle>The Blog</BlogTitle>
        <BlogDescription>
          Explore articles on technology, lifestyle, travel, and more. Find inspiration, tips, and insights.
        </BlogDescription>
        
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput 
            type="text" 
            placeholder="Search articles..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        
        <FilterContainer>
          <Filter 
            active={activeCategory === null} 
            onClick={() => handleCategoryChange(null)}
          >
            All
          </Filter>
          {allCategories.map(category => (
            <Filter 
              key={category}
              active={activeCategory === category}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Filter>
          ))}
        </FilterContainer>
      </BlogHeader>
      
      {filteredPosts.length > 0 ? (
        <PostsGrid>
          {filteredPosts.map(post => (
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
                
                <TagsContainer>
                  {post.tags.map(tag => (
                    <Tag key={tag}>
                      <FaTags /> {tag}
                    </Tag>
                  ))}
                </TagsContainer>
              </PostContent>
            </PostCard>
          ))}
        </PostsGrid>
      ) : (
        <NoResults>
          <h3>No posts found</h3>
          <p>Try adjusting your search or filter to find what you're looking for.</p>
        </NoResults>
      )}
    </BlogContainer>
  );
};

export default BlogPage; 