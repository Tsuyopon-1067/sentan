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
            <img src="https://github.com/Tsuyopon-1067/sentan/blob/main/pages/img/head.png" />

          </div>
          <div className="bottomBar">
          </div>

        <h1 className="contents">Contents</h1>
        <div>
            <section className="elements"><a href="soft.html">
                <h1>
                    <div className="soft"></div><nobr>フリーソフト</nobr>
                </h1>
                <img src="https://github.com/Tsuyopon-1067/sentan/blob/main/pages/img/soft.png" alt="フリーソフト" />
                <p>PC向けフリーソフトウェア。<br />日々の作業の効率化を。</p>
            </a></section>
            <section className="elements"><a href="prog.html">
                <h1>
                    <div className="prog"></div><nobr>競プロ解説</nobr>
                </h1>
                <img src="https://github.com/Tsuyopon-1067/sentan/blob/main/pages/img/prog.png" alt="フリーソフト" />
                <p>競技プログラミングサイト<br />Atcoderの問題の解説。</p>
            </a></section>
            <section className="elements"><a href="others.html">
                <h1>
                    <div className="others"></div><nobr>その他記事</nobr>
                </h1>
                <img src="https://github.com/Tsuyopon-1067/sentan/blob/main/pages/img/others.png" alt="その他" />
                <p>その他の雑他なコンテンツ。<br />旅行記・日記等を放置。</p>
            </a></section>
        </div>


        <div>
            <img className="prof" src="https://github.com/Tsuyopon-1067/sentan/blob/main/pages/img/prof.jpg" alt="プロフィール画像" />
            <div className="info">
                <table>
                    <tr>
                        <td className="prof_l">名前< /td>
                        <td className="prof_r">つよぽん< /td>
                    < /tr>
                    <tr>
                        <td className="prof_l">性別< /td>
                        <td className="prof_r">男性< /td>
                    < /tr>
                    <tr>
                        <td className="prof_l">年齢< /td>
                        <td className="prof_r">おおよそ20歳< /td>
                    < /tr>
                    <tr>
                        <td className="prof_l">所属< /td>
                        <td className="prof_r">静岡大学 情報学部 情報科学科< /td>
                    < /tr>
                    <tr>
                        <td className="prof_l">居住< /td>
                        <td className="prof_r">静岡県< /td>
                    < /tr>
                    <tr>
                        <td className="prof_l">出身< /td>
                        <td className="prof_r">奈良県< /td>
                    < /tr>
                </table><br />
                <a href="https://twitter.com/Tsuyopon_1067" target="_blank" rel="noopener noreferrer"><img src="https://github.com/Tsuyopon-1067/sentan/blob/main/pages/img/prof_tw.png" />Twitter(@Tsuyopon_1067)</a><br />
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><img src="https://github.com/Tsuyopon-1067/sentan/blob/main/pages/img/prof_github.png" />GitHub< /a>
            </div>
        </div>

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
