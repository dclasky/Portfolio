import React from 'react';

const MtGAnalysis_Rectangle_Theory: React.FC = () => {
    return (
        <article className="max-w-4xl mx-auto p-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4">MtG Rectangle Theory Analysis</h1>
            <div className="prose max-w-none">
              <p className="text-xl text-gray-600">
                Sifting 17lands.com data for metagame insights
              </p>
            </div>
          </header>
    
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <div className="prose max-w-none">
              <p>
              MtG is a resource allocation game, and while the "mana curve" has been the most
              straightforward way to track resources, a new theory took hold as new sets made more
              cards that created more tokens, which are a kind of virtual card. The idea of Rectangle Theory
              was that these tokens are permanents as much as any real card, and more is more, so just make 
              as many tokens as you can and you'll likely win. This analysis put the theory to the data. While 
              the trend seems to prove the theory right, it also exposed a problem with 17lands.com's data
              collection, which I'm equally proud to have found. 
              </p>
            </div>
          </section>
    
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>data cleaning and classification to correctly estimate tokens as permanents
              </li>
              <li>Jupyter notebook usable for cleaning data of future sets</li>
            </ul>
          </section>
    
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Technical Implementation</h2>
            <div className="prose max-w-none">
              <p>
                Python and Pandas for data cleaning and analysis.
              </p>
            </div>
          </section>
    
          <footer className="flex gap-4 mt-8">
            <a 
              href="https://github.com/dclasky/MtGRectangleTheory"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check the repo
            </a>
            {/* Add live demo link if available */}
          </footer>
          
        </article>
      );
};

export default MtGAnalysis_Rectangle_Theory; 