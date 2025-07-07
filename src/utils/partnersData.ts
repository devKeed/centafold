import partner1 from "/images/wallets.png";
import partner2 from "/images/sonora.png";
// import partner3 from "/images/cellar_central.jpg";
import partner4 from "/images/partners_and_clients_02.webp";
import partner5 from "/images/partners_and_clients_03.webp";
import partner6 from "/images/limh.jpg";
import partner7 from "/images/partners_and_clients_05.webp";
import partner8 from "/images/partners_and_clients_06.webp";
import partner9 from "/images/pt7.jpg";
import partner10 from "/images/pt9.png";
import partner11 from "/images/x1.jpeg";
import partner12 from "/images/x2.jpeg";
import partner13 from "/images/x3.jpeg";
import partner14 from "/images/x4.jpeg";
import partner15 from "/images/x5.jpeg";
import partner16 from "/images/x6.jpeg";
import partner17 from "/images/x7.png";


interface Partner {
  name: string;
  logo: string;
}

export const partners: Partner[] = [
  { name: "Wallets", logo: `${partner1}` },
  { name: "SonoraCapital & Investment", logo: `${partner2}` },
  // { name: "Cellar Central", logo: `${partner3}` },
  { name: "Bovas Oil & Gas", logo: `${partner4}` },
  { name: "Josien", logo: `${partner5}` },
  { name: "Lagos Island Maternity Hospital", logo: `${partner6}` },
  { name: "Regis and Reina", logo: `${partner7}` },
  { name: "Robert Clarke San & Ade Oshodi Partners", logo: `${partner8}` },
  { name: "BeesRoots", logo: `${partner9}` },
  { name: "Brick & Brian Properties Limited", logo: `${partner10}` },
  { name: "Wema Bank", logo: `${partner11}` },
  { name: "Petrocam", logo: `${partner12}` },
  { name: "Nedcomoaks", logo: `${partner13}` },
  { name: "Megamound", logo: `${partner14}` },
  { name: "Mentor Intro Africa", logo: `${partner15}` },
  { name: "Polaris Bank", logo: `${partner16}` },
  { name: "KHNL", logo: `${partner17}` },
];
