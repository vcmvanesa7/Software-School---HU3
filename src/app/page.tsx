import Hero from "@/components/home/Hero/Herosection";
import Activities from "@/components/home/Activities/ActivitiesSection";
import BlogSection from "@/components/home/blog/BlogSection";
import Footer from "@/components/home/Footer/Footer";

export default function HomeLandingPage() {
  return (
    <>
      <Hero />
      <Activities />
      <BlogSection />
      <Footer />
    </>
  );
}
