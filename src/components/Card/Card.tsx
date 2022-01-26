import React from 'react';
import { animals } from '../../constants';
type CardProps = {
  id: string;
  name: string;
  click: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function Card({ id, name, click }: CardProps) {
  return (
    <div id={id} onClick={click}>
      {animals.includes(name) ? (
        <img
          width={'120px'}
          height={'auto'}
          src={require(`../../images/${name}.svg`)}
          alt={name}
        />
      ) : null}

      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
}
