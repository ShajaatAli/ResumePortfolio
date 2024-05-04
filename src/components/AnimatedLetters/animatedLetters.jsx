import React from 'react';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  const delayAnimation = i => {
    const delay = (i + idx) / 10;
    return `opacity-0 inline-block animate-bounceIn delay-[${delay}s] min-w-[10px]`;
  };

  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={delayAnimation(i)}>
          {char}
        </span>
      ))}
    </span>
  );
}

export default AnimatedLetters;
