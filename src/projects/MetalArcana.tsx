import React from 'react';

const MetalArcana: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">MetalArcana</h1>
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600">
            A straight-forward ecommerce site for a metalwork company
          </p>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <div className="prose max-w-none">
          <p>
          MetalArcana is an eCommerce site I built to sell handcrafted metalwork, 
          featuring a custom layout designed for a clean, minimal shopping experience. 
          I implemented Snipcart to handle payments, ensuring a smooth and secure checkout 
          process. The site is straight-forward and visually refined, balancing aesthetics 
          with functionality to showcase the unique metal pieces.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>A fully customized front-end layout tailored to purpose.</li>
          <li>Seamless integration of Snipcart for secure payment processing</li>
          <li>Intuitive navigation and a streamlined checkout process</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technical Implementation</h2>
        <div className="prose max-w-none">
          <p>
            Built with REACT, simple and clean(is the way the site's making me feel tonight).
          </p>
        </div>
      </section>

      <footer className="flex gap-4 mt-8">
        <a 
          href="https://metalarcana.com"
          className="text-blue-600 hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check the shop
        </a>
        {/* Add live demo link if available */}
      </footer>
    </article>
  );
};

export default MetalArcana; 