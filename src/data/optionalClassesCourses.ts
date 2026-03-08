export interface CourseData {
    id: string;
    title: string;
    subtitle: string;
    faculty: string;
    date: string;
    duration: string;
    fee: string;
    discount: string;
    usps: string[];
    features: string[];
    lessons?: {
        title: string;
        topics: {
            name: string;
            description: string;
        }[];
    }[];
    image: string;
    alt?: string;
    seoTitle?: string;
    seoDescription?: string;
}

export const optionalClassesCourses: CourseData[] = [
    {
        id: 'anthropology',
        title: 'Anthropology Foundation',
        subtitle: 'Comprehensive 250+ Hrs Module',
        faculty: 'Dr G. Vivekananda',
        date: 'To be announced soon',
        duration: '250Hrs',
        fee: 'To be announced',
        discount: '10% discount for Women, SC and ST, EBC and Differently abled Aspirants',
        usps: [
            'Taught by faculty who cleared UPSC Civil Services examination',
            'Most affordable Optional coaching in the country.'
        ],
        features: [
            'Taught by Dr Vivekananda who cleared UPSC Civil Services examination and produced the highest number of ranks in Anthropology optional from Hyderabad.',
            'Complete online mode to ensure learning at ease.',
            'Highly suitable for working professionals, students pursuing under graduate education, housewives, aspirants at remote places.',
            'Time bound completion of the syllabus.',
            '12 Sectional tests and 2 Grand tests with evaluation.',
            'A Detailed PDF would be provided after every class for all the Topics.',
            'Mains Answer writing approach with a PYQ focus would be provided after every topic in the class.',
            'All Video recordings would be provided on APP which students can access till completion of the Mains exam.',
            'Personal Mentorship by Dr Vivekananda and weekly monitoring of preparation progress.',
            'Direct access to faculty for doubts clearance.'
        ],
        lessons: [
            {
                title: 'Fundamentals & Evolution',
                topics: [
                    { name: 'Week 1 - Meaning and Scope', description: 'Evolution of Anthropology and relationships with other disciplines.' },
                    { name: 'Week 2 - Main branches', description: 'Socio-cultural, biological, archaeological and linguistic anthropology.' },
                    { name: 'Week 3 - Human Evolution', description: 'Biological and cultural factors in human evolution, emergence of man.' },
                    { name: 'Week 4 - Primatology', description: 'Characteristics of primates, evolutionary trends and primate taxonomy.' }
                ]
            },
            {
                title: 'Social & Cultural Anthropology',
                topics: [
                    { name: 'Week 1 - Culture and Society', description: 'The nature of culture, civilization, ethnocentrism, cultural relativism.' },
                    { name: 'Week 2 - Marriage Definition', description: 'Universality, laws of marriage, types of marriage, functions of marriage.' },
                    { name: 'Week 3 - Family Characteristics', description: 'Definition and universality, functions, types, impact of urbanization.' },
                    { name: 'Week 4 - Kinship Structure', description: 'Consanguinity and affinity, principles and types of descent.' }
                ]
            },
            {
                title: 'Indian Anthropology',
                topics: [
                    { name: 'Week 1 - Indian Culture', description: 'Evolution of the Indian Culture and Civilization, Prehistoric cultures.' },
                    { name: 'Week 2 - Demographic profile', description: 'Ethnic and linguistic elements in the Indian population.' },
                    { name: 'Week 3 - The caste system', description: 'Features of caste system, Varna and caste, theories of origin of caste.' },
                    { name: 'Week 4 - Tribal situation', description: 'Biogenetic variability, linguistic and socio-economic characteristics.' }
                ]
            }
        ],
        image: '/assets/images/anthropology.png',
        alt: 'Anthropology Optional Foundation Course',
        seoTitle: 'Best Anthropology Optional Coaching in Hyderabad | Dr. Vivekananda IAS',
        seoDescription: 'Dr. Vivekananda’s IAS Academy provides the most comprehensive Anthropology coaching in Hyderabad. With expert faculty, personalized mentorship, and a proven track record of success, we help aspirants master the subject and secure top ranks in UPSC Civil Services.'
    },
    {
        id: 'sociology',
        title: 'Sociology Foundation',
        subtitle: 'Complete UPSC Syllabus coverage',
        faculty: 'Dr G. Vivekananda',
        date: 'To be announced soon',
        duration: '250Hrs',
        fee: 'To be announced',
        discount: '10% discount for Women, SC and ST, EBC and Differently abled Aspirants',
        usps: [
            'Taught by faculty who cleared UPSC Civil Services examination',
            'Most affordable Optional coaching in the country.'
        ],
        features: [
            'Taught by Dr Vivekananda who cleared UPSC Civil Services examination',
            'Complete online mode to ensure learning at ease.',
            'Highly suitable for working professionals, students pursuing under graduate education, housewives, aspirants at remote places.',
            'Time bound completion of the syllabus.',
            '12 Sectional tests and 2 Grand tests with evaluation.',
            'A Detailed PDF would be provided after every class for all the Topics.',
            'Mains Answer writing approach with a PYQ focus would be provided after every topic in the class.',
            'All Video recordings would be provided on APP which students can access till completion of the Mains exam.',
            'Personal Mentorship by Dr Vivekananda and weekly monitoring of preparation progress.',
            'Direct access to faculty for doubts clearance.'
        ],
        lessons: [
            {
                title: 'Month 1 - Sociological Concepts',
                topics: [
                    { name: 'Week 1 - Sociology', description: 'The discipline, modernity and social changes in Europe.' },
                    { name: 'Week 2 - Sociology as Science', description: 'Science, scientific method and critique. Major theoretical strands of research.' },
                    { name: 'Week 3 - Research Methods', description: 'Qualitative and quantitative methods. Techniques of data collection.' },
                    { name: 'Week 4 - Sociological Thinkers', description: 'Karl Marx, Emile Durkheim, Max Weber, Talcott Parsons.' }
                ]
            },
            {
                title: 'Month 2 - Stratification & Mobility',
                topics: [
                    { name: 'Week 1 - Social Stratification', description: 'Concepts - equality, inequality, hierarchy, exclusion, poverty and deprivation.' },
                    { name: 'Week 2 - Works and Economic Life', description: 'Social organization of work in different types of society.' },
                    { name: 'Week 3 - Politics and Society', description: 'Sociological theories of power, power elite, bureaucracy.' },
                    { name: 'Week 4 - Religion and Society', description: 'Sociological theories of religion. Types of religious practices.' }
                ]
            },
            {
                title: 'Month 3 - Indian Society',
                topics: [
                    { name: 'Week 1 - Perspectives', description: 'Perspectives on the study of Indian society: Indology, Structural functionalism.' },
                    { name: 'Week 2 - Colonial impact', description: 'Impact of colonial rule on Indian society: social background of Indian nationalism.' },
                    { name: 'Week 3 - Social Structure', description: 'Rural and Agrarian Social Structure. Caste System: Perspectives.' },
                    { name: 'Week 4 - Social Classes', description: 'Agrarian class structure, Industrial class structure, Middle classes in India.' }
                ]
            }
        ],
        image: '/assets/images/sociology.png',
        alt: 'Sociology Optional Foundation Course',
        seoTitle: 'Best Sociology Optional Coaching in Hyderabad | Dr. Vivekananda IAS',
        seoDescription: 'Join the best Sociology optional coaching in Hyderabad at Dr. Vivekananda’s IAS Academy. Our program offers complete syllabus coverage, answer writing practice, and expert guidance to help you maximize your score in the Civil Services Examination.'
    }
];
