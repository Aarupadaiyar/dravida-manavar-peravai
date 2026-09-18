import goRedLogo from '../assets/clubs/16005d24-1c7a-411a-80b1-e5573585e0ca.jpeg'
import pauseDebateLogo from '../assets/clubs/20317279-b20d-4408-829d-04483617a809.jpeg'
import peoplesPaletteLogo from '../assets/clubs/3ab12909-7dab-4648-8973-9ba646c47685.jpeg'
import sovereignSocietyLogo from '../assets/clubs/4f19a43d-9e61-4f33-b270-1daf8c5c0edc.jpeg'
import overseasStudentsLogo from '../assets/clubs/6c759b13-2f59-44a8-ac11-91ad2cb174aa.jpeg'
import repubRainbowsLogo from '../assets/clubs/712b6fc0-0388-4abc-885e-67103140f7c3.jpeg'
import spreadGreenLogo from '../assets/clubs/80babd83-d0a6-4320-850d-9d4c91bdf53b.jpeg'
import deAnnihilationLogo from '../assets/clubs/b12c057d-0299-40c0-8a65-e70658ae7109.jpeg'
import pulseCollectiveLogo from '../assets/clubs/f32a49f0-acce-4952-b811-760d283b35ef.jpeg'
import peoplesEquationLogo from '../assets/clubs/fc375eb3-8681-4cdf-aed2-0195b7d35965.jpeg'
import radicalTalksLogo from '../assets/clubs/radical-talks.jpeg'

export interface Forum {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  logo: string
  instagram?: string
}

export const FORUMS: Forum[] = [
  {
    id: 'go-red',
    title: 'Go Red Forum',
    subtitle: 'Health & blood donation wing',
    description:
      'Organising blood donation camps and health awareness drives to keep our communities safe and cared for.',
    features: ['Blood Donation', 'Health Camps', 'Awareness Drives', 'Community Care'],
    logo: goRedLogo,
    instagram: 'https://www.instagram.com/go.red_dmp',
  },
  {
    id: 'pause-debate',
    title: 'Pause & Debate',
    subtitle: 'Movie review & discussion wing',
    description:
      'Watching films together and debating them from every angle — movies, opinions and perspectives.',
    features: ['Movie Screenings', 'Open Debate', 'Opinions', 'Perspectives'],
    logo: pauseDebateLogo,
    instagram: 'https://www.instagram.com/pausendebate_dmp',
  },
  {
    id: 'peoples-palette',
    title: "People's Palette",
    subtitle: 'Arts & creative expression wing',
    description:
      'Empowering people and enriching society through writing, photography, music, art and adventure.',
    features: ['Writing', 'Photography', 'Music', 'Adventure'],
    logo: peoplesPaletteLogo,
    instagram: 'https://www.instagram.com/peoples_palette_dmp',
  },
  {
    id: 'sovereign-society',
    title: 'The Sovereign Society',
    subtitle: 'Legal protection & awareness wing',
    description:
      'Helping students understand their rights and access legal protection, guided by justice and equality.',
    features: ['Legal Aid', 'Rights Awareness', 'Social Justice', 'Equality'],
    logo: sovereignSocietyLogo,
    instagram: 'https://www.instagram.com/de.sovereignsociety_dmp',
  },
  {
    id: 'overseas-students',
    title: 'Overseas Tamil Students Empowerment Forum',
    subtitle: 'Support for Tamils abroad',
    description:
      'Connecting and supporting Tamil students studying overseas with mentorship, resources and a home away from home.',
    features: ['Mentorship', 'Peer Network', 'Resource Support', 'Global Tamils'],
    logo: overseasStudentsLogo,
    instagram: 'https://www.instagram.com/otsec_dmp',
  },
  {
    id: 'repub-rainbows',
    title: 'REPUB Rainbows',
    subtitle: 'Inclusivity & pride wing',
    description:
      'Building a safe, inclusive space for LGBTQ+ students — together we grow, together we shine.',
    features: ['Safe Spaces', 'Peer Support', 'Awareness', 'Inclusion'],
    logo: repubRainbowsLogo,
    instagram: 'https://www.instagram.com/repub.rainbows_dmp',
  },
  {
    id: 'spread-green',
    title: 'Spread Green Forum',
    subtitle: 'Environmental action wing',
    description:
      'Tree plantation drives, campus greening and climate awareness campaigns led by student volunteers across Tamil Nadu.',
    features: ['Tree Plantation', 'Campus Greening', 'Climate Awareness', 'Eco Campaigns'],
    logo: spreadGreenLogo,
    instagram: 'https://www.instagram.com/spread.green_dmp',
  },
  {
    id: 'de-annihilation',
    title: "De' Annihilation Forum",
    subtitle: 'Anti-caste awareness wing',
    description:
      "Named for Ambedkar's call to annihilate caste, organising discussions and campaigns against caste discrimination.",
    features: ['Study Circles', 'Radical Awareness', 'Research', 'Campus Campaigns'],
    logo: deAnnihilationLogo,
  },
  {
    id: 'pulse-collective',
    title: 'Pulse Collective',
    subtitle: 'Fitness & wellness wing',
    description:
      'Bringing runners, cyclists and lifters together for fitness, strength and wellness, because strength meets purpose.',
    features: ['Running', 'Cycling', 'Strength Training', 'Wellness'],
    logo: pulseCollectiveLogo,
  },
  {
    id: 'peoples-equation',
    title: "People's Equation",
    subtitle: 'Ideology & current affairs wing',
    description:
      'Decoding ideology, politics, economy and social causes through research and honest discussion.',
    features: ['Ideology', 'Politics', 'Economy', 'Social Cause'],
    logo: peoplesEquationLogo,
    instagram: 'https://www.instagram.com/peoples.equation_dmp',
  },
  {
    id: 'radical-talks',
    title: 'Radical Talks',
    subtitle: 'Book club & reading wing',
    description:
      'A reading circle built on the belief that books open minds and ideas change society — read, question, understand, transform.',
    features: ['Book Club', 'Reading Circles', 'Critical Thinking', 'Discussion'],
    logo: radicalTalksLogo,
    instagram: 'https://www.instagram.com/radicaltalks_dmp',
  },
]
