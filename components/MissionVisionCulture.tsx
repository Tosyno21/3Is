import React from "react";
import Card from "./Card";

const CardsList: React.FC = () => {
  const cardsData = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "To craft innovative and impactful events and marketing strategies that tell compelling stories, connect brands with their audiences,and drive measurable success.",
      imageUrl: "/lynda.jpg",
      marginTop: "mt-0",
    },
    {
      id: 2,
      title: "Our Vision",
      description:
        "To be the foremost event and marketing agency redefining marketing communications through creativity, innovation, and strategic excellence, shaping iconic brands globally.",
      imageUrl: "/lynda.jpg",
      marginTop: "mt-0 lg:mt-32",
    },
    {
      id: 3,
      title: "Our Culture",
      description:
        "At 3Is, we thrive on great work ethics,collaboration, and cooperation. We foster a supportive and inclusive environment where every team member contributes to creative problem-solving. Our culture is one of mutual respect, constant learning, and a shared commitment to excellence, ensuring our clients receive unmatched value and results.",
      imageUrl: "/lynda.jpg",
      marginTop: "mt-0 lg:mt-64",
    },
  ];

  return (
    <div className="section-custom max-lg: space-y-8 lg:flex gap-6 bg-primary-background items-start">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          marginTop={card.marginTop}
        />
      ))}
    </div>
  );
};

export default CardsList;
