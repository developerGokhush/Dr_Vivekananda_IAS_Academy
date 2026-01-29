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

export const mentorshipCourses: CourseData[] = [
  {
    id: 'prerana',
    title: 'Prerana (Advanced)',
    subtitle: 'GS Mains Test Series',
    faculty: 'Dr G. Vivekananda',
    date: 'To be announced soon',
    tests: '12 (8 Sectional + 4 Full length)',
    timings: 'Test: 9:30-12:30 PM (Sun) | Discussion: 2 PM - 5 PM (Sun)',
    fee: 'To be announced',
    features: [
      'Only for Students Appearing Mains and only 30 Admissions',
      'Test copy evaluation within 2 weeks.',
      'For 3 out of 12 Tests, copies would be evaluated one on one for both Offline and online students.',
      'A detailed image based PDF will be shared soon after the test discussion.',
      'A comprehensive test discussion of 2-3 hrs after each test would be done both offline and online. (Recordings are also available)',
      'Tests can be written both online and Offline.',
      'Limited Admissions of 30 students to maintain quality in evaluation.',
      'Flexible Schedule, but students must write the test before the next test without failure.',
      'A dedicated telegram group for sharing content.',
      'Scientific Scheduling mindful of students learning abilities.'
    ],
    image: '/assets/images/prerana.png'
  },
  {
    id: 'gs-guru-shishya',
    title: 'GS-Guru Shishya Parampara',
    subtitle: 'General Studies Long Term Mentorship Programme',
    faculty: 'Dr G. Vivekananda',
    date: 'Ongoing',
    fee: 'To be announced',
    features: [
      'Daily GS Tests 3 Mains PYQs per day (Self-evaluation).',
      'Ethics + Essay Tests on Saturdays.',
      'GS Sectional Tests. Half length with Evaluation on Every Weekend.',
      'Comprehensive Tests (8 full-length tests with a detailed evaluation).',
      'Personalised Mentorship Sessions with scientifically designed doubts clearance sheets.',
      'Strategies sessions at the beginning of Each subject Schedule.',
      'Rigorous preparation tracking with an Accountability Booklet.'
    ],
    image: '/assets/images/guru-shishya.png'
  }
];
