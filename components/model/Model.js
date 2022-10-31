/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const langauges = [
    {
      icon: () => <img src='/flag/croatian.svg' alt='croatian flag' /> ,
      name: "Croatian",
    },
    {
      icon: () => <img src='/flag/bulg.svg' alt='Bulgarian flag' /> ,
      name: "Bulgarian",
    },
    {
      icon: () => <img src='/flag/english.svg' alt='Enlgish flag' /> ,
      name: "English ",
    },
];


export default function Model({ showModel ,setShowModel }) {
    return (
        <>
            <Transition appear show={showModel == true ? true : false } as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setShowModel}>
                    
                    <Transition.Child  as={Fragment} enter="ease-out duration-300"  enterFrom="opacity-0"  enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto z-50">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child  as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                        <div className='flex justify-between my-4 mx-4'>
                                            <div>
                                                Choose language
                                            </div>
                                            <div onClick={() => { setShowModel(false)} } >
                                                <img className='cursor-pointer' alt='Close' src='/modelIcons/close.svg' />
                                            </div>
                                        </div>
                                    </Dialog.Title>
                                    <div className="my-4 mx-4">
                                        {langauges.map((flag, index) => {
                                            return (
                                                <div key={index} className="flex items-center justify-between my-3 px-3 py-2 border border-gray-200 rounded-md">                            
                                                    <div className="flex items-center gap-4">
                                                        <flag.icon />
                                                        <span>{flag.name}</span>
                                                    </div>
                                                    <a className="bg-gray-200 h-7 w-7 rounded-full flex items-center justify-center">
                                                        <img className='cursor-pointer' alt='Close' src='/modelIcons/arrowRight.svg' />
                                                    </a>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}