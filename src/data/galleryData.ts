export interface GalleryItem {
    id: string;
    image: string;
    desc: string;
    tag: 'Toppers' | 'Podcasts' | 'Seminars' | 'Public Events' | 'All' | 'Testimonials' | 'Accolades';
    videoUrl?: string;
}

export const galleryData: GalleryItem[] = [
    {
        id: '1',
        image: '/assets/gallery/toppers/With Banna Venkatesh AIR-15 IAS (Under Trainee).jpeg',
        desc: 'With Banna Venkatesh AIR-15 IAS (Under Trainee)',
        tag: 'Toppers'
    },
    {
        id: '2',
        image: '/assets/gallery/toppers/With Bhargav Potupureddi IPS (Under Trainee).png',
        desc: 'With Bhargav Potupureddi IPS (Under Trainee)',
        tag: 'Toppers'
    },
    {
        id: '3',
        image: '/assets/gallery/toppers/With Mr Pawan Datta IAS.png',
        desc: 'With Mr Pawan Datta IAS',
        tag: 'Toppers'
    },
    {
        id: '4',
        image: '/assets/gallery/toppers/With Chaitanya Reddy IPS Addl Superintendent of Police, Kamareddy.jpeg',
        desc: 'With Chaitanya Reddy IPS Addl Superintendent of Police, Kamareddy',
        tag: 'Toppers'
    },
    {
        id: '5',
        image: '/assets/gallery/toppers/With Mantri Mourya Bharadwaj IAS Joint Collector & Addl District Magistrate Puttaparthi Sri Satya Sai District.jpeg',
        desc: 'With Mantri Mourya Bharadwaj IAS Joint Collector',
        tag: 'Toppers'
    },
    {
        id: '6',
        image: '/assets/gallery/toppers/With Mounika.P IPS Addl SP, Adilabad.jpeg',
        desc: 'With Mounika.P IPS Addl SP, Adilabad',
        tag: 'Toppers'
    },
    {
        id: '7',
        image: '/assets/gallery/toppers/With Bhuvana Pranith Pappula Officer on Special Duty (OSD) in the Public Works Department (PWD) of the West Bengal government.png',
        desc: 'With Bhuvana Pranith Pappula Officer on Special Duty (OSD) in the Public Works Department (PWD) of the West Bengal government.',
        tag: 'Toppers'
    },
    {
        id: '8',
        image: '/assets/gallery/toppers/With Shri Avula Ramesh Reddy Inspector General Police.png',
        desc: 'With Shri Avula Ramesh Reddy Inspector General Police',
        tag: 'Toppers'
    },
    {
        id: '9',
        image: '/assets/gallery/toppers/With Mr Shashikanth Korravath IRS.jpeg',
        desc: 'With Mr Shashikanth Korravath IRS',
        tag: 'Toppers'
    },
    // {
    //     id: 't1',
    //     image: '/assets/gallery/With Banna Venkatesh AIR-15 IAS (Under Trainee).jpeg',
    //     desc: '"Dr. Vivekananda sir’s guidance was pivotal in my journey. His anthropology classes gave me the conceptual clarity I needed to score high." - Banna Venkatesh',
    //     tag: 'Testimonials',
    //     videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    // },
    // {
    //     id: 't2',
    //     image: '/assets/gallery/With Bhargav Potupureddi IPS (Under Trainee).jpeg',
    //     desc: '"The personalized mentorship and the disciplined approach at the academy helped me stay focused throughout the preparation." - Bhargav Potupureddi',
    //     tag: 'Testimonials',
    //     videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    // },
    // {
    //     id: 't3',
    //     image: '/assets/gallery/With Chaitanya Reddy IPS Addl Superintendent of Police, Kamareddy.jpeg',
    //     desc: '"The test series and the detailed feedback on my answers were instrumental in improving my writing skills." - Chaitanya Reddy',
    //     tag: 'Testimonials',
    //     videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    // },
    // {
    //     id: 't4',
    //     image: '/assets/gallery/With Mantri Mourya Bharadwaj IAS Joint Collector & Addl District Magistrate Puttaparthi Sri Satya Sai District.jpeg',
    //     desc: '"Consistency is key, and this academy provides the perfect environment to maintain it. Truly grateful for the support." - Mantri Mourya Bharadwaj',
    //     tag: 'Testimonials',
    //     videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    // },
    // {
    //     id: 't5',
    //     image: '/assets/gallery/With Mounika.P IPS Addl SP, Adilabad.jpeg',
    //     desc: '"A transformative journey. The faculty doesn\'t just teach, they mentor you for life as a civil servant." - Mounika P',
    //     tag: 'Testimonials',
    //     videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    // }
    {
        id: 'wa-1',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.25 (1).jpeg',
        desc: 'Academy Seminar Session',
        tag: 'Seminars'
    },
    {
        id: 'wa-2',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.25.jpeg',
        desc: 'Public Interaction Event',
        tag: 'Public Events'
    },
    {
        id: 'wa-3',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.26 (1).jpeg',
        desc: 'Student Mentorship Program',
        tag: 'Seminars'
    },
    {
        id: 'wa-4',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.26 (2).jpeg',
        desc: 'Community Outreach',
        tag: 'Public Events'
    },
    {
        id: 'wa-5',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.26.jpeg',
        desc: 'Academy Highlights',
        tag: 'Seminars'
    },
    {
        id: 'wa-6',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.27 (1).jpeg',
        desc: 'Award at Telangana Today Event',
        tag: 'Accolades'
    },
    {
        id: 'wa-7',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.27 (2).jpeg',
        desc: 'Book Launch Moments',
        tag: 'Public Events'
    },
    {
        id: 'wa-8',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.27 (3).jpeg',
        desc: 'Award at Seminar',
        tag: 'Accolades'
    },
    {
        id: 'wa-9',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.27.jpeg',
        desc: 'Interactive Session',
        tag: 'Public Events'
    },
    {
        id: 'wa-10',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.28 (1).jpeg',
        desc: 'Student Success Celebration',
        tag: 'Public Events'
    },
    {
        id: 'wa-11',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.28 (2).jpeg',
        desc: 'Faculty Meeting',
        tag: 'Seminars'
    },
    {
        id: 'wa-12',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.28.jpeg',
        desc: 'Motivational Talk',
        tag: 'Seminars'
    },
    {
        id: 'wa-13',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.29 (1).jpeg',
        desc: 'Annual Day Gathering',
        tag: 'Public Events'
    },
    {
        id: 'wa-14',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.29 (2).jpeg',
        desc: 'Group Discussion',
        tag: 'Seminars'
    },
    {
        id: 'wa-15',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.29 (3).jpeg',
        desc: 'Campus Tour',
        tag: 'Public Events'
    },
    {
        id: 'wa-18',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.30 (1).jpeg',
        desc: 'Ted Talks',
        tag: 'Public Events'
    },
    {
        id: 'wa-19',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.30 (2).jpeg',
        desc: 'Ted Talks',
        tag: 'Public Events'
    },
    {
        id: 'wa-22',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.31 (1).jpeg',
        desc: 'Ted Talks',
        tag: 'Public Events'
    },
    {
        id: 'wa-23',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.31 (2).jpeg',
        desc: 'Academy Function',
        tag: 'Public Events'
    },
    {
        id: 'wa-24',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.31.jpeg',
        desc: 'Team Building',
        tag: 'Seminars'
    },
    {
        id: 'wa-25',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.32.jpeg',
        desc: 'Award at Ted Talks',
        tag: 'Accolades'
    },
    {
        id: 'wa-26',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.59.jpeg',
        desc: 'Launch with Chief Guest',
        tag: 'Public Events'
    }
];
