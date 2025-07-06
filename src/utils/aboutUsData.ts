import aboutUsImage1 from "/images/11.png";
import aboutUsImage2 from "/images/lrn.png";
import aboutUsImage3 from "/images/exp.png";
import aboutUsImage4 from "/images/teach.png";

interface MissionItem {
  description: string;
}

interface AboutUsItem {
  title: string;
  description: string;
  imageUrl: string;
  reverse: boolean;
  missionList?: MissionItem[];
}

export const aboutUsData: AboutUsItem[] = [
  {
    title: "About Us",
    description:
      "The mission is basically to assist companies in achieving sustainable growth and success by focusing on customer satisfaction and service excellence. Centafold Consult's approach is centered around understanding the unique challenges faced by each client and providing practical, actionable recommendations to drive improvement.\n\nWe offer a range of consulting services tailored to meet the specific needs of each client. Our team of experienced consultants works closely with businesses to identify their pain points in service delivery and develop customized solutions to address them.",
    imageUrl: `${aboutUsImage1}`,
    reverse: false,
    missionList: [
      {
        description: "Help companies enhance their service delivery",
      },
      {
        description: "Setting new standards of excellence in their industries",
      },
      {
        description: "Setting new standards of excellence in their industries",
      },
    ],
  },
  {
    title: "Customer Service Transformation",
    description:
      "Centafold Consults specializes in helping brand design and implement service strategies to enhance your brand's customer service experience, fostering lasting connections with your clientele",
    imageUrl: `${aboutUsImage2}`,
    reverse: true,
  },
  {
    title: "Service Quality Assessment",
    description:
      "Conducting comprehensive assessments to evaluate the quality of service delivery and identify areas for enhancement. Centafold also helps in assisting organizations in creating a culture that prioritizes service excellence and customer-centricity.",
    imageUrl: `${aboutUsImage3}`,
    reverse: false,
  },
  {
    title: "Training and Development, Business Empowerment",
    description:
      "Providing customized training programs to equip employees with the skills and knowledge needed to deliver exceptional service. This helps build enduring relationships and drive sustainable revenue growth.",
    imageUrl: `${aboutUsImage4}`,
    reverse: true,
  },
];
