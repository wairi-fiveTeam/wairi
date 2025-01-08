'use client';
import { useState } from 'react';
import Image from 'next/image';

type QuestionItem = {
  question: string;
  answer: string | React.ReactNode;
};

export default function MemberQuestion() {
  const questionData: QuestionItem[] = [
    {
      question: 'Q. 누구나 이용할 수 있나요?',
      answer: '민감한 주제(정치 등)를 다루는 sns 거나, 비공개 계정이거나, 게시물이 없는 계정, 기타 사유로 와이리 활동에 적합하지 않다고 판단되는 sns가 아닌 경우 이용이 가능합니다. 다만, 이용자 선정은 업체에서 직접 이루어지며, 등급에 따라 신청 가능한 상품이 다를 수 있습니다.',
    },
    {
      question: 'Q. 등급별로 어떤 차이가 있나요?',
      answer: '와이리에는 실버,골드,블랙 총 3가지의 등급이 있습니다. 등급에 따라 신청할 수 있는 캠페인에 차이가 있습니다. 참고로 블랙 등그의 경우 상위 소수 인원에게만 부여되며, 비정기적으로 추가 모집을 진행하고 있습니다.',
    },
    {
      question: 'Q. 등급은 어떤 기준으로 부여되나요?',
      answer: (
        <div className='overflow-hidden'>
          <a
            href='https://www.wairi.co.kr/influencer/board/view/notice/108'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#2EC8C8] hover:underline break-words inline'
          >
            https://www.wairi.co.kr/influencer/board/view/notice/108
          </a>&nbsp;에 명시된 기준을 참고해 주세요. 해당 기준은 최소 기준이며, 와이리 자체 내부 기준(프로그램 사용 여부, 진성 팔로워 비율 등)에 따라 등급 산정이 결정됩니다.
          <br />
         </div>
      ),
    },
    {
      question: 'Q. 원하는 날짜에 신청이 가능한가요?',
      answer:
        '네, 원하시는 날짜에 신청이 가능합니다. 그러나 선정은 업체 측 의사에 따라 진행되기에 선정이 되지 않을 수 있는 점 참고 부탁드립니다. 선정 후에는 환불이 불가하며 페널티가 발생할 수 있으니 신중한 신청 부탁드립니다.',
    },
    {
      question: 'Q. 선정된 후의 이용 절차는 어떻게 되나요?',
      answer:
        '예약된 시간에 맞춰 방문하시어 캠페인을 이용하시고, 이용 완료 후 7일 이내로 포스팅 초안을 업로드해 주셔야 합니다. 포스팅 작성 시 가이드라인을 반드시 확인해 주시고, 초안을 성실히 작성해 주시기 바랍니다. 최종 업로드는 초안 검수가 완료된 후 진행이 가능합니다.',
    },
    {
      question: 'Q. 환불 또는 취소 규정이 어떻게 되나요?',
      answer:
      '결제 시간 기준 2시간 이내 취소 시 100% 환불이 진행되며, 이후에 취소하실 경우에는 환불이 불가합니다. 업체 측과 상의 후 취소의 경우에 와이리 측으로 알려야 하며, 와이리에 알리지 않을 경우 발생하는 모든 문제는 와이리에서 책임지지 않습니다.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className='w-full max-w-[860px] pt-[10px] pb-[80px] px-[100px] mx-auto max-md:py-[20px] max-md:px-[32px]'>
      {/* 제목 */}
      <div>
        <h2 className='text-[14px] text-[#2EC8C8]'>QUESTION</h2>
        <h3 className='text-[28px] leading-9 max-md:pb-[24px]max-md:pt-[4px] text-[#424242] font-bold pt-[6px] pb-[26px]'>
          자주 묻는 질문
        </h3>
      </div>

      {/* 질문과 답변 */}
      <div className='flex flex-col gap-[16px]'>
        {questionData.map((item, index) => (
          <div key={index} className='rounded-[20px] bg-[#F5F5F5] overflow-hidden'>
            {/* 질문 버튼 */}
            <button onClick={() => toggleFaq(index)} className='w-full text-start'>
              <div className='flex justify-between items-center py-[14px] px-[26px] text-[16px]'>
                <h4 className='text-[#424242] font-medium'>{item.question}</h4>
                <div
                  className={`transform transition-transform duration-300 ease-in-out ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <Image src='/images/arrow_Down.svg' alt='화살표' width={12} height={12} />
                </div>
              </div>
            </button>

            {/* 답변 부분 */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className='overflow-hidden'>
                <div className='mx-[26px] h-px bg-[#757575] border-[#757575]'></div>
                <div className='py-[14px] px-[26px] text-[#757575] whitespace-pre-line text-[12px]'>{item.answer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
