import Hero from "@/components/home/Hero/Herosection";
import Activities from "@/components/home/Activities/ActivitiesSection";
import BlogSection from "@/components/home/blog/BlogSection";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";


export default function HomeLandingPage() {
  return (
    <main className={styles.main}>
      <section id="hero"><Hero /></section>
      <section id="activities"><Activities /></section>
      <section id="blog"><BlogSection /></section>
    </main>
  );
}