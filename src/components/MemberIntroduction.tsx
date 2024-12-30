import Image from "next/image";
import styles from "../app/member/Page.module.css";
import channelIcon0 from "../../public/images/channel_icon_0.svg";
import channelIcon1 from "../../public/images/channel_icon_1.svg";
import channelIcon2 from "../../public/images/channel_icon_2.svg";
import channelIcon3 from "../../public/images/channel_icon_3.svg";
import channelIcon4 from "../../public/images/channel_icon_4.svg";
import channelIcon5 from "../../public/images/channel_icon_5.svg";
import introduction_calendar from "../../public/images/introduction_calendar.svg";
import introduction_check from "../../public/images/introduction_check.svg";
import introduction_grade_silver from "../../public/images/introduction_grade_silver.svg";
import introduction_grade_gold from "../../public/images/introduction_grade_gold.svg";
import introduction_grade_black from "../../public/images/introduction_grade_black.svg";

export default function MemberIntroduction() {
  return (
    <div className={styles.Intro}>
      <div>
        <p style={{ color: "#2EC8C8", fontWeight: "400", fontSize: "14px" }}>
          INTRODUCTION
        </p>
        <h1
          style={{
            color: "#424242",
            fontWeight: "700",
            fontSize: "26px",
            marginTop: "6px",
            marginBottom: "28px",
          }}
        >
          와이리 인플루언서가 되어야 하는 이유!
        </h1>
        {/* 첫번째, SNS 채널만 가지고 있다면! 섹션 */}
        <div className={styles.box}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "26px",
              margin: "10px",
              paddingTop: "60px",
              paddingLeft: "40px",
              color: "#424242",
            }}
          >
            SNS 채널만 가지고 있다면!
          </h2>
          <h3
            style={{
              fontWeight: "400",
              fontSize: "20px",
              paddingTop: "8px",
              paddingLeft: "50px",
              paddingBottom: "40px",
              color: "#424242",
            }}
          >
            와이리는 타 체험단 사이트와 비교하여 <br/>가장 
            많은 SNS 종류를 승인해드리고 있어요!
          </h3>
          <div className={styles.boxin}>
            <Image
              src={channelIcon0}
              alt='ChannelIcon0'
              width={40}
              height={40}
            />
            <Image
              src={channelIcon1}
              alt='ChannelIcon1'
              width={40}
              height={40}
            />
            <Image
              src={channelIcon2}
              alt='ChannelIcon2'
              width={40}
              height={40}
            />
            <Image
              src={channelIcon3}
              alt='ChannelIcon3'
              width={40}
              height={40}
            />
            <Image
              src={channelIcon4}
              alt='ChannelIcon4'
              width={40}
              height={40}
            />
            <Image
              src={channelIcon5}
              alt='ChannelIcon5'
              width={40}
              height={40}
            />
          </div>
        </div>
        {/* 두번째, 원하는 날짜에 신청가능 섹션 */}
        <div className={styles.box2}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "26px",
              padding: "50px",
              paddingTop: "80px",
              paddingBottom: "0px",
              color: "#424242",
            }}
          >
            원하는 날짜에 신청가능
          </h2>
          <h3
            style={{
              fontWeight: "400",
              fontSize: "20px",
              padding: "50px",
              paddingTop: "15px",
              color: "#424242",
            }}
          >
            정해진 날짜가 아닌, 원하는 시기에 캠페인을 신청할 수 있습니다.
            <p />
            이제 본인이 원하는 시기에 체험하세요!
          </h3>
          <Image
            src={introduction_calendar}
            alt='introduction_calendar'
            width={384}
            height={384}
            className={styles.introduction_calendar}
          />
        </div>
        {/* 세번째, 체험 선정 여부 96시간 이내 섹션 */}
        <div className={styles.box3}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "26px",
              padding: "50px",
              paddingTop: "80px",
              paddingBottom: "0px",
              color: "#424242",
            }}
          >
            체험 선정 여부 96시간 이내
          </h2>
          <h3
            style={{
              fontWeight: "400",
              fontSize: "20px",
              padding: "50px",
              paddingTop: "25px",
              color: "#424242",
            }}
          >
            빠른 결과 안내를 통해 여행을 차질 없이 계획해보세요.
          </h3>
          <Image
            src={introduction_check}
            alt='introduction_check'
            width={384}
            height={384}
            className={styles.introduction_check}
          />
        </div>
        {/* 네번째, 와이리가 인증하는 영향력 등급을 받아보세요 섹션 */}
        <div className={styles.box4}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "26px",
              color: "#424242",
              paddingTop: "10px",
              
            }}
          >
            와이리가 인증하는 <p />
            영향력 등급을 받아보세요
          </h2>
          <h3
            style={{
              fontWeight: "400",
              fontSize: "20px",
              paddingTop: "20px",
              color: "#424242",
            }}
          >
            와이리는 채널에 따라 예상 영향력에 따라서 등급을 부여하고 있습니다.
            <p />
            와이리에서 인증하는 인플루언서가 되어보세요.
          </h3>
          <p
            style={{
              fontWeight: "300",
              fontSize: "14px",
              paddingTop: "2px",
              color: "#BDBDBD",
            }}
          >
            *채널 승급은 매월말에 신청을 받고 있습니다.
          </p>
          <div className={styles.gradebox}> 
            <Image
              src={introduction_grade_silver}
              alt='introduction_grade_silver'
              width={181}
              height={525}
            />
            <Image
              src={introduction_grade_gold}
              alt='introduction_grade_gold'
              width={181}
              height={525}
            />
            <Image
              src={introduction_grade_black}
              alt='introduction_grade_black'
              width={181}
              height={525}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
