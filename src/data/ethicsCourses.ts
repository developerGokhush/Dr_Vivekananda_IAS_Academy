export interface EthicsCourseData {
    id: string;
    title: string;
    subtitle: string;
    faculty: string;
    date: string;
    tests: string;
    fee: string;
    usps: string[];
    details: string[];
    image: string;
    alt?: string;
    seoTitle?: string;
    seoDescription?: string;
}

export const ethicsCourses: EthicsCourseData[] = [
    {
        id: 'niyama',
        title: 'Niyama (UPSC Ethics Programme)',
        subtitle: 'GS Paper IV: Ethics, Integrity & Aptitude',
        faculty: 'Dr G. Vivekananda',
        date: 'To be announced soon',
        tests: '8 Sectional Tests (4 Theory + 4 Case study) + 2 Full length Grand Tests (Paper IV simulation)',
        fee: 'To be announced',
        usps: [
            'Ethics taught as a scoring subject using frameworks, examples & practice.',
            'Affordable, time-bound, test-backed Ethics programme with weekly progress monitoring.'
        ],
        details: [
            "High-scoring Ethics answer writing using proven structures for theory (Definition → Thinker → Example → Relevance) and a repeatable framework for case studies (Stakeholders → Values → Options → Justification → Implementation).",
            "Ready-to-use Ethics resources including a comprehensive value keywords bank, thinkers & quotes repository, administration and governance examples, and standardized case-study templates covering common dilemmas such as corruption, conflict of interest, whistleblowing, compassion vs rules, and political pressure.",
            "Post-class learning workflow with detailed PDF notes, 5–10 practice questions per class (theory + mini cases), PYQ mapping for every topic, and clear answer-writing guidance with structures, keywords, examples, and diagrams.",
            "Rigorous testing and evaluation system featuring 8 sectional tests (4 theory + 4 case study) and 2 full-length Paper IV grand tests, evaluated using a structured rubric covering content quality, ethical reasoning, practical feasibility, structure & presentation, and language clarity.",
            "Continuous performance tracking through weekly progress monitoring, detailed feedback, personal mentorship, and corrective action plans focused on strengthening weak areas—especially case study handling.",
            "Complete access to learning materials with full video recordings available on the app/portal, valid until completion of the upcoming UPSC Mains examination.",
            "Strong doubt-clearing and mentorship support through weekly live doubt sessions, doubt submission via forms or Telegram group, guaranteed responses within 24–48 hours, and ongoing one-to-one academic guidance."
        ],
        image: '/assets/images/ethics-integrity.png',
        alt: 'Ethics Integrity and Aptitude Course for UPSC Mains',
        seoTitle: 'Best Ethics (GS Paper 4) Coaching in Hyderabad | Dr. Vivekananda IAS',
        seoDescription: 'Master General Studies Paper 4 with the best Ethics coaching in Hyderabad. Our Niyama program offers comprehensive coverage, case study mastery, and answer writing practice to help you score 140+ in UPSC Ethics.'
    }
];
