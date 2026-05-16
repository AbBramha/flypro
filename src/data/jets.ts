export interface Jet {
  id: string
  name: string
  year: string
  length: string
  guests: string
  speed: string
  description: string
  specs: {
    category: string
    items: { label: string; value: string }[]
  }[]
}

export const jets: Jet[] = [
  {
    id: 'ocean-eclipse',
    name: 'GLOBAL EXPRESS 7500',
    year: '2023',
    length: '33.8 M',
    guests: '19 PAX',
    speed: 'Mach 0.925',
    description: 'The pinnacle of business aviation. A 7,700 nautical mile range connecting the world\'s most distant cities without compromise.',
    specs: [
      {
        category: 'PERFORMANCE',
        items: [
          { label: 'RANGE', value: '7,700 NM' },
          { label: 'MAX SPEED', value: '982 KM/H' },
          { label: 'CRUISE ALTITUDE', value: '51,000 FT' }
        ]
      },
      {
        category: 'INTERIOR',
        items: [
          { label: 'CABINS', value: '4 LIVING SPACES' },
          { label: 'SLEEPING', value: 'UP TO 10' },
          { label: 'CREW', value: '3-4 PROFESSIONAL' }
        ]
      }
    ]
  },
  {
    id: 'black-sovereign',
    name: 'GULFSTREAM G650ER',
    year: '2022',
    length: '30.4 M',
    guests: '16 PAX',
    speed: 'Mach 0.90',
    description: 'Defining the standard for speed and range. The G650ER offers the ultimate combination of efficiency and cabin comfort.',
    specs: [
      {
        category: 'PERFORMANCE',
        items: [
          { label: 'RANGE', value: '7,500 NM' },
          { label: 'MAX SPEED', value: '956 KM/H' },
          { label: 'CRUISE ALTITUDE', value: '51,000 FT' }
        ]
      },
      {
        category: 'INTERIOR',
        items: [
          { label: 'CABINS', value: '3 LIVING SPACES' },
          { label: 'SLEEPING', value: 'UP TO 8' },
          { label: 'CREW', value: '2-3 PROFESSIONAL' }
        ]
      }
    ]
  },
  {
    id: 'azure-horizon',
    name: 'FALCON 8X',
    year: '2024',
    length: '24.5 M',
    guests: '14 PAX',
    speed: 'Mach 0.90',
    description: 'The agile explorer. Exceptional short-field performance allows access to airports others cannot reach, from London City to Aspen.',
    specs: [
      {
        category: 'PERFORMANCE',
        items: [
          { label: 'RANGE', value: '6,450 NM' },
          { label: 'MAX SPEED', value: '945 KM/H' },
          { label: 'CRUISE ALTITUDE', value: '51,000 FT' }
        ]
      },
      {
        category: 'INTERIOR',
        items: [
          { label: 'CABINS', value: '3 LIVING SPACES' },
          { label: 'SLEEPING', value: 'UP TO 6' },
          { label: 'CREW', value: '2-3 PROFESSIONAL' }
        ]
      }
    ]
  }
]
