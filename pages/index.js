import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>1067号室〜つよぽんのお部屋〜</title>
        <link href="style.css" media="all" rel="stylesheet" />
         <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <nav><ul>
              <a className="nav nav_cnt" href="index.html"><li>Top</li></a>
              <a className="nav" href="soft.html"><li>Software</li></a>
              <a className="nav" href="prog.html"><li>Programming</li></a>
              <a className="nav" href="others.html"><li>Others</li></a>
              <a className="nav" href="prof.html"><li>Profile</li></a>
          </ul></nav>

          <div className="mainBar">
            <img src="img/head.png" />
          </div>
          <div className="bottomBar">
          </div>

        <h1 className="contents">Contents</h1>
        <div>
            <section className="elements"><a href="soft.html">
                <h1>
                    <div className="soft"></div><nobr>フリーソフト</nobr>
                </h1>
                <img src="img/soft.png" alt="フリーソフト" />
                <p>PC向けフリーソフトウェア。<br />日々の作業の効率化を。</p>
            </a></section>
            <section className="elements"><a href="prog.html">
                <h1>
                    <div className="prog"></div><nobr>競プロ解説</nobr>
                </h1>
                <img src="img/prog.png" alt="フリーソフト" />
                <p>競技プログラミングサイト<br />Atcoderの問題の解説。</p>
            </a></section>
            <section className="elements"><a href="others.html">
                <h1>
                    <div className="others"></div><nobr>その他記事</nobr>
                </h1>
                <img src="img/others.png" alt="その他" />
                <p>その他の雑他なコンテンツ。<br />旅行記・日記等を放置。</p>
            </a></section>
        </div>

        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
             Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

        <h1 classMain="contents">Profile</h1>
        <iframe classMain="prof" src="./prof.html"></iframe>

        <iframe classMain="foot" src="./foot.html"></iframe>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
