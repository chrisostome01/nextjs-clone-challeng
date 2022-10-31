/* eslint-disable @next/next/no-img-element */
import Button from '../button/Button';
import Layout from '../layout/Layout';
import Line from '../line/Line';

export default function Nav({setShowModel}) {
    return(
        <nav className="fixed bg-white w-full top-0 z-50">
            {/* ====== nav logos ====== */}
            <Layout>
                <div className="flex justify-between  my-23">
                    <div className="flex items-center relative">
                        <img src="/navigation/logoone.svg" className="lg:w-39 w-30"  alt="logo one " />
                        <span className='font-bold text-lg font-primary hidden md:block text-zinc-700 ml-2'>
                            Dacade
                        </span> 
                        <Line />
                        <img src="/navigation/near.svg" className="lg:w-39 w-30 lg:hidden"  alt="near icon" />
                        <img src="/icons/nearIcon.svg" className="hidden lg:block"  alt="near icon" />
                    </div>
                    <div className='flex items-center'>
                        <Button onclick={() => {
                            setShowModel(true)
                        }} label={'Start The Course'} style={`text-black text-base font-normal lg:text-lg font-primary border-none bg-white hidden lg:block`} />
                        <Button label={"Create wallet"}  />                        
                    </div>
                </div>
            </Layout>
        </nav>
    )
}