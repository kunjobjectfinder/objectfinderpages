import type { PageServerLoad } from './$types';
// Remove type import
// import type { Job } from './types';

// Define types directly
interface Item {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    quantity: number;
    lotNumber: string;
    condition: string;
    customPercent?: number;
    starred: boolean;
    retailValue?: number;
    marketValue?: number;
    lastSoldFor: number | undefined;
    partNumber?: string;
    manufacturer?: string;
    keyDetails?: string;
}

interface Job {
    id: string;
    created: Date; // Use Date type
    images: number;
    status: 'completed' | 'failed' | 'processing';
    items: Item[];
}

// Create example jobs with realistic data
const exampleJobs: Job[] = [
  {
    id: '84f0c508...',
    created: new Date('2024-04-16T22:30:00'),
    images: 1,
    status: 'completed',
    items: [
      {
        id: 'vintage-camera-001',
        imageUrl: 'https://picsum.photos/80/80?random=1',
        title: 'Vintage Camera',
        description: 'A classic film camera from the 1970s.',
        quantity: 1,
        lotNumber: 'LOT1001',
        condition: 'Good',
        customPercent: 85,
        starred: true,
        retailValue: 599.99,
        marketValue: 450.00,
        lastSoldFor: 430.00
      },
      {
        id: 'antique-vase-002',
        imageUrl: 'https://picsum.photos/80/80?random=2',
        title: 'Antique Vase',
        description: 'Hand-painted porcelain vase, 19th century.',
        quantity: 1,
        lotNumber: 'LOT1002',
        condition: 'Excellent',
        customPercent: 90,
        starred: false,
        retailValue: 1200.00,
        marketValue: 950.00,
        lastSoldFor: 900.00
      },
      {
        id: 'rare-book-003',
        imageUrl: 'https://picsum.photos/80/80?random=3',
        title: 'Rare Book',
        description: 'First edition, leather-bound classic.',
        quantity: 1,
        lotNumber: 'LOT1003',
        condition: 'Very Good',
        customPercent: 80,
        starred: true,
        retailValue: 850.00,
        marketValue: 725.00,
        lastSoldFor: 705.50
      }
    ]
  },
  {
    id: 'fb321ad3...',
    created: new Date('2024-04-16T22:31:00'),
    images: 1,
    status: 'completed',
    items: []
  }
];

export const load: PageServerLoad = async () => {
  return {
    initialJobs: exampleJobs
  };
}; 