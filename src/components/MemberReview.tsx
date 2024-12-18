import Image from 'next/image';
import styles from '../app/member/Page.module.css';
import ReviewBox1 from '../../public/review_img_influencer.png';
import quote1 from '../../public/quote.svg';
import quote2 from '../../public/quote.svg';
import quote3 from '../../public/quote.svg';

export default function MemberReview() {
  return (
    <div className={styles.Review}>
      <div className={styles.ReviewIn}>
        <h4 style={{ fontWeight: '400', fontSize: '28px', color: '#2EC8C8', marginTop: '10px' }}>REVIEW</h4>
        <h1 style={{ fontWeight: '700', fontSize: '48px', color: '#424242', marginTop: '12px' }}>
          400개의 업체와 마케팅을 <br />
          함께하고 있습니다
        </h1>
        <div className={styles.ReviewBox}>
          {/* 첫번째 리뷰박스 */}
          <Image src={ReviewBox1} alt='ReviewBox1' width={384} height={384} className={styles.ReviewBox1} />
          <Image src={quote1} alt='quote1' width={384} height={384} className={styles.quote1} />

          <h3
            style={{ fontWeight: '700', fontSize: '28px', color: 'white', marginTop: '300px', marginLeft: '-1210px' }}
          >
            네이버 블로거 B님
          </h3>
          <h3 style={{ fontWeight: '400', fontSize: '28px', color: 'white', marginTop: '0px', marginLeft: '32px' }}>
            처음에는 인플루언서 협업 제안을 받았을 때, 이 가격에 정말
            <br /> 이용이 가능한지 반신반의 했는데, 정말 모든 상품을 90%
            <br /> 할인 가격에 내가 원하는 날 이용할 수 있는 곳이었어요.
          </h3>
          {/* 두번째 리뷰박스 */}
          <div className={styles.ReviewBox2}>
            <Image src={quote2} alt='quote2' width={384} height={384} className={styles.quote2} />
            <h3 style={{ fontWeight: '700', fontSize: '28px', color: 'white', marginTop: '120px', marginLeft: '32px' }}>
              인스타그래머 J님
            </h3>
            <h3
              style={{
                fontWeight: '400',
                fontSize: '28px',
                color: 'white',

                margin: 'center',
                paddingTop: '10px',
                paddingLeft: '30px',
                paddingRight: '30px',
              }}
            >
              위치가 좋은 숙소가 많아 너무 좋습니다. 저 같이 여행 피드를 제작하는 사람들한테는 너무 좋은 플랫폼이에요
              ㅠㅠ
            </h3>
          </div>
          {/* 세번째 리뷰박스 */}
          <div className={styles.ReviewBox3}>
            <Image src={quote3} alt='quote3' width={384} height={384} className={styles.quote3} />
            <h3 style={{ fontWeight: '700', fontSize: '28px', color: 'white', marginTop: '40px', marginLeft: '32px' }}>
              유튜버 B님
            </h3>
            <h3
              style={{
                fontWeight: '400',
                fontSize: '28px',
                color: 'white',
                margin: 'center',
                paddingTop: '10px',
                paddingLeft: '30px',
                paddingRight: '30px',
              }}
            >
              70만원 럭셔리 호텔 2박 3일 패키지 상품을 7만원에 친구랑 같이 갔다 왔어요. 제가 원하는 시기에 신청할 수
              있어 여행 겸 콘텐츠 제작 겸 떠나기에 너무 좋아요!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
