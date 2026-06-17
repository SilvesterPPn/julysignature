export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Victoria Thompson",
    role: "Fashion Blogger",
    content: "July Signature has completely transformed my wardrobe. The quality and style are unmatched.",
    avatar: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20woman%20avatar%20friendly%20headshot&image_size=square_hd"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Executive",
    content: "Exceptional service and timeless pieces. Worth every penny.",
    avatar: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20man%20avatar%20business%20headshot&image_size=square_hd"
  },
  {
    id: 3,
    name: "Sophia Williams",
    role: "Interior Designer",
    content: "The personal styling service is incredible. I found pieces I never knew I needed.",
    avatar: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20creative%20woman%20avatar%20headshot&image_size=square_hd"
  }
];
