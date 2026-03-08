export interface Testimonial {
    id: string;
    name: string;
    role: string;
    image: string;
    quote: string;
    videoUrl: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 'tm-1',
        name: 'Dr Krishna',
        role: 'AIR 155 (2025)',
        image: '/assets/gallery/Dr krishna Air 155.png',
        quote: "Dr. Vivekananda's Anthropology classes are exceptional. The conceptual clarity and personalized mentorship were instrumental in securing my rank.",
        videoUrl: 'https://www.youtube.com/embed/lHlvCOdxWGc?si=ZPv7Ew9rdAtWyjN1'
    },
    {
        id: 'tm-2',
        name: 'Benjo P. Jose',
        role: 'AIR 59 (UPSC 2023)',
        image: '/assets/gallery/Benjo P. Jose Air 59.png',
        quote: "Scoring 300+ in Anthropology was possible due to the structured thinking and foundational clarity provided by Dr. Vivekananda sir.",
        videoUrl: 'https://www.youtube.com/embed/PHgrKsMPmiU?si=m2zroJrXhoVIQh-H'
    },
    {
        id: 'tm-3',
        name: 'K Srinivasulu',
        role: 'AIR 526 (UPSC 2023)',
        image: '/assets/gallery/K Srinivasulu Air 526.png',
        quote: "The Mains answer writing approach with a focus on PYQs helped me immensely. I highly recommend the academy for Anthropology optional.",
        videoUrl: 'https://www.youtube.com/embed/woMc4QbUwW4'
    },
    {
        id: 'tm-4',
        name: 'Sahana',
        role: 'AIR 739 (UPSC 2023)',
        image: '/assets/gallery/Sahana Air 739.png',
        quote: "The detailed PDFs provided after every class made revision incredibly efficient. A big thank you to Dr. Vivekananda sir for his continuous guidance.",
        videoUrl: 'https://www.youtube.com/embed/kEjxUL7iTY4'
    },
    {
        id: 'tm-5',
        name: 'Dr Vineeth',
        role: 'AIR 169 (UPSC 2023)',
        image: '/assets/gallery/Dr Vineeth Air 169.png',
        quote: "The strategic approach to tackling Anthropology, combined with the comprehensive test series, gave me the confidence to excel.",
        videoUrl: 'https://www.youtube.com/embed/7dv-01BLNj0'
    },
    {
        id: 'tm-6',
        name: 'K Pranay Kumar',
        role: 'AIR 554 (UPSC 2023)',
        image: '/assets/gallery/K Pranay Kumar Air 554.png',
        quote: "Constant motivation and direct access for doubt clearance sets this academy apart. It was a crucial part of my UPSC journey.",
        videoUrl: 'https://www.youtube.com/embed/Gg_E7MVb-aA'
    },
    {
        id: 'tm-7',
        name: 'Navpada Ashritha',
        role: 'AIR 315 (UPSC 2022)',
        image: '/assets/gallery/Navpada Ashritha Air 315.png',
        quote: "Dr. Vivekananda's ability to simplify complex concepts and his weekly monitoring of preparation progress were key to my success.",
        videoUrl: 'https://www.youtube.com/embed/0ELKcNfXYHE'
    }
];
