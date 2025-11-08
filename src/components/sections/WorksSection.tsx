'use client';

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
    <section className="w-full bg-white py-20">
      {/* Header */}
      <div className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-7xl md:text-8xl font-bold text-black mb-8">WORKS</h2>
        </div>
      </div>

      {/* Works Grid */}
      <div className="space-y-0">
        {items.map((work, index) => {
          const isDarkBg = index % 2 === 0;
          const bgClass = isDarkBg ? 'bg-black text-ghostwhite' : 'bg-white text-black';
          const cardBgClass = isDarkBg ? 'bg-gray-400' : 'bg-gray-900';

          return (
            <div key={work.id} className={`${bgClass} py-16 px-4`}>
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
                  {work.cards.map((card) => (
                    <div
                      key={card.id}
                      className={`${cardBgClass} rounded-2xl aspect-square`}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
