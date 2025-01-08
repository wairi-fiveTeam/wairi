import Image from "next/image";
import styles from "../app/member/Page.module.css";
import ReviewBox1 from "../../public/images/review_img_influencer.png";
import quote1 from "../../public/images/quote.svg";
import quote2 from "../../public/images/quote.svg";
import quote3 from "../../public/images/quote.svg";

export default function MemberReview() {
  return (
    <div className={styles.Review}>
      <div className={styles.ReviewIn} >
        <h2 className='text-[14px] text-[#2EC8C8]'>
          REVIEW
        </h2>
        <h3 className='text-[28px] leading-9 max-md:pb-[24px]max-md:pt-[4px] text-[#424242] font-bold pt-[6px] pb-[26px] mt-1 mb-7'>
          400개의 업체와 마케팅을
          함께하고 있습니다
        </h3>
        <div className={styles.ReviewBoxs}>
          <div className={styles.ReviewBox1}>
            {/* 첫번째 리뷰박스 */}
            <Image
              src={ReviewBox1}
              alt='ReviewBox1'
              width={1000}
              height={1000}
              objectFit="cover"
              quality={100}
              className={styles.ReviewBoxImg}
            />
            <Image
              src={quote1}
              alt='quote1'
              width={50}
              height={50}
              className={styles.quote1}
            />

            <h3 className={styles.Writter}>
              네이버 블로거 B님
            </h3>
            <h3 className={styles.Write}>
              처음에는 인플루언서 협업 제안을 받았을 때, 이 가격에 정말 이용이 가능한지 반신반의 했는데, 정말 모든 상품을 90% 할인 가격에 내가 원하는 날 이용할 수 있는 곳이었어요.
            </h3>
            </div>
            {/* 두번째 리뷰박스 */}
            <div className={styles.ReviewBox2}>
              <Image
                src={quote2}
                alt='quote2'
                width={384}
                height={384}
                className={styles.quote2}
              />
              <h3 className='font-bold text-base text-white mt-[60px] ml-5'>
                인스타그래머 J님
              </h3>
              <h3 className='font-normal text-[15px] text-white mx-auto py-[6px] px-5'>
                위치가 좋은 숙소가 많아 너무 좋습니다. 저 같이 여행 피드를 제작하는 사람들한테는 너무 좋은 플랫폼이에요 ㅠㅠ
              </h3>
            </div>
            {/* 세번째 리뷰박스 */}
            <div className={styles.ReviewBox3}>
              <Image
                src={quote3}
                alt='quote3'
                width={384}
                height={384}
                className={styles.quote3}
              />
              <h3 className='font-bold text-base text-white mt-[60px] ml-5'>
                유튜버 B님
              </h3>
              <h3 className='font-normal text-[15px] text-white mx-auto py-[6px] px-5'>
                70만원 럭셔리 호텔 2박 3일 패키지 상품을 7만원에 친구랑 같이 갔다왔어요. 제가 원하는 시기에 신청할 수 있어 여행 겸 콘텐츠 제작 겸 떠나기에 너무 좋아요!
              </h3>
            </div>
          </div>
        </div>
      </div>
  );
}
