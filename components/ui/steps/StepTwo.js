/* eslint-disable @next/next/no-img-element */

export default function StepTwo() {
    return(
        <div className="flex justify-between items-center gap-y-4 flex-col-reverse lg:flex-row-reverse mt-16 relative">
            <div className="flex items-center flex-col gap-5">
                <h2 className="text-2xl leading-44 -tracking-0.02 text-dark-100 font-medium lg:text-4xl">Complete the course</h2>
                <div className="text-center lg:text-left">
                    <div className="flex flex-col-reverse justify-center items-center gap-2 space-y-2 lg:flex-row lg:justify-start gap-y-[10px] gap-x-3 mt-6">
                        <p className="text-dark-200 text-base ">
                            In three simple modules learn:
                        </p>
                    </div>
                    <div className="flex flex-col-reverse justify-center items-center gap-2 space-y-2 lg:flex-row lg:justify-start gap-y-[10px] gap-x-3 mt-6">
                        <img className="lg:h-8 lg:w-8 h-18 w-18" src="/steps/icon3.png" alt="bocks icon" />
                        <p className="text-dark-200 text-base ">
                            Essential NEAR concepts
                        </p>
                    </div>
                    <div className="flex flex-col-reverse justify-center items-center gap-2 space-y-2 lg:flex-row lg:justify-start gap-y-[10px] gap-x-3 mt-6">
                        <img className="lg:h-8 lg:w-8 h-18 w-18" src="/steps/icon2.png" alt="bocks icon" />
                        <p className="text-dark-200 text-base ">
                            How to write smart contracts on NEAR
                        </p>
                    </div>
                    <div className="flex flex-col-reverse justify-center items-center gap-2 space-y-2 lg:flex-row lg:justify-start gap-y-[10px] gap-x-3 mt-6">
                        <img className="lg:h-8 lg:w-8 h-18 w-18" src="/steps/icon1.png" alt="bocks icon" />
                        <p className="text-dark-200 text-base ">
                        How to build dapps on the NEAR blockchain
                        </p>
                    </div>
                </div>
            </div>
            <div className={`bg-stepFourGradient opacity-.9 blur-159 top-[38%] right-[70%]  h-480 w-480 absolute hidden lg:block -z-20`}></div>
            <img className="lg:w-296 lg:h-296 w-180 h-180" src="/steps/target.svg"   alt="near icon" />
        </div>
    )
}
