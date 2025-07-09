import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CVBuilderSection } from './components/CVBuilderSection';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CVBuilderSection />
      </main>
    </div>
  );
}

export default App;
