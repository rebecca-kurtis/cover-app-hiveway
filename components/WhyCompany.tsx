import React from "react";

interface WhyCompanyProps {}

export const WhyCompany: React.FC<WhyCompanyProps> = ({}) => {
  return (
    <div className="whyCompanyContainer" id="why-company">
      <h2 className="whyContainerH2">What I love about Hiveway</h2>
      <p>Here are some fact that I really like about the Company:</p>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          1. Hiveway helps small businesses grow their business and thrive
        </h4>
        <p>
          Hiveway aim&apos;s to help businesses streamline their online payment
          system integration with stripe, which can be confusing if you have no
          technical expertise.
        </p>
      </div>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          2. Client experience is very important to Hiveway
        </h4>
        <p>
          Hiveway&apos;s methods are designed to provide an intuitive and
          seamless experience to allow for a client&apos;s payment system to be
          online sooner and function more efficiently. Having worked with small
          businesses that utilize stripe, I know firsthand how it can be
          difficult to integrate it into every day operations without a more
          technical background. I love that this is where Hiveway has decided to
          focus and thrive!
        </p>
      </div>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          3. Great and supportive team environment
        </h4>
        <p>
          Teamwork, creativity, and adaptability are all values that resonate
          with me. I work well independently but also collaboratively. I think
          being able to collaborate and work with a team on a task lets
          creativity blossom and I truly love seeing the ideas and brainstorming
          that can come out of it! I thrive working on engaging and challenging
          projects and pride myself on being able to dig in and help where
          needed. While researching Hiveway, I was pleased to discover
          that it has a strong team of people who are compassionate and
          supportive (and fun!) which makes it a special place to work. I would
          be proud to join your team!
        </p>
      </div>
    </div>
  );
};
