import teamMember1 from "/images/team_01.webp";
import teamMember2 from "/images/team_02.webp";
import teamMember3 from "/images/team_03.webp";
import teamMember4 from "/images/team_04.webp";
import teamMember5 from "/images/team_05.webp";
import teamMember6 from "/images/team_06.webp";
import teamMember7 from "/images/team7.jpg";

interface TeamMember {
  name: string;
  designation: string;
  image: string;
  linkedin: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ufoma Thompson",
    designation: "Founder and Managing Director",
    image: `${teamMember1}`,
    linkedin:
      "https://www.linkedin.com/in/ufoma-thompson?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Olusade Paul-Rotua",
    designation: "Senior Human Resources Consultant",
    image: `${teamMember2}`,
    linkedin:
      "https://www.linkedin.com/in/olusade-paul-rotua-acipm-acipd-gphr-hrl-8b63239/",
  },
  {
    name: "Doubra Oluwatominiyi",
    designation: "Senior Business Consultant",
    image: `${teamMember3}`,
    linkedin:
      "https://www.linkedin.com/in/doubraoluwatominiyi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Chioma Jennifer",
    designation: "Senior Customer Service Consultant",
    image: `${teamMember4}`,
    linkedin:
      "http://linkedin.com/in/chioma-jennifer-oti-gphr®️-sphri™️-acipm-b8635814b",
  },
  {
    name: "Tosan Thompson",
    designation: "Senior Research Consultant",
    image: `${teamMember5}`,
    linkedin: "https://www.linkedin.com/in/sarahwilson",
  },
  {
    name: "Olatunde Adeitan",
    designation: "Chief Technical Officer",
    image: `${teamMember6}`,
    linkedin: "https://www.linkedin.com/in/davidlee",
  },
  {
    name: "Omatseyin Thompson",
    designation: "Head of Research",
    image: `${teamMember7}`,
    linkedin: "https://www.linkedin.com/in/chrisevans",
  },
];
