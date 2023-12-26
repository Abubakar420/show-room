import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/harisp.JPG";
import waleed from "../images/waleed.jpg";

/**
 * Represents the About Me section.
 * Displays information about the user.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={
              inView
                ? { x: 0, opacity: 1, scale: 1 }
                : { x: "-10vw", opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>
                <b> Meet Haris - The Driving Force Behind Our Showroom👋🏻</b>
              </motion.h4>
              {/* <motion.h5 variants={paragraphVariants}>
                I'm Haris Naeem Owner At Rasheed Motor
                <span style={{ color: "var(--hl-color)" }}>.</span>
              </motion.h5> */}

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  Greetings, automotive enthusiasts! I am Haris, the proud owner
                  and driving force behind
                  <span style={{ color: "var(--hl-color)" }}>
                    {" "}
                    Rasheed Motor{" "}
                  </span>
                  With a passion for automobiles that runs deep in my veins, I
                  embarked on a journey to create a haven for fellow car
                  connoisseurs.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  As the steward of this automotive sanctuary, my vision goes
                  beyond merely showcasing cars; it's about curating an
                  experience. With an unwavering commitment to quality,
                  innovation, and customer satisfaction, I've cultivated an
                  environment where every vehicle tells a unique story.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  At{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    {" "}
                    Rasheed Motor{" "}
                  </span>
                  , we are not just selling cars; we are facilitating dreams,
                  aspirations, and a lifestyle defined by the open road. Join me
                  on this thrilling journey as we explore the world of
                  automotive excellence together.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={
              inView
                ? { x: 0, opacity: 1, scale: 1 }
                : { x: "-10vw", opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={waleed} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>
                <b>Haris Introduces the Visionary Partner, Waleed Naeem</b> 👋🏻
              </motion.h4>
              {/* <motion.h5 variants={paragraphVariants}>
                I'm Waleed Naeem Owner At Rasheed Motor
                <span style={{ color: "var(--hl-color)" }}>.</span>
              </motion.h5> */}

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  Embarking on the thrilling journey of automotive excellence, I
                  am delighted to introduce my esteemed partner, Waleed Naeem,
                  the co-pilot in steering the success of{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    {" "}
                    Rasheed Motor{" "}
                  </span>
                  With a shared passion for innovation and an unwavering
                  commitment to delivering excellence, Waleed brings a dynamic
                  energy to our showroom.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  In the world of luxury automobiles, precision and dedication
                  define our mission, and Waleed's expertise perfectly
                  complements this vision. Together, we are not merely selling
                  cars; we are crafting an unparalleled experience for our
                  clients. Waleed's keen insight into the finer nuances of
                  automotive aesthetics ensures that every vehicle in our
                  showroom is a masterpiece in its own right. As we navigate the
                  fast lanes of the industry, the synergy between Haris and
                  Waleed at{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    {" "}
                    Rasheed Motor{" "}
                  </span>
                  promises a journey where luxury, innovation, and customer
                  satisfaction converge seamlessly. Buckle up for a ride where
                  distinction meets dedication, and join us as we redefine
                  automotive elegance under the expert guidance of Waleed Naeem.
                </motion.p>
                <br />
              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View Showroom" />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
