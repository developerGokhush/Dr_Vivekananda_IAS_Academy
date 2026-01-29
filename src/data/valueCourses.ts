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

export const valueCourses: CourseData[] = [
    {
        id: 'arthashastra',
        title: 'Arthashastra',
        subtitle: 'Budget and Economic Survey Module by Dr G. Vivekananda',
        faculty: 'Dr G. Vivekananda',
        date: 'Online sessions only',
        duration: '15 Hrs',
        fee: 'Rs. 300/-',
        features: [
            'Class room Discussion PDFs would be shared with students after completion of the class.',
            'Emphasis on Mains answer writing suitably.',
            'Application of Economic Survey concepts to various parts of the syllabus.',
            'A Test with 100 Questions based on the Economic Survey and Budget.',
            'All sessions are online and are telecasted live only.',
            'Limited Admissions: 100 students.'
        ],
        image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200'
    }
];
