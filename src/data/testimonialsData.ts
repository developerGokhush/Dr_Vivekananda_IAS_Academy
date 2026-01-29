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
        id: '1',
        name: 'Banna Venkatesh',
        role: 'AIR-15 IAS (Under Trainee)',
        image: '/assets/gallery/With Banna Venkatesh AIR-15 IAS (Under Trainee).jpeg',
        quote: "Dr. Vivekananda sir’s guidance was pivotal in my journey. His anthropology classes gave me the conceptual clarity I needed to score high.",
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
    },
    {
        id: '2',
        name: 'Bhargav Potupureddi',
        role: 'IPS (Under Trainee)',
        image: '/assets/gallery/With Bhargav Potupureddi IPS (Under Trainee).jpeg',
        quote: "The personalized mentorship and the disciplined approach at the academy helped me stay focused throughout the preparation.",
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: '3',
        name: 'Chaitanya Reddy',
        role: 'IPS Addl SP, Kamareddy',
        image: '/assets/gallery/With Chaitanya Reddy IPS Addl Superintendent of Police, Kamareddy.jpeg',
        quote: "The test series and the detailed feedback on my answers were instrumental in improving my writing skills.",
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: '4',
        name: 'Mantri Mourya Bharadwaj',
        role: 'IAS Joint Collector',
        image: '/assets/gallery/With Mantri Mourya Bharadwaj IAS Joint Collector & Addl District Magistrate Puttaparthi Sri Satya Sai District.jpeg',
        quote: "Consistency is key, and this academy provides the perfect environment to maintain it. Truly grateful for the support.",
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: '5',
        name: 'Mounika P',
        role: 'IPS Addl SP, Adilabad',
        image: '/assets/gallery/With Mounika.P IPS Addl SP, Adilabad.jpeg',
        quote: "A transformative journey. The faculty doesn't just teach, they mentor you for life as a civil servant.",
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
];
