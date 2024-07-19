import { render, screen } from '@testing-library/react';
import HeroSection from './index';

describe('HeroSection', () => {
   it('renders the hero section with correct text and button', () => {
      render(<HeroSection />);

      const heading = screen.getByRole('heading', {
         name: /Unlock Industry Insights: Get Essential Tips & Boilerplate Hacks/i,
      });
      expect(heading).toBeInTheDocument();

      const button = screen.getByRole('button', {
         name: /Read more/i,
      });
      expect(button).toBeInTheDocument();
   });
});
