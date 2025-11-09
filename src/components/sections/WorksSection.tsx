'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/layout/SectionHeader';

interface WorkCard {
  id: string;
  title: string;
  description: string;
}

interface Work {
  id: string;
  title: string;
  description: string;
  cards: WorkCard[];
}

interface WorksSectionProps {
  works?: Work[];
}

export default function WorksSection({ works }: WorksSectionProps) {
  const { ref: itemsRef, isVisible: itemsVisible } = useScrollAnimation({ threshold: 0.15 });

  const defaultWorks: Work[] = [
    {
      id: '1',
      title: 'VIDEO EDITING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      cards: [
        { id: '1-1', title: 'Card 1', description: '' },
        { id: '1-2', title: 'Card 2', description: '' },
        { id: '1-3', title: 'Card 3', description: '' },
      ],
    },
    {
      id: '2',
      title: 'VIDEO EDITING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      cards: [
        { id: '2-1', title: 'Card 1', description: '' },
        { id: '2-2', title: 'Card 2', description: '' },
        { id: '2-3', title: 'Card 3', description: '' },
      ],
    },
    {
      id: '3',
      title: 'VIDEO EDITING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      cards: [
        { id: '3-1', title: 'Card 1', description: '' },
        { id: '3-2', title: 'Card 2', description: '' },
        { id: '3-3', title: 'Card 3', description: '' },
      ],
    },
    {
      id: '4',
      title: 'VIDEO EDITING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      cards: [
        { id: '4-1', title: 'Card 1', description: '' },
        { id: '4-2', title: 'Card 2', description: '' },
        { id: '4-3', title: 'Card 3', description: '' },
      ],
    },
    {
      id: '5',
      title: 'VIDEO EDITING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      cards: [
        { id: '5-1', title: 'Card 1', description: '' },
        { id: '5-2', title: 'Card 2', description: '' },
        { id: '5-3', title: 'Card 3', description: '' },
      ],
    },
  ];

  const items = works || defaultWorks;

  return (
    <section className="w-full">
      {/* WORKS Header Section - Using reusable SectionHeader component */}
      <SectionHeader 
        title="WORKS"
        barPosition="bottom"
        barAlignment="right"
        barTopOffset={380}
        showBar={true}
      />

      {/* Works Grid */}
      <div className="w-full bg-white">
        <div ref={itemsRef} className="space-y-0">
        {items.map((work, index) => {
          const isDarkBg = index % 2 === 0;
          const bgClass = isDarkBg ? 'bg-black text-ghostwhite' : 'bg-white text-black';
          const cardBgClass = isDarkBg ? 'bg-gray-400' : 'bg-gray-900';

          return (
            <div
              key={work.id}
              className={`${bgClass} py-16 px-4 transition-all duration-700 ${
                itemsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{
                transitionDelay: itemsVisible ? `${index * 0.12}s` : '0s',
              }}
            >
              <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h3 className={`text-6xl md:text-7xl font-bold mb-4 ${isDarkBg ? 'text-ghostwhite' : 'text-gray-800'}`}>
                  {work.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 mb-12 max-w-2xl">
                  {work.description}
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {work.cards.map((card, cardIndex) => (
                    <div
                      key={card.id}
                      className={`${cardBgClass} rounded-2xl aspect-square transition-all duration-700 ${
                        itemsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                      }`}
                      style={{
                        transitionDelay: itemsVisible ? `${(index * 0.12) + (cardIndex * 0.08)}s` : '0s',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
