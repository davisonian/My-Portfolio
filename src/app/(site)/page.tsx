import PortfolioLanding from "@/components/Portfolio/PortfolioLanding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ian Davison | Entry-Level Full-Stack Developer",
  description: "Personal portfolio for Ian Davison, an entry-level full-stack developer focused on practical web development and technical support systems.",
};

export default function Home() {
  return <PortfolioLanding />;
}
