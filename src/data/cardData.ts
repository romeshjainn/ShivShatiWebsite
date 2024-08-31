export const cardData = [
  {
    route: "/aws",
    img:
      "data:image/png;base64,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",
    title: "Amazon Web Services (AWS)",
    description: "Unlock the power of cloud computing with AWS! Our AWS course provides comprehensive training on cloud services, including computing, storage, and database management, to help you become an AWS certified professional.",
    duration: "6 Months",
    oldPrice:"70,000",
    newPrice:"20,000",
    offerValidTill:"30 Sep, 2024"
  },
  {
    route:"web-development",
    img: "data:image/png;base64,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",
    title: "Web Development",
    description: "Learn the fundamentals of web development and become a proficient web developer. This course covers HTML, CSS, JavaScript, and modern frameworks to build interactive and responsive websites from scratch.",
    duration: "6 Months",
    oldPrice:"65,000",
    newPrice: "20,000",
    offerValidTill:"30 Sep, 2024"
  },
  {
    route: "/native-development",
    img: "data:image/jpeg;base64,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",
    title: "Android / iOS Development",
    description: "Dive into mobile app development with our Android and iOS courses. Gain expertise in building apps for both platforms using native and cross-platform technologies to create engaging and functional mobile experiences.",
    duration: "6 Months",
    oldPrice:"70,000",
    newPrice:"20,000",
    offerValidTill:"30 Sep, 2024"
  }
];
