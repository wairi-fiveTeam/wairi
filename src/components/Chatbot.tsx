import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Chatbot() {
  return (
    <div className="relative ">
      <Link
        href="https://2k044.channel.io/user-chats/"
        target="_blank"
        className="fixed bottom-4 right-4"
      >
        <Image src="/images/chat.svg" alt="챗봇연결" width={60} height={60} />
      </Link>
    </div>
  );
}
