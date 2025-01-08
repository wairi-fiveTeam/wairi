'use client';
export default function MoreButton() {
  const scrollHandler = () => {
    const footerPosition = document.body.scrollHeight - window.innerHeight;
    if (window.innerWidth < 500) {
      window.scrollTo({
        top: footerPosition - 350, // 현재 위치 + 100px
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: footerPosition, // 현재 위치 + 100px
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <button
        onClick={scrollHandler}
        className="w-[320px] bg-[#2EC8C8] text-[#FFFFFF] rounded-[4px] py-[10px] text-[13px]"
      >
        이용하기
      </button>
    </>
  );
}
