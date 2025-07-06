import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ContactDetail {
  icon: IconDefinition;
  label: string;
  info: string;
}

export const contactDetails: ContactDetail[] = [
  {
    icon: faPhone,
    label: "Call us",
    info: "+234-803-368-9454",
  },
  {
    icon: faEnvelope,
    label: "Send us a mail",
    info: "info@centafold.com",
  },
  {
    icon: faWhatsapp,
    label: "Chat us up on Whatsapp",
    info: "+234-803-368-9454",
  },
  {
    icon: faMapMarkerAlt,
    label: "Our Location",
    info: "186b Moshood Olugbani St, Off Ligali Ayorinde, Victoria Island",
  },
];
