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
        <title>Lehwa Gold</title>
        <meta name="description" content="Lehwa Gold's Art Portfolio" />
      </Head>

      <header>
        <nav className={[styles.nav] + " " + [styles.sticky]}>
          <h1>Lehwa Gold</h1>
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
            LEHWA <span className={styles.textGold}>GOLD</span>
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
            <h1 id="portfolio">Works</h1>
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
                Lehwa Abad Mago-Gold, a talented Filipina artist, possesses a great passion for painting that emanates from the depths of her heart. Through her vivid brushstrokes and bold color choices, she brings to life vibrant artworks that capture the essence of her artistic vision.
              </p>
              <br></br>
              <p>
              In the face of the global pandemic that brought a long confinement, Lehwa found solace and refuge in the world of art. Secluded from the outside world for months on end, she turned to painting as a means of expressing her emotions, unearthing a newfound joy in imbuing her artwork with significance.
              </p>
              <br></br>
              <p>
              There are instances when Lehwa envisions a specific message and skillfully brings it to life on her canvas. Works such as &quot;Repentance and Simplicity&quot; and &quot;I See You&quot; serve as prime examples of her intentional storytelling through art. However, there are also moments when she spontaneously paints from the depths of her being, allowing her emotions to guide each stroke of the brush.
              </p>
              <br></br>
              <p>
              Despite her lack of formal education, Lehwa&apos;s insatiable thirst for knowledge pushed her to commence on online educational programs and continuously honing her skills and expanding her artistic repertoire. She wholeheartedly acknowledges the experiences, both positive and negative, that have shaped her life. To her, these encounters serve as invaluable lessons that she carries with her throughout her journey of existence. They also serve as inexhaustible wells of inspiration, fueling her artistic creations. Lehwa, hopes that others can resonate with her work and find inspiration within, for she believes that there is no greater reward than uplifting those who may find themselves in the same darkness she once experienced.
              </p>
              <br></br>
              <p>
              In Lehwa&apos;s artistic endeavors, the brush becomes a conduit for emotional release, creativity, and connection. Her dedication to personal growth and her unwavering desire to touch the lives of others through her art exemplify the impact that art can have on both the artist and those who engage with it. Lehwa&apos;s vibrant paintings serve as a testament to the transformative power of artistic expression, expressing the beauty that lies within the human spirit.
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
