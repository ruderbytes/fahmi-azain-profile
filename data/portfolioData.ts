export interface Project {
    name: string;
    date: string;
    tags: string[];
    description: string;
    longDescription: string;
    link?: string; // Make link optional
  }
  
  // Replace the old projects array with this new one
  export const projects: Project[] = [
    {
      name: 'Langaroo',
      date: '2024 - Present',
      tags: ['Kotlin', 'Google Maps', 'CleverTap', 'Agora', 'Firebase', 'Git', 'API'],
      description: 'An Android social media app developed collaboratively with the team at Appsolutive, featuring text, image, video, and voice note posts, as well as live streaming. Built using Kotlin with MVVM architecture, integrated with Firebase Cloud Messaging, Crashlytics, and RESTful API communication for data exchange.',
      link: 'https://play.google.com/store/apps/details?id=com.langaroo',
    },
    {
      name: 'NRA (Natari Remote Attendance)',
      date: '2022 - Present',
      tags: ['Flutter', 'Dart', 'Google Maps', 'Riverpod', 'API', 'Dio', 'Git'],
      description: 'An Android app for attendance tracking, surveys, and data management, developed using Flutter with Riverpod for state management and Dio for network communication. Integrated with geolocation services and RESTful APIs for real-time data retrieval and submission.',
      longDescription: '',
      link: 'https://play.google.com/store/apps/details?id=id.natari.nra'
    },
    {
      name: 'Tawafin',
      date: '2024',
      tags: ['React Native', 'TypeScript', 'LiveKit', 'Firebase', 'Git', 'API'],
      description: 'A Android app designed to guide Umrah and Hajj pilgrims, developed using React Native. The app leverages various tools such as LiveKit for live streaming, cloud messaging, Google Maps, and integrates seamlessly with RESTful APIs.',
      link: 'https://play.google.com/store/apps/details?id=com.tawafin',
    },
    {
      name: 'Mirae',
      date: '2023',
      tags: ['Kotlin', 'Firebase', 'XML', 'API', 'Google Maps', 'Git', 'MVVM'],
      description: 'A dedicated member application for ordering products directly from PT Mirae Distributor Indonesia, developed using Kotlin with MVVM architecture. Integrated with Firebase Cloud Messaging and Crashlytics, and implements RESTful API communication for real-time data exchange.',
      longDescription: '',
      link: 'https://play.google.com/store/apps/details?id=id.co.mirae',
    },
    {
      name: 'Jumpa',
      date: '2023',
      tags: ['Kotlin', 'XML', 'Firebase', 'Git', 'Google Auth', 'API'],
      description: 'An Android application built with Kotlin and MVVM architecture, utilizing Firebase Authentication, Cloud Messaging, and Crashlytics. Implements RESTful API integration for real-time data fetching and submission',
      longDescription: '',
      link: '',
    },
    {
      name: 'Karvan for Sales',
      date: '2022',
      tags: ['API', 'Git', 'Firebase', 'MVVM', 'Kotlin', 'Google Maps', 'XML'],
      description: 'An Android app for sales representatives to manage and deliver orders to retailer locations, developed using Kotlin with MVVM architecture, integrated with Firebase Cloud Messaging, Crashlytics, Google Maps, and RESTful APIs for real-time data synchronization.',
      longDescription: '',
      link: 'https://play.google.com/store/apps/details?id=id.muson.karvan.sales',
    },
    {
      name: 'Karvan for Retailer',
      date: '2022',
      tags: ['Kotlin', 'Firebase', 'MVVM', 'XML', 'API', 'Google Maps', 'Git'],
      description: 'An Android retail app for online shopping from distributors, tailored for users registered in the Karvan system, developed using Kotlin with MVVM architecture, Firebase Cloud Messaging and Crashlytics, and seamless RESTful API integration for real-time data exchange.',
      longDescription: '',
      link: 'https://play.google.com/store/apps/details?id=id.muson.karvan.retailer',
    },
    {
      name: 'Waruung',
      date: '2021',
      tags: ['MVVM', 'Git', 'Google Maps', 'XML', 'API', 'Firebase', 'Kotlin'],
      description: 'Waruung is an Android app developed as a social entrepreneurship platform focused on serving community needs, built using Kotlin with MVVM architecture. It integrates Firebase Authentication, Cloud Messaging, Crashlytics, Google Maps, and RESTful APIs for seamless data exchange.',
      longDescription: '',
      link: 'https://play.google.com/store/apps/details?id=com.lemonavy.waruung',
    },
    {
      name: 'Waruung for Admin',
      date: '2021',
      tags: ['Google Maps', 'API', 'Firebase', 'Kotlin', 'XML', 'Git', 'MVVM'],
      description: 'Waruung Admin is an Android app for managing platform data, developed using Kotlin with MVVM architecture. It integrates Firebase Cloud Messaging, Crashlytics, and RESTful API communication for efficient data handling.',
      longDescription: '',
      link: 'https://play.google.com/store/apps/details?id=com.lemonavy.waruungcom',
    },
    {
      name: 'Online Kubar(Kubar OK)',
      date: '2020',
      tags: ['Kotlin', 'MVVM', 'Firebase', 'XML', 'API', 'Git'],
      description: 'An Android app for civil registry and population services in West Kutai, developed using Kotlin with MVVM architecture. Integrated with Firebase Cloud Messaging, Crashlytics, and RESTful APIs for real-time data processing and communication.',
      longDescription: '',
      link: 'https://play.google.com/store/apps/details?id=asia.thortech.satupintukubar',
    },
  ];
  
  export interface SkillCategory {
    name: string;
    skills: string[];
  }
  
  export const skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      skills: ['Kotlin', 'Java', 'Dart', 'SQL', 'PHP', 'VB', 'TypeScript'],
    },
    {
      name: 'Frameworks, OS & Tools',
      skills: [
          'GCP', 'Google Maps API', 'Google Places API', 'Google Auth', 'ImageKit', 'Jetpack Compose', 'Play Console',
          'Firebase', 'Retrofit', 'Volley', 'Dio', 'Riverpod', 'Room', 'SQLite', 'Socket', 'MySQL', 'Socket', 'LiveKit',
          'REST', 'JSON', 'XML', 'Git', 'Postman', 'Yii', 'MacOS', 'Linux', 'VS Code', 'Android Studio',
      ],
    },
  ];

  export interface Experience {
    year: string;
    title: string;
    company: string;
    location: string;
    description: string;
  }
  
  export const experiences: Experience[] = [
    {
      year: 'Dec 2022 - Present',
      title: 'Software Engineer',
      company: 'Freelance',
      location: 'Jember, East Java',
      description: `
      Developed and maintained Android applications using Kotlin, Java, Flutter, and React Native while following Clean Architecture principles. Key projects included Mirae, an e-commerce platform for distributors; Jumpa, a business networking application; NRA, a remote attendance app; and UI/feature revamps for PetaWallet (Ethereum wallet) and Towafin (Umrah app). Worked on API integration, Google Maps, Firebase services, push notifications, and CleverTap analytics.`,
    },
    {
      year: 'Dec 2021 – Nov 2022',
      title: 'Software Engineer',
      company: 'PT. Muson Solusi Nusantara',
      location: 'South Jakarta, Jakarta',
      description: 'Developed Karvan apps for sales and retail, focusing on Kotlin, API integration, and Firebase features in a fully remote setting.',
    },
    {
      year: 'Aug 2020 – Nov 2021',
      title: 'Software Engineer',
      company: 'PT QODR Bee Berinovasi',
      location: 'Bantul, Yogyakarta',
      description: 'Developed utility apps handling scheduling, accessibility, and local data using Room database and Kotlin.',
    },
    {
      year: 'May 2020 – Dec 2020',
      title: 'Software Engineer',
      company: 'PT Thortech Asia',
      location: 'Samarinda, East Kalimantan',
      description: 'Developed Kubar OK app for government services with clean architecture, covering civil records and citizen registration features.',
    },
    {
      year: 'Feb 2019 – Dec 2019',
      title: 'Software Engineer',
      company: 'Amins Project Teknologi Indonesia',
      location: 'Madiun, East Java',
      description: 'Developed apps like Desa Aman, Silat ATK (POS), and Si Pintar using Kotlin, Java, Firebase, and REST APIs.',
    },
  ];