import React from 'react';
import { skill_item } from './Data';

const Skill = () => {
  return (
    <div className='grid grid-cols-5 gap-7 text-center p-20'>
      {skill_item.map((item) => {
        const { id, name, icon } = item;
        return (
          <div key={id} className='p-20 rounded skill-clr text-center'>
            <h1>{icon}</h1>
            <h2>{name}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Skill;
