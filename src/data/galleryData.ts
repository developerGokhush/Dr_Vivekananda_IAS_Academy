export interface GalleryItem {
    id: string;
    image: string;
    desc: string;
    tag: 'Toppers' | 'Podcasts' | 'Seminars' | 'Public Events' | 'All' | 'Testimonials' | 'Accolades';
    videoUrl?: string;
}

export const galleryData: GalleryItem[] = [
    {
        id: 't-1',
        image: '/assets/gallery/toppers/With Banna Venkatesh AIR-15 IAS (Under Trainee).jpeg',
        desc: 'With Banna Venkatesh AIR-15 IAS (Under Trainee)',
        tag: 'Toppers'
    },
    {
        id: 't-2',
        image: '/assets/gallery/toppers/With Bhargav Potupureddi IPS (Under Trainee).png',
        desc: 'With Bhargav Potupureddi IPS (Under Trainee)',
        tag: 'Toppers'
    },
    {
        id: 't-3',
        image: '/assets/gallery/toppers/With Mr Pawan Datta IAS.png',
        desc: 'With Mr Pawan Datta IAS',
        tag: 'Toppers'
    },
    {
        id: 't-4',
        image: '/assets/gallery/toppers/With Chaitanya Reddy IPS Addl Superintendent of Police, Kamareddy.jpeg',
        desc: 'With Chaitanya Reddy IPS Addl Superintendent of Police, Kamareddy',
        tag: 'Toppers'
    },
    {
        id: 't-5',
        image: '/assets/gallery/toppers/With Mantri Mourya Bharadwaj IAS Joint Collector & Addl District Magistrate Puttaparthi Sri Satya Sai District.jpeg',
        desc: 'With Mantri Mourya Bharadwaj IAS Joint Collector',
        tag: 'Toppers'
    },
    {
        id: 't-6',
        image: '/assets/gallery/toppers/With Mounika.P IPS Addl SP, Adilabad.jpeg',
        desc: 'With Mounika.P IPS Addl SP, Adilabad',
        tag: 'Toppers'
    },
    {
        id: 't-7',
        image: '/assets/gallery/toppers/With Bhuvana Pranith Pappula Officer on Special Duty (OSD) in the Public Works Department (PWD) of the West Bengal government.png',
        desc: 'With Bhuvana Pranith Pappula Officer on Special Duty (OSD) in the Public Works Department (PWD) of the West Bengal government.',
        tag: 'Toppers'
    },
    {
        id: 't-8',
        image: '/assets/gallery/toppers/With Shri Avula Ramesh Reddy Inspector General Police.png',
        desc: 'With Shri Avula Ramesh Reddy Inspector General Police',
        tag: 'Toppers'
    },
    {
        id: 't-9',
        image: '/assets/gallery/toppers/With Mr Shashikanth Korravath IRS.jpeg',
        desc: 'With Mr Shashikanth Korravath IRS',
        tag: 'Toppers'
    },
    {
        id: 'tm-1',
        image: '/assets/gallery/Dr krishna Air 155.png',
        desc: 'Dr krishna Air 155 (2025) Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://www.youtube.com/embed/lHlvCOdxWGc?si=ZPv7Ew9rdAtWyjN1'
    },
    {
        id: 'tm-2',
        image: '/assets/gallery/Benjo P. Jose Air 59.png',
        desc: 'Benjo P. Jose Air 59 (UPSC 2023) Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://www.youtube.com/embed/PHgrKsMPmiU?si=m2zroJrXhoVIQh-H'
    },
    {
        id: 'tm-3',
        image: '/assets/gallery/K Srinivasulu Air 526.png',
        desc: 'K Srinivasulu Air 526 (UPSC 2023) Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://www.youtube.com/embed/woMc4QbUwW4'
    },
    {
        id: 'tm-4',
        image: '/assets/gallery/Sahana Air 739.png',
        desc: 'Sahana Air 739 (UPSC 2023) Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://www.youtube.com/embed/kEjxUL7iTY4'
    },
    {
        id: 'tm-5',
        image: '/assets/gallery/Dr Vineeth Air 169.png',
        desc: 'Dr Vineeth Air 169 (UPSC 2023) Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://www.youtube.com/embed/7dv-01BLNj0'
    },
    {
        id: 'tm-6',
        image: '/assets/gallery/K Pranay Kumar Air 554.png',
        desc: 'K Pranay Kumar Air 554 (UPSC 2023) Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://www.youtube.com/embed/Gg_E7MVb-aA'
    },
    {
        id: 'tm-7',
        image: '/assets/gallery/Navpada Ashritha Air 315.png',
        desc: 'Navpada Ashritha Air 315 (UPSC 2022) Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://www.youtube.com/embed/0ELKcNfXYHE'
    },
    {
        id: 'p-1',
        image: '/assets/gallery/Podcast with iDreamMedia.png',
        desc: 'Podcast with iDreamMedia on my MBBS to UPSC journey',
        tag: 'Podcasts',
        videoUrl: 'https://www.youtube.com/embed/RUF3-J-S3fs?si=gWinZYa1CqAJ-4A3'
    },
    {
        id: 'p-2',
        image: '/assets/gallery/Podcast with iDreamMedia2.png',
        desc: 'Podcast with iDreamMedia on my Experience in Delhi UPSC Coaching',
        tag: 'Podcasts',
        videoUrl: 'https://www.youtube.com/embed/6qKVb0truys?si=4JrrlGfwvwQd17r5'
    },
    {
        id: 'p-3',
        image: '/assets/gallery/Podcast on JoshTalk.png',
        desc: 'Podcast on JoshTalk about the UPSC Coaching',
        tag: 'Podcasts',
        videoUrl: 'https://www.youtube.com/embed/lnsBfaqPbBI?si=YAE_ruu6OCdWMy0l'
    },
    {
        id: 's-1',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.25 (1).jpeg',
        desc: 'Academy Seminar Session',
        tag: 'Seminars'
    },
    {
        id: 'pe-1',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.25.jpeg',
        desc: 'Public Interaction Event',
        tag: 'Public Events'
    },
    {
        id: 's-2',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.26 (1).jpeg',
        desc: 'Student Mentorship Program',
        tag: 'Seminars'
    },
    {
        id: 'pe-2',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.26 (2).jpeg',
        desc: 'Community Outreach',
        tag: 'Public Events'
    },
    {
        id: 's-3',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.26.jpeg',
        desc: 'Academy Highlights',
        tag: 'Seminars'
    },
    {
        id: 'a-1',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.27 (1).jpeg',
        desc: 'Award at Telangana Today Event',
        tag: 'Accolades'
    },
    {
        id: 'pe-3',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.27 (2).jpeg',
        desc: 'Book Launch Moments',
        tag: 'Public Events'
    },
    {
        id: 'a-2',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.27 (3).jpeg',
        desc: 'Award at Seminar',
        tag: 'Accolades'
    },
    {
        id: 'pe-5',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.27.jpeg',
        desc: 'Interactive Session',
        tag: 'Public Events'
    },
    {
        id: 'pe-6',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.28 (1).jpeg',
        desc: 'Student Success Celebration',
        tag: 'Public Events'
    },
    {
        id: 's-4',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.28 (2).jpeg',
        desc: 'Faculty Meeting',
        tag: 'Seminars'
    },
    {
        id: 's-5',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.28.jpeg',
        desc: 'Motivational Talk',
        tag: 'Seminars'
    },
    {
        id: 'pe-7',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.29 (1).jpeg',
        desc: 'Annual Day Gathering',
        tag: 'Public Events'
    },
    {
        id: 's-6',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.29 (2).jpeg',
        desc: 'Adressing the event at Ted Talks',
        tag: 'Seminars'
    },
    {
        id: 'pe-8',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.29 (3).jpeg',
        desc: 'Idea Sharing with future aspirants',
        tag: 'Public Events'
    },
    {
        id: 'a-3',
        image: '/assets/gallery/Award at Surya Vidyanikethan.jpg',
        desc: 'Award at Surya Vidyanikethan',
        tag: 'Accolades'
    },
    {
        id: 'pe-9',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.30 (1).jpeg',
        desc: 'Ted Talks',
        tag: 'Public Events'
    },
    {
        id: 'pe-10',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.30 (2).jpeg',
        desc: 'Ted Talks',
        tag: 'Public Events'
    },
    {
        id: 'pe-11',
        image: '/assets/gallery/Speech at Surya Vidyanikethan.jpg',
        desc: 'Speech at Surya Vidyanikethan',
        tag: 'Public Events'
    },
    {
        id: 'a-4',
        image: '/assets/gallery/Award at Opening event.png',
        desc: 'Felicitation by M. Venkaya Naidu (Former Vice President of India)',
        tag: 'Accolades'
    },
    {
        id: 'pe-12',
        image: '/assets/gallery/WhatsApp Image 2026-02-08 at 21.04.46.jpeg',
        desc: 'Book Launch of Retired IAS Officer Rangarajan sir',
        tag: 'Public Events'
    },
    {
        id: 'pe-13',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.31 (1).jpeg',
        desc: 'Ted Talks',
        tag: 'Public Events'
    },
    {
        id: 'pe-14',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.31 (2).jpeg',
        desc: 'Academy Function',
        tag: 'Public Events'
    },
    {
        id: 'pe-15',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.29 (4).jpeg',
        desc: 'Book Launch at CMR Engineering College',
        tag: 'Public Events'
    },
    {
        id: 'a-5',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.32.jpeg',
        desc: 'Award at Ted Talks',
        tag: 'Accolades'
    },
    {
        id: 'a-6',
        image: '/assets/gallery/WhatsApp Image 2026-02-07 at 10.41.52.jpeg',
        desc: 'Felicitation by Bhatti Vikramarka Garu',
        tag: 'Accolades'
    },
    {
        id: 'pe-16',
        image: '/assets/gallery/WhatsApp Image 2026-01-28 at 23.07.59.jpeg',
        desc: 'Launch with Chief Guest',
        tag: 'Public Events'
    }
];
