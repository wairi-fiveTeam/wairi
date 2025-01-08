'use client';
import { useEffect, useState } from 'react';
import './checkbox.css';

type enquiry = {
  company: string;
  name: string;
  number: string;
  email: string;
};
export default function Enquiry() {
  const [company, setCompany] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const disabledHandler = () => {
    if (
      email.length >= 5 &&
      name.length >= 2 &&
      phoneNumber.length >= 9 &&
      company.length >= 2 &&
      checked === true
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  useEffect(() => {
    disabledHandler();
  }, [company, name, phoneNumber, email, checked]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="w-full bg-[#424242] border-b solid border-[#616161]">
        <div className="w-[746px] m-auto flex flex-col min-[320px]:max-md:w-full mt-10 pb-8">
          <div className="flex flex-col items-center text-[#FFFFFF] gap-2 mt-8">
            <h1 className="font-medium text-[24px]">문의하기</h1>
            <p className="text-center font-normal text-[#BDBDBD] text-[15px]">
              저희 와이리를 찾아주셔서 감사합니다. 연락처와 함께 아래 항목
              작성해주시면,
              <br />
              담당자 확인 후 상담 도와드리도록 하겠습니다.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 min-[320px]:max-[500px]:grid-cols-1 min-[320px]:max-[500px]:pl-[20px]">
                <div className="flex flex-col min-[320px]:max-[500px]:mt-6">
                  <label
                    className="text-[15px] text-[#FFFFFF]"
                    htmlFor="회사명"
                  >
                    회사명
                  </label>
                  <input
                    className="bg-[#616161] rounded-[2px] py-[4px] w-[90%] text-[#FFFFFF] outline-none"
                    type="text"
                    name="company"
                    id=""
                    value={company}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCompany(e.target.value)
                    }
                  />
                  <span className="checked"></span>
                </div>
                <div className="flex flex-col min-[320px]:max-[500px]:mt-6">
                  <label
                    className="text-[15px] text-[#FFFFFF]"
                    htmlFor="담당자명"
                  >
                    담당자명
                  </label>
                  <input
                    className="bg-[#616161] rounded-[2px] py-[4px] w-[90%] text-[#FFFFFF] outline-none"
                    type="text"
                    id=""
                    name="name"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setName(e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col mt-6">
                  <label
                    className="text-[15px] text-[#FFFFFF]"
                    htmlFor="담당자 연락처"
                  >
                    담당자 연락처
                  </label>
                  <input
                    className="bg-[#616161] rounded-[2px] py-[4px] w-[90%] text-[#FFFFFF] outline-none"
                    id=""
                    type="text"
                    name="PhoneNumber"
                    value={phoneNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPhoneNumber(e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col mt-6">
                  <label
                    className="text-[15px] text-[#FFFFFF]"
                    htmlFor="담당자 이메일"
                  >
                    담당자 이메일
                  </label>
                  <input
                    className="bg-[#616161] rounded-[2px] py-[4px] w-[90%] text-[#FFFFFF] outline-none"
                    id=""
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                  />
                </div>
              </div>
              <fieldset className="flex justify-between w-[94%] mt-8 min-[320px]:max-[500px]:grid min-[320px]:max-[500px]:grid-cols-3 min-[320px]:max-[500px]:gap-4 min-[320px]:max-[500px]:pl-[30px]">
                <legend className="w-full text-center text-[#FFFFFF] text-[15px] mb-2">
                  와이리를 어떻게 알게되셨나요?
                </legend>
                <div className="flex gap-2 items-center">
                  <input type="radio" name="who" />
                  <label
                    className="text-[#FFFFFF] text-[14px] font-medium"
                    htmlFor=""
                  >
                    네이버 검색
                  </label>
                </div>
                <div className="flex gap-2 items-center">
                  <input type="radio" name="who" />
                  <label
                    className="text-[#FFFFFF] text-[14px] font-medium"
                    htmlFor=""
                  >
                    인스타그램 광고
                  </label>
                </div>
                <div className="flex gap-2 items-center">
                  <input type="radio" name="who" />
                  <label
                    className="text-[#FFFFFF] text-[14px] font-medium"
                    htmlFor=""
                  >
                    후기
                  </label>
                </div>
                <div className="flex gap-2 items-center">
                  <input type="radio" name="who" />
                  <label
                    className="text-[#FFFFFF] text-[14px] font-medium"
                    htmlFor=""
                  >
                    지인 추천
                  </label>
                </div>
                <div className="flex gap-2 items-center">
                  <input type="radio" name="who" />
                  <label
                    className="text-[#FFFFFF] text-[14px] font-medium"
                    htmlFor=""
                  >
                    와이리 직원의 소개
                  </label>
                </div>
                <div className="flex gap-2 items-center">
                  <input type="radio" name="who" />
                  <label
                    className="text-[#FFFFFF] text-[14px] font-medium"
                    htmlFor=""
                  >
                    기타
                  </label>
                </div>
              </fieldset>
              <div className="flex items-center justify-center gap-[6px] mt-8 w-[94%]">
                <input type="checkbox" onClick={() => setChecked(!checked)} />
                <label className="text-[#FFFFFF] text-[13px]" htmlFor="">
                  개인 정보 수집 및 이용에 동의합니다.
                </label>
              </div>
              <div className="mt-5">
                <button
                  className={
                    disabled
                      ? 'bg-[#222222] text-[#FFFFFF] w-[94%] py-[6px] rounded-[14px] text-[12px]'
                      : 'bg-[#616161] text-[#9E9E9E] w-[94%] py-[6px] rounded-[14px] text-[12px]'
                  }
                >
                  문의하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
