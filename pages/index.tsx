import Head from "next/head";
import Image from "next/image";
import artistPic from "../public/lehwa.webp";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Playfair_Display, Montserrat } from "@next/font/google";
import { GetStaticProps } from "next";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={playfair.className}>
      <Head>
        <title>Arts By Lehwa</title>
        <meta name="description" content="Lehwa Gold's Art Portfolio" />
      </Head>

      <header>
        <nav className={styles.nav}>
          <h1>Arts By Lehwa</h1>
          <ul>
            <li>
              <Link href="/#">Portfolio</Link>
            </li>
            <li>
              <Link href="/#about" className={styles.navMenuMargin}>
                About Me
              </Link>
            </li>
            <li>
              <Link href="/#contact" className={styles.navMenuMargin}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <header className={styles.header}>
        <div
          className={
            [styles.headerTextContainer] + " " + [montserrat.className]
          }
        >
          <h1>
            MABUHAY!
            <br />
            I&apos;M LEHWA <span className={styles.textGold}>GOLD</span>
          </h1>
          <h2>
            painter <span className={styles.textRed}>/</span> digital artist
          </h2>
        </div>

        <Image
          className={styles.picture}
          src={artistPic}
          alt="The artist Lehwa Gold"
          width={400}
          height={400}
          priority
        />
      </header>

      <main>
        <section className={styles.portfolioSection}>
          <div className={styles.portfolioTitle}>
            <h1>My Works</h1>
          </div>
          <div className={styles.imageGrid}>
            <Image
              className={styles.galleryImg}
              src="https://source.unsplash.com/random/?city,night/1"
              alt="The artist Lehwa Gold"
              width={250}
              height={250}
            />
            <Image
              className={styles.galleryImg}
              src="https://source.unsplash.com/random/?city,night/2"
              alt="The artist Lehwa Gold"
              width={250}
              height={250}
            />
            <Image
              className={styles.galleryImg}
              src="https://source.unsplash.com/random/?city,night/3"
              alt="The artist Lehwa Gold"
              width={250}
              height={250}
            />
            <Image
              className={styles.galleryImg}
              src="https://source.unsplash.com/random/?city,night/4"
              alt="The artist Lehwa Gold"
              width={250}
              height={250}
            />
            <Image
              className={styles.galleryImg}
              src="https://source.unsplash.com/random/?city,night/5"
              alt="The artist Lehwa Gold"
              width={250}
              height={250}
            />
            <Image
              className={styles.galleryImg}
              src="https://source.unsplash.com/random/?city,night/6"
              alt="The artist Lehwa Gold"
              width={250}
              height={250}
            />
            <Image
              className={styles.galleryImg}
              src="https://source.unsplash.com/random/?city,night/7"
              alt="The artist Lehwa Gold"
              width={250}
              height={250}
            />
            <Image
              className={styles.galleryImg}
              src="https://source.unsplash.com/random/?city,night/8"
              alt="The artist Lehwa Gold"
              width={250}
              height={250}
            />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps : GetStaticProps = async () => {
  const results: JSON = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API + ":" + process.env.CLOUDINARY_SECRET
        ).toString("base64")}`,
      },
    }
  ).then((r) => r.json());
  console.log("results", results);
  return {
    props: {},
  };
};
