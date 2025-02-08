import React from 'react';

const MetalArcana: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">MetalArcana</h1>
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600">
            A sophisticated recommendation engine that helps users discover new metal music 
            based on their listening preferences and deep genre analysis.
          </p>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <div className="prose max-w-none">
          <p>
            MetalArcana uses machine learning algorithms to analyze musical features
            and user preferences, creating personalized recommendations for metal music enthusiasts.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Advanced genre classification using audio fingerprinting</li>
          <li>Personalized recommendation engine based on listening history</li>
          <li>Community-driven music discovery system</li>
          <li>Detailed artist and album analytics</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technical Implementation</h2>
        <div className="prose max-w-none">
          <p>
            Built with Node.js and Express, MetalArcana leverages MongoDB for flexible 
            data storage and real-time updates. The recommendation engine uses collaborative 
            filtering and content-based analysis to generate accurate suggestions.
          </p>
        </div>
      </section>

      <footer className="flex gap-4 mt-8">
        <a 
          href="https://github.com/yourusername/metal-arcana"
          className="text-blue-600 hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
        {/* Add live demo link if available */}
      </footer>
    </article>
  );
};

export default MetalArcana; 