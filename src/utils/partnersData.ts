import partner1 from "/images/wallets.png";
import partner2 from "/images/sonora.png";
import partner3 from "/images/cellar_central.jpg";
import partner4 from "/images/partners_and_clients_02.webp";
import partner5 from "/images/partners_and_clients_03.webp";
import partner6 from "/images/limh.jpg";
import partner7 from "/images/partners_and_clients_05.webp";
import partner8 from "/images/partners_and_clients_06.webp";
import partner9 from "/images/pt7.jpg";
import partner10 from "/images/pt9.png";

interface Partner {
  name: string;
  logo: string;
}

export const partners: Partner[] = [
  { name: "Wallets", logo: `${partner1}` },
  { name: "Sonora", logo: `${partner2}` },
  { name: "Cellar Central", logo: `${partner3}` },
  { name: "Bovas & Company Limited", logo: `${partner4}` },
  { name: "Josien", logo: `${partner5}` },
  { name: "Lagos Island Maternity Hospital", logo: `${partner6}` },
  { name: "Regia and Reina", logo: `${partner7}` },
  { name: "Robert Clarke San & Ade Oshodi Partners", logo: `${partner8}` },
  { name: "Bees and Roots", logo: `${partner9}` },
  { name: "Brick & Brian Properties Limited", logo: `${partner10}` },
];
