import React from 'react';
import { animals } from '../../constants';
type CardProps = {
  id: string;
  name: string;
  click: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function Card({ id, name, click }: CardProps) {
  return (
    <div id={id} onClick={click} className='card'>
      <div className='card-image-container'>
        {animals.includes(name) ? (
          <img src={require(`../../images/${name}.svg`)} alt={name} />
        ) : null}
      </div>

      <div>
        <h2 className='card-animal-name'>{name}</h2>
      </div>
    </div>
  );
}
