import React from 'react';
import { HeroSection, Container, HeroContent, HeroTitle, HeroSubtitle, PrimaryButton } from '../styles/styles';

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <HeroTitle>LiveCareer CV & Cover Letter Builder for UK jobseekers</HeroTitle>
          <HeroSubtitle>Create professional CVs and cover letters that get you hired faster</HeroSubtitle>
          <PrimaryButton>
            Build My CV Now
          </PrimaryButton>
        </HeroContent>
        <div>
          <img 
            src="https://via.placeholder.com/600x400" 
            alt="Happy professional" 
            style={{ 
              borderRadius: '0.5rem', 
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }} 
          />
        </div>
      </Container>
    </HeroSection>
  );
};
