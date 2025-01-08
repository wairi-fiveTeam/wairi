"use client";
import Image from "next/image";
import Link from 'next/link';
import styles from "../app/member/Page.module.css";
import banner_influencer from "../../public/images/banner_influencer.png";
import { useEffect, useState } from 'react';

export default function MemberBanner() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.Banner}>
      <div className={styles.BannerIn}>
        <div className={styles.BannerText}>
        <h1 className={styles.BannerText1}>인플루언서 광고가 필요하신가요?</h1>
        <Link href={'/'}>
        <h1 className={styles.BannerText2}>
          무료로 하는 와이리 마케팅 알아보기
        </h1>
        </Link>
        </div>
        {!isSmallScreen && (
          <Image
            src={banner_influencer}
            alt='banner_influencer'
            width={0}
            height={0}
            className={styles.banner_influencer}
          />
        )}
      </div>
    </div>
  );
}
