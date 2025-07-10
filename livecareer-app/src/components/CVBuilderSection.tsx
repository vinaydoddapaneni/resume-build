import React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../styles/styles';
import { Section, Container, SectionTitle, SectionSubtitle } from '../styles/styles';

const features = [
  'Professional templates designed by experts',
  'Guided writing with helpful tips',
  'Download in multiple formats (PDF, DOCX)'
];

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
    padding-right: 1.5rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  
  @media (min-width: 768px) {
    width: 50%;
    padding-left: 1.5rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
  color: #334155;
`;

const FeatureIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 0.75rem;
  color: #3b82f6;
  flex-shrink: 0;
`;

export const CVBuilderSection: React.FC = () => {
  return (
    <Section style={{ backgroundColor: '#f9fafb' }}>
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <SectionTitle>Easy-to-use CV Builder</SectionTitle>
          <SectionSubtitle>
            Create a professional CV in minutes with our step-by-step builder
          </SectionSubtitle>
        </div>
        
        <ContentWrapper>
          <ImageContainer>
            <img 
              src="https://via.placeholder.com/500x300" 
              alt="CV Builder Interface" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }} 
            />
          </ImageContainer>
          
          <ContentContainer>
            <FeatureList>
              {features.map((feature, index) => (
                <FeatureItem key={index}>
                  <FeatureIcon>
                    <CheckIcon />
                  </FeatureIcon>
                  <span>{feature}</span>
                </FeatureItem>
              ))}
            </FeatureList>
            
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <PrimaryButton>
                Build My CV
              </PrimaryButton>
            </div>
          </ContentContainer>
        </ContentWrapper>
      </Container>
    </Section>
  );
};
