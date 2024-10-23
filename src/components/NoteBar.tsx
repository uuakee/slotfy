'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function NoteBar() {
  const [translateX, setTranslateX] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentWidth = contentRef.current.scrollWidth;
      const animationDuration = contentWidth / 30; // Adjust speed as needed

      setTranslateX(-contentWidth);

      const animation = contentRef.current.animate(
        [
          { transform: `translateX(0px)` },
          { transform: `translateX(-${contentWidth}px)` }
        ],
        {
          duration: animationDuration * 1000,
          iterations: Infinity,
          easing: 'linear'
        }
      );

      return () => animation.cancel();
    }
  }, []);

  return (
    <div role="alert" className="bg-[#752b9c39] mt-2 rounded-lg p-2 overflow-hidden relative text-white text-[12px]">
      <div className="whitespace-nowrap">
        <div
          ref={contentRef}
          className="inline-block"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          🧧Bônus aleatório 🧧💲7️⃣7️⃣7️⃣7️⃣
          🤑12 vezes ao dia 🤑

          ⏰01:00 - 01:59⏰03:00 - 03:59⏰
          ⏰05:00 - 05:59⏰07:00 - 07:59⏰
          ⏰09:00 - 09:59⏰11:00 - 11:59⏰
          ⏰13:00 - 13:59⏰15:00 - 15:59⏰
          ⏰17:00 - 17:59⏰19:00 - 19:59⏰
          ⏰21:00 - 21:59⏰23:00 - 23:59⏰ 

          🧧🧧Mina Misteriosa abre 1️⃣2️⃣ vezes em intervalos regulares todos os dias, com cada abertura durando 5️⃣9️⃣ minutos. A mina contém 5️⃣0️⃣0️⃣0️⃣0️⃣0️⃣0️⃣ R$ 🧧🧧        

          ✨✨✨Convide seus amigos e não só você ganha R$25 em comissões de! 🎁🎁🎁Se o seu amigo apostar R$ 1 ou mais, você poderá aproveitar comissões vitalícias de até 5%. Convide seus amigos para participar do 【777g.com】 via Facebook, Instagram, Tikk, Telegram, WhatsApp, YouTube e muito mais. Compartilhe a diversão deste jogo e a oportunidade de ganhar dinheiro! 💰💰💰
        </div>
      </div>
    </div>
  );
}