import Card from "./card";

import i1 from "@/public/images/i1.jpg";
import i2 from "@/public/images/i2.jpg";
import i3 from "@/public/images/i3.jpg";
import i4 from "@/public/images/i4.jpg";
import i5 from "@/public/images/i51.jpg";
import i6 from "@/public/images/i6.jpg";
import {Black_Ops_One} from "next/font/google";


const blacko = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
});


export default function Thirdsection() {
  const cards = [
    {
      image: i1,
      title: "BMW M3 E30",
      description: "Motorsport Car",
      
    },
    {
      image: i2,
      title: "BMW 3.0 CSL",
      description: "Classic Coupés",
    },
    {
      image: i3,
      title: "BMW 7 Series E38",
      description: "Luxury Sedan",
    },
    {
      image: i4,
      title: "BMW M1",
      description: "Supercars",
    },
    {
      image: i5,
      title: "BMW Z8",
      description: "Roadsters",
    },
    {
      image: i6,
      title: "BMW M5 E39",
      description: "M Performance",
    },
   
  ];

  return (
    <section className={ `${blacko.className} grid grid-cols-2  `}>
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
}