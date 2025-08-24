import React from "react";
import ServiceCard from "./ServiceCard";
import ServiceCardV2 from "./ServiceCardV2";

export default function Services() {
  return (
    <section className="">
      <ServiceCard
        title={"EXPERIMENTAL MARKETING & ACTIVATION"}
        description={
          "We create immersive brand experiences that leave lasting impressions. From live events to interactive campaigns, our experiential strategies connect brands with audiences in memorable, meaningful ways, driving brand loyalty and positive impact on the bottom line"
        }
        imageUrl={"/precious.jpeg"}
      />
      <ServiceCardV2
        title={"DIGITAL MARKETING"}
        description={
          "We deploy creative and innovative digital marketing strategies that drive growth, customer acquisition, and brand visibility. By leveraging data-driven insights and cutting-edge tools, we create campaigns that resonate with audiences across multiple digital channels. From SEO to social media marketing and paid advertising, our approach ensures that each campaign aligns with your brand’s goals and delivers measurable results in customer engagement and acquisition."
        }
        imageUrl={"/precious.jpeg"}
      />
      <ServiceCard
        title={"EVENT MANAGEMENT"}
        description={
          "We bring brands to life through meticulously planned and flawlessly executed events. From corporate gatherings to product launches, our innovative approach ensures each event delivers memorable experiences and achieves strategic goals."
        }
        imageUrl={"/precious.jpeg"}
      />
      <ServiceCardV2
        title={"POP CULTURE MARKETING"}
        description={
          "By tapping into cultural trends and consumer passions, we create campaigns that resonate. Our innovative strategies leverage music, art, fashion, and social movements to forge deep connections between brands and their audiences."
        }
        imageUrl={"/precious.jpeg"}
      />
      <ServiceCard
        title={"COPYWRITING"}
        description={
          "Our copywriting transforms ideas into compelling messages that inspire action. Whether it’s an advertising campaign, website content, or email marketing, our creative narratives help brands stand out and achieve their objectives."
        }
        imageUrl={"/precious.jpeg"}
      />
      <ServiceCardV2
        title={"CREATIVE DESIGN"}
        description={
          "Our design team turns concepts into visually stunning assets that tell your story at a glance. From branding to digital assets, we ensure creativity and innovation shine through every design, capturing audience attention and delivering impact."
        }
        imageUrl={"/precious.jpeg"}
      />
      <ServiceCard
        title={"CONTENT CREATION"}
        description={
          "At III, we understand that content is the backbone of any successful marketing strategy. Our team of storytellers, designers, and strategists work together to craft engaging, high-quality content that drives action."
        }
        imageUrl={"/precious.jpeg"}
      />
      <ServiceCardV2
        title={"INFLUENCER MARKETING"}
        description={
          "We harness the power of influencers to amplify your brand’s story and connect authentically with your target audience. Our approach is strategic and data driven, ensuring that every collaboration aligns perfectly with your brand identity and goals."
        }
        imageUrl={"/precious.jpeg"}
      />
      <ServiceCard
        title={
          "EVENT PRODUCTION & BOOTH FABRICATION: BRINGING YOUR BRAND TO LIFEAt"
        }
        description={
          "LIFE At III, we create immersive event experiences through top-notch event production and custom booth fabrication.We design and build captivating spaces that reflect your brand’s essence, ensuring guests don’t just attend your event—they live it.From concept to execution, our team delivers the perfect look and feel for your event, creating environments that inspire interaction, spark engagement, and leave lasting impressions. With every detail crafted to perfection, we ensure your brand connects with your audience in a meaningful and memorable way.With III, your event isn’t just an occasion—it’s an experience."
        }
        imageUrl={"/precious.jpeg"}
      />
    </section>
  );
}
