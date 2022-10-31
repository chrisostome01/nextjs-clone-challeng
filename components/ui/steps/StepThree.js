/* eslint-disable @next/next/no-img-element */
export default function StepThree() {
    return(
        <div className="flex justify-between items-center gap-y-4 flex-col-reverse mt-16 relative">
            <img className="lg:w-644 h-186 md:h-auto lg:h-362.2 mt-8 lg:mt-[80px] w-full" src="/steps/certficate.png"   alt="near icon" />
            <div className="flex items-center flex-col gap-5 text-center">
                <h2 className="text-2xl leading-44 -tracking-0.02 text-dark-100 font-medium lg:text-4xl">Claim NEAR certificate</h2>
                <div className="">
                    <p className="text-dark-200 text-base ">
                        Upon course completion, receive the NEAR dev 101
                        <br className="hidden lg:block"></br>
                        certificate as an NFT on your NEAR wallet.
                    </p>
                </div>
            </div>
        </div>
    )
}

