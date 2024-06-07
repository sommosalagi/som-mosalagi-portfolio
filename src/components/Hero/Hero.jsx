import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Som"
        ></img>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        ></img>
      </div>
      <div className={styles.info}>
        <h1>
          SOM
          <br />
          MOSALAGI
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://twitter.com/sommosalagi" target="_blank">
            <img src={twitterIcon} alt="Twitter icon"></img>
          </a>
          <a href="https://github.com/sommosalagi" target="_blank">
            <img src={githubIcon} alt="Github icon"></img>
          </a>
          <a href="https://linkedin.com/sommosalagi" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon"></img>
          </a>
        </span>
        <p className={styles.description}>With a passion for developing modern React web apps for commercial businesses.</p>
        <a href={CV} download>
            <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero