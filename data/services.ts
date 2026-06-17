export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Personal Styling",
    description: "One-on-one styling sessions to help you discover and refine your personal style.",
    icon: "👗"
  },
  {
    id: 2,
    title: "Custom Orders",
    description: "Bespoke pieces crafted to your exact measurements and preferences.",
    icon: "✨"
  },
  {
    id: 3,
    title: "Fashion Consultation",
    description: "Expert advice on building a timeless, versatile wardrobe.",
    icon: "💎"
  },
  {
    id: 4,
    title: "Gift Packaging",
    description: "Beautiful, luxury packaging perfect for any special occasion.",
    icon: "🎁"
  },
  {
    id: 5,
    title: "Delivery Services",
    description: "White-glove delivery and in-home try-on service.",
    icon: "🚚"
  }
];
