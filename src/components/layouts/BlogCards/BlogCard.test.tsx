import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import blogCardImage from '../../../assets/images/blogCard1.png';
import BlogCard from '../BlogCards/index';

describe('BlogCard', () => {
   const props = {
      title: 'Sample Blog Title',
      date: 'July 18, 2024',
      readTime: '5',
      category: 'Business',
      image: blogCardImage,
      description: 'This is a sample description for the blog post.',
   };

   it('renders the BlogCard with correct information', () => {
      render(<BlogCard {...props} />);

      expect(screen.getByText(props.title)).toBeInTheDocument();
      expect(screen.getByText(props.date)).toBeInTheDocument();
      expect(screen.getByText(`${props.readTime} mins read`)).toBeInTheDocument();
      expect(screen.getByText(props.category)).toBeInTheDocument();
      expect(screen.getByText(props.description)).toBeInTheDocument();

      const image = screen.getByAltText(props.title) as HTMLImageElement;
      expect(image).toBeInTheDocument();
      expect(image.src).toContain('blogCard1.png'); // Adjust based on your setup
      expect(image.height).toBe(288); // Check the height
      expect(image.width).toBe(512); // Check the width
   });
});
