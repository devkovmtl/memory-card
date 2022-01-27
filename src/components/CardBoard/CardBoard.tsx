import React, { useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import { data } from '../../data/data';
import { Card } from '..';
import { IData } from '../../interfaces';

type CardBoardProps = {
  setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
  setHighScore: React.Dispatch<React.SetStateAction<number>>;
  currentScore: number;
  highScore: number;
};

export default function CardBoard({
  setCurrentScore,
  setHighScore,
  currentScore,
  highScore,
}: CardBoardProps) {
  const [dataArray, setDataArray] = useState<IData[] | []>([]);
  const [mems, setMems] = useState<string[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { id } = e.currentTarget;
    if (mems.includes(id)) {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setCurrentScore(0);
      setMems([]);
    }
    if (!mems.includes(id)) {
      setCurrentScore(currentScore + 1);
      setMems([...mems, id]);
    }
    setDataArray(shuffle(data));
  };

  useEffect(() => {
    setDataArray(shuffle(data));
  }, [data]);

  return (
    <div className='card-board'>
      {dataArray.map((dataEl) => (
        <Card
          key={dataEl.id}
          id={dataEl.id}
          name={dataEl.name}
          click={handleClick}
        />
      ))}
    </div>
  );
}
