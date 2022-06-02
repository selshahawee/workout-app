import { Dialog, Tab, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { classNames } from './lib'
import { Fragment } from 'react'
import Logo from 'assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Navigator from './Navigator'

type props = {
  open: boolean
  setOpen: (open: boolean) => void
}
function Drawer({ open, setOpen }: props) {
  return (
    <Transition.Root show={open} as={Fragment}>
      {/* the grey background */}
      <Dialog
        as="div"
        className="absolute inset-0 xl:hidden"
        onClose={() => setOpen(false)}
      >
      
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="scale-0"
          enterTo="opacity-100 scale-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>
        </Transition.Child>

        <div className="fixed inset-0 flex" />
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          {/* the list dialogue */}
          <div className="relative flex min-h-screen w-[16rem] max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex self-end px-4 pt-5 pb-2">
              <button
                type="button"
                className="bg-red -m-2 mb-[1rem] inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-black"
                onClick={() => setOpen(false)}
              >
                Hello
                <div className="relative mr-[2.25rem] h-[4rem] w-[11rem]">
                  <Image
                    src={Logo}
                    alt="brand"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6 " aria-hidden="true" />
              </button>
            </div>
            <Dialog.Panel>
              <Navigator />
              </Dialog.Panel>
          </div>
        </Transition.Child>
      
      </Dialog>
    </Transition.Root>
  )
}

export default Drawer