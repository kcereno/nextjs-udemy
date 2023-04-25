import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import avatar from '../../../public/images/site/cats.png';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src={avatar}
          alt="me"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Karl</h1>
      <p>I blog about web stufdfff</p>
    </section>
  );
};

export default Hero;
