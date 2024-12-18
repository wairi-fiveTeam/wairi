import Image from 'next/image';
import styles from '../app/member/Page.module.css';
import Apple from '../../public/apple.svg';
import GooglePlay from '../../public/google_play.svg';
import Phone from '../../public/phone_wairi_splash_short.png';

export default function MemberDownload() {
  return (
    <div className={styles.Download}>
      <div className={styles.BackRepeat}>
        <div className={styles.DownloadIn}>
          <div className={styles.DownloadInFrame}>
            <h1
              style={{
                fontWeight: '600',
                fontSize: '24px',
                color: '#424242',
                textAlign: 'center',
              }}
            >
              와이리 가입하기
            </h1>
            <div className={styles.Buttons}>
              <button className={styles.Button1}>
                <div className={styles.DivButton1}>
                  <Image src={Apple} alt='Apple' width={12} height={12} className={styles.Icon} />
                  <p style={{ marginLeft: '0px' }}>APP Store</p>
                </div>
              </button>

              <button className={styles.Button1}>
                <div className={styles.DivButton1}>
                  <Image src={GooglePlay} alt='GooglePlay' width={12} height={12} className={styles.Icon} />
                  <p style={{ marginLeft: '0px' }}>Google Play</p>
                </div>
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
