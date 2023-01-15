import Head from "next/head";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import artistPic from "../public/lehwa.webp";
import lehwaAngel from "../public/lehwaAngel.webp";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Playfair_Display, Montserrat } from "@next/font/google";
import fsPromises from "fs/promises";
import path from "path";
import { GetStaticProps } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faArtstation,
} from "@fortawesome/free-brands-svg-icons";
import {
  faImage,
  faUser,
  faPaperPlane,
  faFaceSmileBeam,
} from "@fortawesome/free-regular-svg-icons";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  images: {
    width: number;
    height: number;
    public_id: string;
    alt: string;
  }[];
};

export default function Home({ images }: Props) {
  const imageData: {
    width: number;
    height: number;
    public_id: string;
    alt: string;
  }[] = images;
  // imageData.map(image => console.log(image));
  return (
    <div className={playfair.className}>
      <Head>
        <title>Arts By Lehwa</title>
        <meta name="description" content="Lehwa Gold's Art Portfolio" />
      </Head>

      <header>
        <nav className={[styles.nav] + " " + [styles.sticky]}>
          <h1>Arts By Lehwa</h1>
          <ul>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="#about" className={styles.navMenuMargin}>
                About Me
              </Link>
            </li>
            <li>
              <Link href="#contact" className={styles.navMenuMargin}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="https://drybrush.com/artists/lehwa-gold" target="_blank" rel="noreferrer" className={[styles.navMenuMargin] + " " + [styles.gold]}>
                Purchase
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
            HELLO!
            <br />
            I&apos;M LEHWA <span className={styles.textGold}>GOLD</span>
          </h1>
          <h2>
            painter <span className={styles.textRed}>/</span> digital artist
          </h2>
        </div>
        <Image
          className={styles.headerPicture}
          src={artistPic}
          alt="The artist Lehwa Gold"
          width={400}
          height={400}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          priority
        />
      </header>

      <main>
        <section>
          <div className={styles.galleryTitle}>
            <h1 id="portfolio">My Works</h1>
          </div>
          <div className={styles.imageGrid}>
            {imageData.map((image, key) => (
              <CldImage
                className={styles.galleryImg}
                key={key}
                width={image.width}
                height={image.height}
                sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                src={image.public_id}
                alt={image.alt}
              />
            ))}
          </div>
        </section>
        <section>
          <div className={styles.aboutTitle}>
            <h1 id="about">About Me</h1>
          </div>
          <div className={styles.aboutSection}>
            <Image
              className={styles.aboutPicture}
              src={lehwaAngel}
              alt="The artist Lehwa Gold creating the painting called Angel"
              width={400}
              height={400}
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                      33vw"
            />
            <div className={[styles.aboutBio] + " " + [montserrat.className]}>
              <p>
              Lehwa is a Filipina who paints from her heart. She loves to paint surrealist artworks using tetradic pallets to create warm, bright paintings.
              </p>
              <br></br>
              <p>
              When the pandemic hit, finding herself unable to go outside for several months, she found an escape through art. She began to express her emotions through painting and a joy in interpreting her artwork to give it a deeper meaning. Sometimes, she thinks of a message and paints it. Just like her &quot;Repentance and Simplicity&quot; and &quot;I See You.&quot; Other times, she paints directly from her heart.
              </p>
              <br></br>
              <p>
              Lehwa did not have formal education. Her hunger for learning has led her to take online education programs and read books to improve herself. She is grateful for what she has been through in her life, both good and bad. To her, these experiences are lessons that she can carry throughout the journey of her existence. These experiences are also her inspirations to create her paintings. She hopes others can relate to her work and feel inspired, as she finds nothing more rewarding than lifting others that may be in a dark place as she once was.
              </p>
              <br></br>
              <p>
                Her art has been exhibited in Art Show Philippines as well as U.S. based Light Space & Time Gallery. Her artwork can be purchased at <a href="https://drybrush.com/artists/lehwa-gold" target="_blank" rel="noreferrer" className={styles.gold}>Drybrush Art Gallery</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerTitle}>
            <h1 id="contact">Let&apos;s Connect</h1>
          </div>
          <p>Taguig City, Metro Manila, Philippines</p>
          <a href="mailto: artsbylehwa@gmail.com">artsbylehwa@gmail.com</a>
          <div className={styles.socialmedia}>
            <a
              href="https://www.facebook.com/ArtsByLehwa"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className={styles.socialIcons}
                icon={faFacebook}
              />
            </a>
            <a
              href="https://twitter.com/artsbylehwa"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className={styles.socialIcons}
                icon={faTwitter}
              />
            </a>
            <a
              href="https://www.instagram.com/artsbylehwa/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className={styles.socialIcons}
                icon={faInstagram}
              />
            </a>
            <a
              href="https://www.artstation.com/lehwagold"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className={styles.socialIcons}
                icon={faArtstation}
              />
            </a>
          </div>
        </div>
        <div className={styles.footerRight}></div>
        <p className={[montserrat.className] + " " + [styles.copyright]}>
          Arts By Lehwa - Copyright 2022 - Created by{" "}
          <a
            className={styles.gold}
            href="https://www.linkedin.com/in/crgold/"
            target="_blank"
            rel="noreferrer"
          >
            Christopher Gold
          </a>
        </p>
      </footer>
      <nav className={styles.mobileNav}>
        <span className={styles.mobileNavItem}>
          <a href="#portfolio">
            <FontAwesomeIcon className={styles.mobileNavIcons} icon={faImage} />
            <br></br>
            Portfolio
          </a>
        </span>
        <span className={styles.mobileNavItem}>
          <a href="#about">
            <FontAwesomeIcon className={styles.mobileNavIcons} icon={faUser} />
            <br></br>
            About
          </a>
        </span>
        <span className={styles.mobileNavItem}>
          <a href="#contact">
            <FontAwesomeIcon
              className={styles.mobileNavIcons}
              icon={faPaperPlane}
            />
            <br></br>
            Contact
          </a>
        </span>
        <span className={[styles.mobileNavItem] + " " + [styles.gold]}>
          <a href="https://drybrush.com/artists/lehwa-gold" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              className={styles.mobileNavIcons}
              icon={faFaceSmileBeam}
            />
            <br></br>
            Purchase
          </a>
        </span>
      </nav>
    </div>
  );
}

// fetch image data from file
export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "images.json");
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  const imageData = JSON.parse(jsonData);

  return {
    props: imageData,
  };
};
