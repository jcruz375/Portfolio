import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Site pessoal/Portfólio desenvolvido por João Cruz. Para quem possa interessar.
      </p>
      <div className={styles.contacts}>
        <a target="_blank" href="https://www.linkedin.com/in/joao-cruz375/"> <IoLogoLinkedin /> </a>
        <a target="_blank" href="https://github.com/jcruz375"> <IoLogoGithub /> </a>
      </div>
    </footer>
  );
};