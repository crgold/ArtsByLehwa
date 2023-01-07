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

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  images: {
    width: number;
    height: number;
    public_id: string;
  }[];
};

export default function Home({ images }: Props) {
  const imageData: {
    width: number;
    height: number;
    public_id: string;
  }[] = images;
  //imageData.map(image => console.log(image));
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
          className={styles.headerPicture}
          src={artistPic}
          alt="The artist Lehwa Gold"
          width={400}
          height={400}
          priority
        />
      </header>

      <main>
        <section>
          <div className={styles.galleryTitle}>
            <h1>My Works</h1>
          </div>
          <div className={styles.imageGrid}>
            {imageData.map((image, key) => (
              <CldImage
                className={styles.galleryImg}
                key={key}
                width={image.width}
                height={image.height}
                src={image.public_id}
              />
            ))}
          </div>
        </section>
        <section>
          <div className={styles.aboutTitle}>
            <h1>About Me</h1>
          </div>
          <div className={styles.aboutSection}>
            <Image
            className={styles.aboutPicture}
            src={lehwaAngel}
            alt="The artist Lehwa Gold creating the painting called Angel"
            width={400}
            height={400}
            />
            <div className={styles.aboutBio}>
              <p>Lehwa was born in the small town of Lugait in Misamis Oriental, Mindanao. She is a self-taught artist who creates both digital and traditional acrylic art. During the pandemic, she discovered her passion for art and has never looked back. Day after day, she goes from one work of art to the next, dreaming of what she will paint next, sleeping with a stylus in hand.</p>
              <br></br>
              <p>Sadly, growing up, she had to endure many hardships and abuses. Despite how painful this period of her life was, she is thankful for the hardships as they have helped her become a stronger person. She finds artistic inspiration in the stories of people with the courage to stand up for themselves. It is these stories, and her personal experiences, she often draws from when she puts her brush to canvas. She wants to inspire women to be strong. To connect with them through her art to let them know they are not alone and that we are all in this life together.</p>
              <br></br>
              <p>According to her, &quot;As with life, being creative has no limit. If you can imagine it, you can create it&quot;. Her art has been exhibited in Art Show Philippines (Reinterpreting Religious Art. April 2022) as well as U.S. based Light Space & Time Gallery (&quot;All Women&quot; Art Exhibition 2022)</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTitle}>
            <h1>Let&apos;s Connect</h1>
        </div>
      </footer>
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

// function to call api and get image data from cloudinary

/* export const getStaticProps : GetStaticProps = async () => {
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
*/
