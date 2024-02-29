import { Hero } from "@/components/marketing/hero";
import { Testimonials } from "@/components/marketing/testimonials";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <Hero />
      <Testimonials />
    </div>
  );
}
