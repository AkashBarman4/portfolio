export const profile = {
  name: "Akash Barman",
  roles: [
    "Full-Stack Engineer",
    "Real-Time Systems Builder",
    "React · Node.js · Spring Boot",
  ],
  bio: "I build web applications that hold up under real concurrency - booking systems that never double-book, whiteboards that sync live across users, backends that don't fall over under load. Currently leading frontend architecture across three automotive platforms at Tata Elxsi.",
  email: "akashbarman2606@gmail.com",
  linkedin: "https://www.linkedin.com/in/lethalop4/",
};

export const experience = {
  company: "Tata Elxsi Limited",
  logo: "/tata-elxsi-logo.jpeg",
  startDate: new Date(2023, 5, 1), // June 2023 (month is 0-indexed)
  positions: [
    {
      role: "Senior Engineer - Connected Digital Platform & Solutions",
      start: new Date(2025, 9, 1), // Oct 2025
      end: null, // null = present
      points: [
        "Leading application development, owning architecture, delivery, and production support.",
        "Performed code reviews, VAPT remediation, SonarQube analysis, and AWS Inspector vulnerability fixes.",
      ],
    },
    {
      role: "Engineer - Connected Digital Platform & Solutions",
      start: new Date(2023, 5, 1), // Jun 2023
      end: new Date(2025, 8, 1), // Sep 2025
      points: [
        "Developed web applications using React.js, Node.js, Express.js, and Spring Boot REST APIs.",
        "Implemented Micro Frontends, multi-language support, Secure Routes, and JWT Authentication.",
      ],
    },
    {
      role: "Trainee - CTO's Office",
      start: new Date(2023, 0, 1), // Jan 2023
      end: new Date(2023, 5, 1), // Jun 2023
      points: [
        "Worked with Neo4j Graph Database for graph-based data retrieval and visualization.",
        "Built visualization tools using Ant Design (AntD).",
      ],
    },
  ],
};

export const education = {
  school: "National Institute of Technology, Agartala",
  degree: "Bachelor of Technology in Electronics & Communication Engineering",
  period: "Jul 2019 - May 2023",
  detail: "CGPA: 8.19",
};

export const projects = [
  {
    name: "Flexa - One Solution for GYM Booking",
    tagline: "Gym Booking Platform for Trainers and Members",
    description:
      "A booking system that never double-books a slot, even under concurrent requests at the same second. Trainer schedule changes never disrupt an open booking - backed by an event-driven Kafka-to-Cassandra audit pipeline, Redis-cached availability, and JWT auth with silent refresh.",
    stack: [
      "Java 21",
      "Spring Boot 4",
      "Angular 22",
      "MySQL",
      "Redis",
      "Apache Kafka",
      "Cassandra",
    ],
  },
  {
    name: "Collab Whiteboard",
    tagline: "Real-Time Collaborative Whiteboard",
    description:
      "A multi-user whiteboard with live stroke, cursor, and presence sync over Socket.io and a Redis pub/sub adapter for horizontal scaling. Every stroke is logged to an append-only Cassandra event store, with debounced canvas snapshotting to MongoDB for instant reloads. Auth includes email verification and Cloudflare Turnstile bot protection.",
    stack: [
      "Node.js",
      "Express",
      "Socket.io",
      "React",
      "MongoDB",
      "Redis",
      "Cassandra",
      "JWT",
    ],
  },
];
