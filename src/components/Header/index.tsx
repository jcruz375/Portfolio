import { IoLogoLinkedin } from 'react-icons/io'
import { IoLogoGithub } from 'react-icons/io'
import { IoLogoAndroid } from 'react-icons/io'

import styles from "./header.module.scss";

export function Header() {
  return (
    <div className={styles.headerContent}>
      <header>
        <div className={styles.LinkHome}>
          <a href="/"> <IoLogoAndroid /> </a>
        </div>
        <div className={styles.links}>
          <a href=""> Sobre mim </a>
          <a href=""> Projetos </a>
          <a href=""> Conhecimentos </a>
          <a href=""> Ocupações </a>
        </div>
        <div className="contacts">
          <a target="_blank" href="https://www.linkedin.com/in/joao-cruz375/"> <IoLogoLinkedin /> </a>
          <a target="_blank" href="https://github.com/jcruz375"> <IoLogoGithub /> </a>
        </div>
      </header>
    </div>
  )
}