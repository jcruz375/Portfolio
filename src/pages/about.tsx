import Image from 'next/image';
import styles from '../styles/about.module.scss'

export default function About() {
  return (
    <div className={styles.aboutMain}>
      <Image
        width={700}
        height={700}
        src="/aboutMainImage.png"
        objectFit="unset"
      />
      <aside>
        <h3>Quem sou eu?</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quod vero aliquam dolor hic. Repellendus illum harum consequatur voluptas culpa omnis illo quibusdam ad necessitatibus cupiditate, corporis laudantium a rem.</p>
      </aside>
    </div>
  )
}