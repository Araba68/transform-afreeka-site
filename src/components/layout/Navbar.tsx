'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, Transition, Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

const aboutMenu = [
  { label: 'Our Team', href: '/team' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Who We Are', href: '/about/who-we-are' }, // Merged Philosophy + Objectives
  { label: 'Thematic Areas', href: '/about/thematic-areas' },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 left-0 w-full bg-white shadow z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.jpg"
                  alt="Transform Afreeka Logo"
                  width={40}
                  height={40}
                  className="object-contain rounded-full"
                />
                <span className="text-xl font-bold text-brandPurple">
                  Transform Afreeka
                </span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex gap-8 items-center font-medium text-brandBlack">
                <Link href="/">Home</Link>

                {/* About Dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center gap-1">
                    About <ChevronDownIcon className="w-4 h-4" />
                  </Menu.Button>
                  <Transition
                    as="div"
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 -translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-1"
                  >
                    <Menu.Items className="absolute mt-2 w-56 bg-white border border-gray-100 shadow-lg rounded-md z-50">
                      <div className="py-1">
                        {aboutMenu.map((item, index) => (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <Link
                                href={item.href}
                                className={`block px-4 py-2 text-sm ${
                                  active ? 'bg-gray-100' : ''
                                }`}
                              >
                                {item.label}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <Link href="/projects">Projects</Link>
                <Link href="/#donate">Donate</Link>
                <Link href="/#contact">Contact</Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-600 hover:text-black hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandPurple">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <Disclosure.Panel className="md:hidden bg-white px-4 pt-2 pb-4 space-y-1 text-sm">
            <Link href="/" className="block py-2">Home</Link>

            {/* Mobile About Dropdown */}
            <Disclosure>
              {({ open: openAbout }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full py-2">
                    <span>About</span>
                    <ChevronDownIcon className={`w-4 h-4 transform ${openAbout ? 'rotate-180' : ''}`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pl-4 space-y-1">
                    {aboutMenu.map((item, index) => (
                      <Link key={index} href={item.href} className="block py-1">
                        {item.label}
                      </Link>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Link href="/projects" className="block py-2">Projects</Link>
            <Link href="/#donate" className="block py-2">Donate</Link>
            <Link href="/#contact" className="block py-2">Contact</Link>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
