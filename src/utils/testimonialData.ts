import testimonial from "/images/t1.png";
import testimonial2 from "/images/t2.jpg";

interface Testimonial {
  text: string;
  author: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "Attending this training was truly enlightening. One key takeaway for me is the importance of genuinely saying 'sorry.' I also loved the session on charisma, emphasizing the value of being likable, approachable, and fostering strong relationships with both internal and external customers.",
    author: "BOVAS",
    image: `${testimonial}`,
  },
  {
    text: "The training was incredibly educational and interactive. I enjoyed every moment of it and learned that there's always a way to approach issues, and it's crucial to appreciate individual differences.",
    author: "BOVAS",
    image: `${testimonial2}`,
  },
];
