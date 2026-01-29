export interface EssayCourseData {
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
}

export const essayCourses: EssayCourseData[] = [
    {
        id: 'deeksha',
        title: 'Deeksha',
        subtitle: 'Essay Writing Module',
        faculty: 'Dr G. Vivekananda',
        date: 'To be announced soon',
        tests: '10 Tests (8 Sectional + 2 Full length)',
        fee: 'To be announced',
        usps: [
            'Unlike traditional way of giving a Structured Model answer, we will provide thinking line along with the requisite content to stimulate original thinking rather than micro managing.'
        ],
        details: [
            'Number of tests: 10',
            'Detailed Model Frameworks.',
            'Each test will be followed by a detailed discussion of the entire paper.',
            'Test copy evaluation will be done with identification of specific deficiencies and motivating an aspirant to Improve Essay writing skills.',
            'A special high octane introductory session to expose the Aspirants to finer nuances of essay writing.'
        ],
        image: '/assets/images/essay-ethics.png'
    }
];
