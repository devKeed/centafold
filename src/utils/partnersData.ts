import partner1 from "/images/new-images/1.jpeg";
import partner2 from "/images/new-images/2.jpeg";
import partner3 from "/images/new-images/3.jpeg";
import partner4 from "/images/new-images/4.jpeg";
import partner5 from "/images/new-images/5.jpeg";
import partner6 from "/images/new-images/6.png";
import partner7 from "/images/new-images/7.jpeg";
import partner8 from "/images/new-images/8.jpeg";
import partner9 from "/images/new-images/9.png";
import partner10 from "/images/new-images/10.jpeg";



interface Partner {
  name: string;
  logo: string;
}

export const partners: Partner[] = [
  { name: "Blusalt", logo: `${partner1}` },
  { name: "CCP", logo: `${partner2}` },
  { name: "KayVee Microfinance Bank Limited", logo: `${partner3}` },
  { name: "Bitachon", logo: `${partner4}` },
  { name: "Meristem", logo: `${partner5}` },
  { name: "Me Cure Healthcare Limited", logo: `${partner6}` },
  { name: "Ngcom", logo: `${partner7}` },
  { name: "Tmdk Terminal", logo: `${partner8}` },
  { name: "Stratos Trading", logo: `${partner9}` },
  { name: "Harvesters Ajah", logo: `${partner10}` },
];
