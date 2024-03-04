import Image from 'next/image';
import React, { Children } from 'react';
import logo from '@/assets/images/logo.svg';
import arrorDown from '@/assets/images/icon-arrow-down.svg';
import todoIcon from '@/assets/images/icon-todo.svg';
import calendarIcon from '@/assets/images/icon-calendar.svg';
import planningIcon from '@/assets/images/icon-planning.svg';
import reminderIcon from '@/assets/images/icon-reminders.svg';
import Link from 'next/link';

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem = [
  {
    label: 'Features',
    link: '#',
    children: [
      {
        label: 'Todo List',
        link: '/todo',
        iconImage: todoIcon,
      },
      {
        label: 'Calendar',
        link: '#',
        iconImage: calendarIcon,
      },
      {
        label: 'Reminders',
        link: '#',
        iconImage: reminderIcon,
      },
      {
        label: 'Planning',
        link: '#',
        iconImage: planningIcon,
      },
    ],
  },
  {
    label: 'Company',
    link: '#',
    children: [
      {
        label: 'History',
        link: '#',
      },
      {
        label: 'Our Team',
        link: '#',
      },
      {
        label: 'Blog',
        link: '#',
        children: [
          {
            label: 'Register',
            link: '#',
          },
          {
            label: 'New Blog',
            link: '#',
          },
        ],
      },
    ],
  },
  {
    label: 'Careers',
    link: '#',
    children: [
      {
        label: 'Office Jobs',
        link: '#',
      },
      {
        label: 'Remote Jobs',
        link: '#',
      },
    ],
  },
  {
    label: 'About',
    link: '#',
    children: [
      {
        label: 'Developer',
        link: '#',
      },
      {
        label: 'Services',
        link: '#',
      },
    ],
  },
];

const Navbar = () => {
  return (
    <div className='mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-sm'>
      {/* leftside */}
      <section className='flex items-center gap-10'>
        {/* logo */}
        <Image alt='logo' priority={true} src={logo} />
        <div className='flex items-center gap-4 transition-all'>
          {/* nav items */}
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? ''}
              className='relative group px-2 py-3 transition-all'
            >
              <p className='flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black'>
                <span>{d.label}</span>
                {d.children && (
                  <Image
                    className='rotate-180 transition-all group-hover:rotate-0'
                    alt='arrow down'
                    src={arrorDown}
                  />
                )}
              </p>
              {/* dropdown items */}
              {d.children && (
                <div className='absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex'>
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? '#'}
                      className='flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black'
                    >
                      {/* image */}
                      {ch.iconImage && (
                        <Image src={ch.iconImage ?? ''} alt='item icon' />
                      )}
                      {/* item */}
                      <span className='pl-3 whitespace-nowrap'>{ch.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>
      {/* right side data */}
      <section className='flex items-center gap-8'>
        <button className='h-fit text-neutral-400 transition-all hover:text-black/90'>
          Login
        </button>
        <button className='h-fit rounded-xl border-2 border-neutral-400 hover:border-black px-4 py-2 text-neutral-400 transition-all hover:text-black/90'>
          Register
        </button>
      </section>
    </div>
  );
};

export default Navbar;
