import Image from 'next/image';
import React from 'react';
import coffeeIcon from '@/assets/image_search_1707492288115.png';
import todo2 from '@/assets/image_search_1703353977256.png';
import todo3 from '@/assets/image_search_1703354288710.png';
import todo4 from '@/assets/image_search_1703421285957.png';

type Todos = {
  img: string;
  title: string;
  content: string;
};

const Todoitems = [
  {
    img: coffeeIcon,
    title: 'Morning Code',
    content: 'Prepare Coffee For Morning Coding Session',
  },
  {
    img: todo2,
    title: 'Lunch Time',
    content: 'Prepare Burger For Morning Coding Session',
  },
  {
    img: todo3,
    title: 'Make Investment',
    content: 'Guns and Roses on the Investment',
  },
  {
    img: todo4,
    title: 'Morning Code',
    content: 'Prepare Coffee For Morning Coding Session',
  },
];

const TodoComponent = () => {
  return (
    <div>
      <section className='grid grid-cols-2 py-2 px-4 gap-8'>
        {Todoitems.map((d, i) => (
          <div
            key={i}
            className='rounded-lg border-1 shadow-lg border-black box box-1 flex-col flex items-center'
          >
            <Image
              className='bg-blue-400 shadow-md rounded-lg py-2 px-4 mx-auto'
              width={100}
              height={100}
              src={d.img}
              alt='todo item'
            />
            <div className='border-gray-400'>
              <h5 className='text-neutral-400 pl-2 py-2 px-4'>{d.title}</h5>
              <p className='px-4 py-2 text-neutral-600'>{d.content}</p>
            </div>
            <div className='px-4 py-2 '>
              <button className='mx-1 my-2 px-1 py-2 border-2 border-neutral-400 rounded-md hover:text-red-400'>
                Delete
              </button>
              <button className='px-1 mx-1 my-2 py-2 border-2 rounded-md border-neutral-400 hover:text-blue-400'>
                Update
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TodoComponent;
