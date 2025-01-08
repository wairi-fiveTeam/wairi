import Image from "next/image";
import styles from "../app/member/Page.module.css";
import Apple from "../../public/images/apple.svg";
import GooglePlay from "../../public/images/google_play.svg";
import Phone from "../../public/images/phone_wairi_splash_short.png";
import Link from 'next/link';

export default function MemberDownload() {
  return (
    <div className={styles.Download}>
      <div className={styles.BackRepeat}>
        <div className={styles.DownloadIn}>
          <div className={styles.DownloadInFrame}>
            <h1
              style={{
                fontWeight: "600",
                fontSize: "24px",
                color: "#424242",
                textAlign: "center",
              }}
            >
              와이리 가입하기
            </h1>
            <div className={styles.Buttons}>
              <button className={styles.Button1}>
              <Link href={'https://apps.apple.com/kr/app/%EC%99%80%EC%9D%B4%EB%A6%AC/id6471933852'}
              target="_blank">
                <div className={styles.DivButton1}>
                  <Image
                    src={Apple}
                    alt='Apple'
                    width={12}
                    height={12}
                    className={styles.Icon}
                  />
                  <p style={{ marginLeft: "0px" }}>APP Store</p>
                </div>
                </Link>
              </button>
          
              <button className={styles.Button1}>
                <Link href={'https://play.google.com/store/apps/details?id=com.wairiInc.wairi'}
                 target="_blank">
                  <div className={styles.DivButton1}>
                    <Image
                    src={GooglePlay}
                    alt='GooglePlay'
                    width={12}
                    height={12}
                    className={styles.Icon}
                    />
                  <p style={{ marginLeft: "0px" }}>Google Play</p>
                  </div>
                </Link>
              </button>
            </div>
          </div>
          <div className={styles.PhoneImgWrapper}>
            <Image src={Phone} alt='Phone' width={280} height={280} />
          </div>
        </div>
      </div>
    </div>
  );
}
