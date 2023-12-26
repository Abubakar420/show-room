import { motion } from "framer-motion";

/**
 * Represents a component displaying social media icons.
 *
 * This component displays social media icons with animation effects.
 *
 * @component
 */

const SocialIcons = () => {
  // Define styles for the icons
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      {/* <a
        className="icon"
        style={styles.icon}
        href="https://github.com/Abubakar420"
      >
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Abubakar Rehman' GitHub Profile"
        ></motion.i>
      </a> */}
      {/* <a
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/abubakar-rehman-53439b279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      >
        <motion.i
          initial={{ y1: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5, type: "spring" }}
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Abubakar Rehman' LinkedIn Profile"
        ></motion.i>
      </a> */}
      <a
        className="icon"
        style={styles.icon}
        href="https://www.instagram.com/rasheedmotor8857_official?igsh=OGQ5ZDc2ODk2ZA=="
      >
        {/* Instagram Icon */}
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
          className="fa-brands fa-instagram"
          aria-hidden="true"
          title="Abubakar Rehman' Instagram Profile"
        ></motion.i>
      </a>
      <a className="icon" style={styles.icon} href="https://wa.me/923244065304">
        {/* Twitter Icon */}
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
          className="fa-brands fa-whatsapp"
          aria-hidden="true"
          title="Abubakar Rehman' Twitter Profile"
        ></motion.i>
      </a>
    </div>
  );
};

export default SocialIcons;
