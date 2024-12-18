import Image from 'next/image';
import styles from '../app/member/Page.module.css';
import banner_influencer from '../../public/banner_influencer.png';

export default function MemberBanner() {
  return (
    <div className={styles.Banner}>
      <div className={styles.BannerIn}>
        <h1 className={styles.BannerText1}>인플루언서 광고가 필요하신가요?</h1>
        <h1 className={styles.BannerText2}>무료로 하는 와이리 마케팅 알아보기</h1>
        <Image
          src={banner_influencer}
          alt='banner_influencer'
          width={370}
          height={232}
          className={styles.banner_influencer}
        />
      </div>
    </div>
  );
}
