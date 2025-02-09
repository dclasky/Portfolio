import React from 'react';

const MtGAnalysis: React.FC = () => {
    return (
        <article className="max-w-4xl mx-auto p-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4">MtG Analysis</h1>
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
              MAgic: the Gathering is a card game that has produced some of the most interesting
              metagame and smelliest players in recent history(I play the game I am allowed to say that).
              Everyone knows that more resources wins, but I wanted to show how different deck types differen
              in their timing of resource use. In the draft format of the game, colors predicatbly define
              strategies, between aggro, control, and midrange. By splitting the data by color, and wins vs
              losses, I was able to show the literal gap between a deck that hits its curve properly, and a
              deck that falls behind. 
              </p>
            </div>
          </section>
    
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Interactive dashboard to show the gap in "mana curve" between wins and losses and different
                deck types.
              </li>
              <li>Jupyter notebook usable for cleaning data of future sets</li>
            </ul>
          </section>
    
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Technical Implementation</h2>
            <div className="prose max-w-none">
              <p>
                Tableaux for display, a good workhorse for the data.
              </p>
              <p>
                Python and Pandas for data cleaning and analysis.
              </p>
            </div>
          </section>
    
          <footer className="flex gap-4 mt-8">
            <a 
              href="https://public.tableau.com/shared/BJ5W6YSRP?:display_count=n&:origin=viz_share_link"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              See the dashboard
            </a>
            {/* Add live demo link if available */}
          </footer>
        </article>
      );
};

export default MtGAnalysis; 