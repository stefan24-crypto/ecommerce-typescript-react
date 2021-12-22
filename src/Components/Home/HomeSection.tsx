import React, { useEffect, useRef } from "react";
import classes from "./HomeSection.module.css";
import controller from "../../images/xbox-hero.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FeaturedCategories from "./FeaturedCategories";
import FeaturedProducts from "./FeaturedProducts";
import { TimelineMax } from "gsap";
import { gsap } from "gsap";

const HomeSection = () => {
  gsap.registerPlugin(TimelineMax);
  const animate1Ref = useRef<HTMLHeadingElement>(null)!;
  const animate2Ref = useRef<HTMLParagraphElement>(null)!;
  const animate3Ref = useRef<HTMLDivElement>(null)!;

  useEffect(() => {
    const paragraph1 = animate1Ref.current;
    console.log(paragraph1);
    const paragraph2 = animate2Ref.current;
    const divEl = animate3Ref.current;
    const tl = new TimelineMax();
    tl.fromTo(paragraph1, 1, { left: "-1000px" }, { left: "0" })
      .fromTo(paragraph2, 1, { left: "-1000px" }, { left: "0" }, "-=0.7")
      .from(
        divEl,
        {
          duration: 1,
          ease: "elastic.out(1, 1)",
          right: "-1000px",
        },
        "-=0.7"
      );
  }, []);
  return (
    <section className={classes.home}>
      <header className={classes.hero}>
        <div className={classes.content}>
          <h1 ref={animate1Ref} className={classes.animate1}>
            We have the newest technology at the best prices
          </h1>
          <p ref={animate2Ref} className={classes.animate2}>
            Checkout all our products in various categories, offering you the
            best quality money can buy. All while offering you a great user
            experience shopping.
          </p>
        </div>
        <div className={classes.image} ref={animate3Ref}>
          <img src={controller} className={classes.img} alt="hero_img" />
        </div>
      </header>
      <div className={classes.animation}>
        <KeyboardArrowDownIcon
          className={classes.icon}
          sx={{ fontSize: "3rem" }}
        />
      </div>
      <main className={classes.main}>
        <FeaturedCategories />
        <FeaturedProducts />
      </main>
      <footer>
        {/* Add social media and email address here if possible */}
      </footer>
    </section>
  );
};

export default HomeSection;
