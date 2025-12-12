import React from 'react';
import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import ProblemSolution from './components/sections/ProblemSolution';
import CoreFeatures from './components/sections/CoreFeatures';
import Efficiency from './components/sections/Efficiency';
import Trust from './components/sections/Trust';
import ClosingCTA from './components/sections/ClosingCTA';

function App() {
  return (
    <Layout>
      <Hero />
      <ProblemSolution />
      <CoreFeatures />
      <Efficiency />
      <Trust />
      <ClosingCTA />
    </Layout>
  );
}

export default App;
