import NicotineImg from "../assets/projects/NicotineImage.png";
import BuyMeSite from "../assets/projects/BuyMeSite.png";
import AndroidApp from "../assets/projects/AndroidApp.png";
import project5 from"../assets/projects/Stock Image.jpg";
import ChessStart from "../assets/projects/ChessStart.jpg";
// import WFLogo from "../assets/WFLogo.png";


export const HERO_CONTENT = 'Hello! I am an undergraduate student at Rutgers University, pursuing a Bachelor of Science in Computer Science with a minor in Business Administration. I have a strong interest in data science and plan to pursue a masters degree in either data science or computer science in the future. Additionally, I am keen on exploring data engineering or software developer roles. I am set to graduate in January 2025.';

export const ABOUT_TEXT = 'I am a dedicated student and developer with a passion for data science and web development. I have been in the field of computer science for roughly about 2 years and have worked with a variety of technologies, including Java, Python, React, MySQL, and MongoDB. My passion in computer science came later in my studies when I started developing my own personal projects. My projects started fairly small, from simple client based text games to static web sites. My drives stem from the end goal of seeing my efforts and work be completed in any type of development. Outside of coding and learning, I enjoy exercising, hiking, and much more! ';
                          

export const EXPERIENCES = [
  {
    year: "July 2022 - Present",
    role: "iOS Mobile Application Developer",
    company: "PulseTech",
    description: `I have been developing applications in Swift and Xcode, focusing on HomeKit and HealthKit frameworks. I lead daily SCRUM meetings, which have improved team productivity by 10%, and ensure the confidential handling of project details, maintaining 100% compliance with NDA regulations.`,
    technologies: ["Swift", "SwiftUI", "Xcode"],
    // image: WFLogo
  },
];

export const PROJECTS = [
  {
    title: "Predicting Housing Markets + Dashboard (On-going)",
    image: project5,
    description:
      "This ongoing project aims to predict housing market trends using machine learning algorithms. The project involves developing a user-friendly dashboard that provides visual insights into the housing market predictions. The backend is powered by Python and Flask, while the frontend is built using React.js. The project also utilizes AWS for hosting and deployment, and Scikit-learn for implementing the machine learning models",
    technologies: ["Python","React.js","Flask","AWS","Scikit-learn","Git","REST API"],
    href: ""
  },
  {
    title: "Nicotine Trends: Analyzing Addiction Across Age Groups",
    image: NicotineImg,
    description:
      "This project focuses on analyzing nicotine addiction trends across different age groups. Data is collected using web scraping techniques with Beautiful Soup and analyzed using Pandas and Matplotlib. The insights are documented in Jupyter Notebooks, providing a comprehensive analysis of nicotine trends and their implications.",
    technologies: ["Python", "Pandas", "Matplotlib", "Beautiful Soup", "Jupyter Notebooks"],
    href: "https://github.com/leijason22/NicotineTrends2"
  },
  {
    title: "BuyMe: Advanced Online Auction Platform",
    image: BuyMeSite,
    description:
      "Led a team of developers to create BuyMe, a full-stack online auction platform. The application supports user registration, auction listings, and bidding functionalities. It is built using Java for the backend, MySQL for the database, and JavaScript, HTML, and JDBC for the front end. The platform is hosted on a local Tomcat server.",
    technologies: ["Java", "JavaScript", "HTML", "MySQL","JDBC","Tomcat"],
    href: "https://github.com/BENJIVN/BuyMeSite-"
  },
  {
    title: "Mobile Phone Manager Application",
    image: AndroidApp,
    description:
      "This project started as a Java program using Scene Builder for the user interface and was later migrated to an Android application. The mobile app allows users to manage and organize their photos efficiently. The transition to Android Studio involved redesigning the interface with JavaFX and FXML and optimizing it for mobile use.",
    technologies: ["Java", "JavaFX", "FXML", "Android Studio", "Scene Builder"],
    href: "https://github.com/BENJIVN/Android-Photo-Album"
  },
  {
    title: "Terminal Chess",
    image: ChessStart,
    description:
      "Terminal Chess is a command-line based chess game implemented in Java. The project demonstrates Object-Oriented Programming (OOP) principles such as polymorphism and inheritance. The game includes features like move validation, check, and checkmate detection, providing an engaging experience for users.",
    technologies: ["Java"],
    href: "https://github.com/BENJIVN/Chess"
  },
];

export const CONTACT = {
  address: "7 Bayberry Ave, Egg Harbor Township, NJ ",
  phoneNo: "(609)-233-7267",
  email: "bvn6@scarletmail.rutgers.edu",
};
