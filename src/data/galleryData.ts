export interface GalleryItem {
    id: string;
    image: string;
    desc: string;
    tag: 'Toppers' | 'Podcasts' | 'Seminars' | 'Public Events' | 'All' | 'Testimonials' | 'Accolades';
    videoUrl?: string;
}

export const galleryData: GalleryItem[] = [
    {
        id: 't-13',
        image: '/assets/gallery/Mr Praveen Dainampally DySP.jpg',
        desc: 'With Mr Praveen Dainampally DySP',
        tag: 'Toppers'
    },
    {
        id: 't-12',
        image: '/assets/gallery/PrachetDSK1.jpg',
        desc: 'With Prachet DSK(AIR - 193)',
        tag: 'Toppers'
    },
    {
        id: 'tm-20',
        image: '/assets/gallery/UPSC AIR 580 Success Story NAGA BHARATH UPSC Topper Testimonial Dr Vivekananda’s IAS Academy.jpg',
        desc: 'UPSC AIR 580 Success Story NAGA BHARATH UPSC Topper Testimonial Dr Vivekananda’s IAS Academy',
        tag: 'Testimonials',
        videoUrl: 'https://www.youtube.com/embed/PUCFrF3DH_Y'
    },
    {
        id: 't-11',
        image: '/assets/gallery/PratyushaKatta.jpg',
        desc: 'With Pratyusha Katta (AIR - 908)',
        tag: 'Toppers'
    },
 
    {
      id: 'tm-8',
        image: '/assets/gallery/UPSC AIR 123 Success Story 🔥Atla Tharunteja UPSC Topper Testimonial  Dr Vivekananda’s IAS Academy.bmp',
        desc: 'Atla Tharun Teja, securing AIR 123 in UPSC Sharing Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/lWn5ULo76PM?si=pnOqq-EXIyda8SAA'
    },
    {
      id: 'tm-9',
        image: '/assets/gallery/Harshitha Medara, securing AIR 520 in UPSC Sharing Experience with Dr. Vivekananda Gadiyaram.jpg',
        desc: 'Harshitha Medara, securing AIR 520 in UPSC Sharing Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/ENC9ElH-iRg?si=UhLX3XR1dE6dsKnH'
    },
    {
       id: 'tm-10',
        image: '/assets/gallery/UPSC AIR 793 Success Story Praveen Dainampally UPSC Topper Testimonial Dr Vivekananda’s IAS Academy.jpg',
        desc: 'Dainampally Dysp on securing AIR 793 in UPSC Sharing Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/atcSnKD1gX0?si=ynh3ngrq66FHdYu-'

    },
    {
        id: 'tm-31',
        image: '/assets/gallery/UPSC AIR 580 Success Story NAGA BHARATH UPSC Topper Testimonial Dr Vivekananda’s IAS Academy.jpg',
        desc: 'NAGA BHARATH on securing AIR 580 in UPSC Sharing Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/PUCFrF3DH_Y?si=xN5QM1lDQpSC-KNG-'

    },
    {
        id: 'tm-32',
        image: '/assets/gallery/UPSC AIR 193 Success Story 🔥 Prachet DSK UPSC Topper Testimonial  Dr Vivekananda’s IAS Academy.jpg',
        desc: ' Prachet DSK on securing AIR 193 in UPSC Sharing Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/o4WoyiirVHw?si=SSgxpNI8IB89Wukc-'
    },
    {
        id: 'tm-34',
        image: '/assets/gallery/UPSC AIR 908 Success Story Dr. Katta Prathyusha UPSC Topper Testimonial Dr Vivekananda’s IAS Academy.jpg',
        desc: '  Dr. Katta Prathyusha on securing AIR 908 in UPSC Sharing Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/KovWjbA1FnI?si=1Mdw4FeptT1FeGzU-'
    },
    {
        id: 'tm-35',
        image: '/assets/gallery/UPSC AIR 55 Success Story 🔥 Srujana Gudelli UPSC Topper Testimonial  Dr Vivekananda’s IAS Academy.jpg',
        desc: '  Srujana Gudelli on securing AIR 55 in UPSC Sharing Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/xe1Xm_TDe_w?si=A2Quckt65H7_Rjhh-'
    },
    {
        id: 'tm-36',
        image: '/assets/gallery/UPSC AIR 510 Success Story 🔥Bhuvana Pranith UPSC Topper Testimonial  Dr Vivekananda’s IAS Academy.jpg',
        desc: '  Bhuvana Pranith on securing AIR 510 in UPSC Sharing Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/Mc5AS2_HEhY?si=_0ZIT3XmS3CXzR_g-'
    },
    {
        id: 'tm-37',
        image: '/assets/gallery/UPSC AIR 93 Success Story 🔥Ch. Yashwanth UPSC Topper Testimonial  Dr Vivekananda’s IAS Academy.jpg',
        desc: '  Ch. Yashwanth on securing AIR 93 in UPSC Sharing Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/q-5qOm3yLbk?si=T6QZz0Lh4ftqFmrv-'
    },
    {
        id: 'tm-38',
        image: '/assets/gallery/UPSC AIR 263 Success Story 🔥A C Preethi UPSC Topper Testimonial Dr Vivekananda’s IAS Academy.jpg',
        desc: '  A C Preethi on securing AIR 263 in UPSC Sharing Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/M8ybxaN3fWA?si=8BD4-LcwkXUMU6kl-'
    },
    {
        id: 'tm-39',
        image: '/assets/gallery/UPSC AIR 60 Success Story 🔥Pranav IAS UPSC Topper Testimonial  Dr Vivekananda’s IAS Academy.jpg',
        desc: '  Pranav IAS on securing AIR 60 in UPSC Sharing Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/_N2uz-nbFrc?si=PG1gJPi3idzna1Ba-'
    },
    {
        id: 'tm-40',
        image: '/assets/gallery/UPSC AIR 173 Success Story 🔥 Penkeesu Dheeraj UPSC Topper Testimonial Dr Vivekananda’s IAS Academy.jpg',
        desc: '  Penkeesu Dheeraj on securing AIR 173 in UPSC Sharing Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/VjwwdPz-MDo?si=S8Bica_bXJ9LDoRZ-'
    },
    {
        id: 'tm-41',
        image: '/assets/gallery/UPSC AIR 28 Success Story 🔥 Mourya Bharadwaj UPSC Topper Testimonial  Dr Vivekananda’s IAS Academy.jpg',
        desc: '  Mourya Bharadwaj on securing AIR 28 in UPSC Sharing Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/rl5fYbQAFY0?si=T2VIQT6KSrU7QFb9-'
    },
    {
        id: 'tm-42',
        image: '/assets/gallery/UPSC AIR 798 Success Story 🔥Sai Bhargav UPSC Topper Testimonial  Dr Vivekananda’s IAS Academy.jpg',
        desc: '  Sai Bhargav on securing AIR 798 in UPSC Sharing Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/92QBnkjS1aE?si=kz3zxnogveT099N4-'
    },
    {
        id: 'tm-43',
        image: 'assets/gallery/UPSC AIR 68 Success Story 🔥Sai Chaitanya Jadhav UPSC Topper Testimonial Dr Vivekananda’s IAS Academy.jpg',
        desc: '  Sai Chaitanya Jadhav on securing AIR 68 in UPSC Sharing Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/_GXILestuFc?si=29WSmCwWKUl-T2vL-'
    },
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
        id: 'p-9',
        image: '/assets/images/as9943.jpg',
        desc: 'From IIT Student to IPS Officer 😲 | Do you know the real struggle? 🚔🔥 | Dr Vivekananda’s IAS Academy',
        tag: 'Podcasts',
        videoUrl: 'https://www.youtube.com/embed/vnhF4SevXR8?si=_7Bqh3G1awH3nrs9'
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
        id: 'p-11323',
        image: '/assets/images/wis333.jpg',
        desc: 'పేరెంట్స్ సపోర్ట్ లేకుండా IAS సాధ్యమా? 😳 విజయవాడ అమ్మాయి సంచలన విజయం 🔥 | Dr Vivekananda IAS',
        tag: 'Podcasts',
        videoUrl: 'https://www.youtube.com/embed/DZLFO16PAe0?si=8A7sLE5uq6VvmLh5' 
    },
    {
        id: 't-7',
        image: '/assets/gallery/toppers/With Bhuvana Pranith Pappula Officer on Special Duty (OSD) in the Public Works Department (PWD) of the West Bengal government.png',
        desc: 'With Bhuvana Pranith Pappula Officer on Special Duty (OSD) in the Public Works Department (PWD) of the West Bengal government.',
        tag: 'Toppers'
    },
    {
        id: 't-8',
        image: '/assets/gallery/toppers/Mr Praveen Dainampally DySP.jpeg',
        desc: 'With Mr Praveen Dainampally DySP',
        tag: 'Toppers'
    },
    {
        id: 'p-10',
        image: '/assets/images/as99432.jpg',
        desc: 'Software Engineer to Deputy Collector 🚀 UPSC Success Story | Dr Vivekananda’s IAS Academy',
        tag: 'Podcasts',
        videoUrl: 'https://www.youtube.com/embed/ditGY5uV8VU?si=xyD8I_NjeFe2HdlM'
    },
    {
        id: 't-9',
        image: '/assets/gallery/toppers/Mr. Kanala Sangeeth Madhur.jpg',
        desc: 'Mr. Kanala Sangeeth Madhur, SDM / RDO, Bheemunipatnam Division, Visakhapathnam',
        tag: 'Toppers'
    },
    {
        id: 'p-11',
        image: '/assets/images/as994313.jpg',
        desc: 'UPSC CSE AIR 123 Atla Tharun Teja నేను IAS అవ్వడానికి అసలు REASON ఇదే!🔥 Dr Vivekananda’s IAS Academy',
        tag: 'Podcasts',
        videoUrl: 'https://www.youtube.com/embed/xELk9AmdMcY?si=36LKxnuZAxDEJPYT'
    },
    {
        id: 'pe-2000',
        image: '/assets/gallery/super-image.jpeg',
        desc: "Anthropology in Real LifeTribal Museum Tour Hyderabad UPSC Anthropology Optional DrVivekananda's IAS",
        tag: 'Public Events'
    },
    {
        id: 'pe-2193',
        image: '/assets/gallery/w2lEss.jpg',
        desc: 'Write to LEAD Essay Competition for UPSC Civil Services Aspirants',
        tag: 'Public Events'
    },


    {
        id: 't-10',
        image: '/assets/gallery/toppers/Ashok V. Dibbada.jpg',
        desc: 'Mr.Ashok V. Dibbada Indian Foreign Service (IFS). Third Secretary (E&C) Embassy of India in Moscow, Russia.',
        tag: 'Toppers'
    },
    {
        id: 'pe-0',
        image: '/assets/gallery/toppers/With Shri Avula Ramesh Reddy Inspector General Police.png',
        desc: 'Warm meet with Shri Avula Ramesh Reddy Inspector General Police',
        tag: 'Public Events'
    },
    {
        id: 't-999',
        image: '/assets/gallery/toppers/With Mr Shashikanth Korravath IRS.jpeg',
        desc: 'With Mr Shashikanth Korravath IRS',
        tag: 'Toppers'
    },
    
    {
         id: 'tm-1',
        image: '/assets/gallery/UPSC AIR 155 Success Story 🔥Dr. Krishna UPSC Topper Testimonial  Dr Vivekananda’s IAS Academy.jpg',
        desc: 'Dr krishna Air 155 (2025) Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/zCdMAEObiiQ?si=M2Eq_yNaQrk6VaCA'

    },
    {
        id: 'tm-2',
        image: '/assets/gallery/UPSC AIR 59 Success Story 🔥Benjo P. Jose UPSC Topper Testimonial  Dr Vivekananda’s IAS Academy.jpg',
        desc: 'Benjo P. Jose Air 59 (UPSC 2023) Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/zgHTmUC_wQU?si=cXemX63qf1ol6J3h'

    },
    {
        id: 'tm-3',
        image: '/assets/gallery/UPSC AIR 526 Success Story 🔥 K. Srinivasulu UPSC Topper Testimonial Dr Vivekananda’s IAS Academy.jpg',
        desc: 'K Srinivasulu Air 526 (UPSC 2023) Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/RH3u5mTxElo?si=t_ZBzBH_cMDJpKEg'
    },
    {
       id: 'tm-4',
        image: '/assets/gallery/UPSC AIR 739 Success Story 🔥Sahana UPSC Topper Testimonial Dr Vivekananda’s IAS Academy.jpg',
        desc: 'Sahana Air 739 (UPSC 2023) Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/TB7Nl6LGGNQ?si=2Ke_aJVDutqN2u2Z'

    },
    {
         id: 'tm-5',
        image: '/assets/gallery/UPSC AIR 169 Success Story 🔥Dr. Vineeth UPSC Topper Testimonial  Dr Vivekananda’s IAS Academy.jpg',
        desc: 'Dr Vineeth Air 169 (UPSC 2023) Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/M-BuDZ1B_Dw?si=7z5m9p_K6L-otz8n'

    },
    {
       id: 'tm-6',
        image: '/assets/gallery/UPSC AIR 554 Success Story 🔥 K. Pranay Kumar UPSC Topper Testimonial Dr Vivekananda’s IAS Academy.jpg',
        desc: 'K Pranay Kumar Air 554 (UPSC 2023) Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/NX6qKfLkE6Y?si=tERiZHwlAKmQVfNC'

    },
    {
        id: 'p-8',
        image: '/assets/images/as223.jpg',
        desc: '3 సార్లు UPSC Prelims Fail ఇప్పుడు IRS Officer UPSC CSE2026 Aspirants Must Watch Dr Vivekananda IAS',
        tag: 'Podcasts',
        videoUrl: 'https://www.youtube.com/embed/4HD4rKnjZLY?si=KTu_ZJ_cLX_l8Ux9'
    },

    {
       id: 'tm-7',
        image: '/assets/gallery/UPSC AIR 315 Success Story 🔥Navpada Ashritha UPSC Topper Testimonial  Dr Vivekananda’s IAS Academy.jpg',
        desc: 'Navpada Ashritha Air 315 (UPSC 2022) Experience with Dr. Vivekananda Gadiyaram',
        tag: 'Testimonials',
        videoUrl: 'https://youtube.com/embed/5dSZ5PnriTg?si=S6rPmLMgHrcmqWw5'

    },
    {
        id: 'p-5',
        image: '/assets/gallery/Laxmi Rachana on ranking AIR 178 in UPSC1.jpg',
        desc: 'Podcast Laxmi Rachana on ranking AIR 178 in UPSC',
        tag: 'Podcasts',
        videoUrl: 'https://www.youtube.com/embed/Sv9N8nBMxyk?si=TLXqfWNJ4Yu2wI2-'
    },
    {
        id: 'p-6',
        image: '/assets/gallery/Pratyusha Katta UPSC AIR-903.jpg',
        desc: 'Podcast with Pratyusha Katta UPSC AIR-903',
        tag: 'Podcasts',
        videoUrl: 'https://www.youtube.com/embed/eYXoKJJjpyM?si=Tr_Tq8AGAagi39P3'
    },
    {
        id: 'p-7',
        image: '/assets/gallery/Prachet DSK UPSC AIR-193.jpg',
        desc: 'Podcast with Prachet DSK UPSC AIR-193',
        tag: 'Podcasts',
        videoUrl: 'https://www.youtube.com/embed/vnhF4SevXR8?si=SbRR6AzTBqAZsbhr'
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
        id: 'p-4',
        image: '/assets/gallery/ted-talk.jpg',
        desc: 'Ted Talk on Embracing the Collective Spirit Through Swadharma ',
        tag: 'Podcasts',
        videoUrl: 'https://www.youtube.com/embed/ndHW7DG1YLg?si=70BUHRe4YarSFHee'
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
        id: 'a-7',
        image: '/assets/gallery/Felicitation by Students of Telangana Study circle.jpg',
        desc: 'Felicitation by Students of Telangana Study circle for STs on Ambedkar Jayanti',
        tag: 'Accolades'
    },
    {
        id: 'a-8',
        image: '/assets/gallery/Mr Shashikanth Korravath IRS.jpg',
        desc: 'Felicitation by Bhatti Vikramarka Garu',
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
        id: 'pe-20',
        image: '/assets/gallery/eve of opening of New offline facility.jpg',
        desc: 'Students congratulating on the eve of opening of New offline facility',
        tag: 'Public Events'
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
        desc: 'Adressing the event at Ted  Talks',
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
        image: '/assets/gallery/Addressing parents at Surya Vidyanikethan.jpg',
        desc: 'Addressing parents at Surya Vidyanikethan',
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
        desc: 'Launch with Chief Guest Jaya Prakash Narayana Sir',
        tag: 'Public Events'
    },
    {
        id: 'pe-17',
        image: '/assets/gallery/Attending Civil Servants Alumni Association.jpg',
        desc: 'Attending Civil Servants Alumni Association Meeting at S V Medical College Tirupati with Dr Dheeraj IPS and Addl SP Kolhapur ',
        tag: 'Public Events'
    },
    {
        id: 'pe-18',
        image: '/assets/gallery/NCC Day Celebrations.jpg',
        desc: 'Chief Guest at NCC Day Celebrations at Nizam College Hyderabad',
        tag: 'Public Events'
    },
    {
        id: 'pe-19',
        image: '/assets/gallery/At TS Study Circle for STs.jpg',
        desc: 'Telangana Study circle for STs',
        tag: 'Public Events'
    }
];
