export interface CourseData {
  id: string;
  title: string;
  subtitle: string;
  faculty: string;
  date: string;
  duration?: string;
  fee: string;
  discount?: string;
  features: string[];
  tests?: string;
  timings?: string;
  image: string;
}

export const TgpscAppscCourses: CourseData[] = [
  {
    id: 't-jagruthi',
    title: 'T-Jagruthi',
    subtitle: 'TGPSC Group-I Mains Quality Enrichment & Revision Program',
    faculty: 'Dr. Vivekananda Sir & Team',
    date: 'Ongoing',
    fee: 'To be announced',
    features: [
      '40+ Essays Practice + Exp. with Model Ans.',
      '90+ Hours of GS Revision Classes',
      '75 Unit Tests Daily @ 5Q = 375 Q (75 Days)',
      '15 Sectional Tests Weekly @ 10Q = 150Q (15 Weeks)',
      '10+2 Comprehensive Tests @ 24Q = 240Q'
    ],
    image: '/assets/images/t-jagruthi.png'
  },
  {
    id: 'ap-jagruthi-2024',
    title: 'AP Jagruthi-2024',
    subtitle: 'APPSC Group-I Mains - Mentorship cum Answer Writing Program',
    faculty: 'Dr G. Vivekananda',
    date: 'To be announced soon',
    fee: 'To be announced',
    features: [
      'Coverage of all Mains papers',
      'General ESSAY by Dr. G Vivekananda Sir',
      'Answer writing with individual evaluation',
      'Exclusive Study Material + Model Ans. Compilation',
      'Comprehensive Full Length Mock Test'
    ],
    image: '/assets/images/ap-jagruthi.png'
  },
  {
    id: 't-samaaj',
    title: 'T-Samaaj',
    subtitle: 'TSPSC Group 1 Mains Society Module',
    faculty: 'Dr. Vivekananda Sir',
    date: 'Starts on 21st November',
    duration: '40 Hours (13 Days)',
    timings: '10am to 1pm',
    fee: 'To be announced',
    features: [
      'Secure 70 Marks',
      'Complimentary to your Essay preparation.',
      'Helps you to revise various schemes/policies of Telangana.',
      'Entire class orientation will be in Mains Q & A format.',
      'PDF for each Topic.',
      'Dedicated Telegram group to give hand holding till Mains.',
      'A Question Bank of 50 Most expected Topics will be provided at the end of the Module.',
      'One FULL LENGTH TEST on Society after completion of the module.'
    ],
    image: '/assets/images/t-samaaj.png'
  },
  {
    id: 't-vigyan',
    title: 'T-VIGYAN',
    subtitle: 'Science and Technology Rapid Revision Programme for Group-1 Mains',
    faculty: 'Dr. Vivekananda Sir',
    date: 'To be announced',
    duration: '30 HRS',
    fee: 'To be announced',
    features: [
      'Science and Technology Rapid Revision',
      'Tailored for Group-1 Mains',
      'Comprehensive coverage of syllabus',
      'Interactive revision sessions',
      'Focus on high-yield topics'
    ],
    image: '/assets/images/t-vigyan.png'
  }
];