/* eslint-disable @next/next/no-img-element */
import { ButtonSecondary } from "../../button/Button";

export default function StepOne() {
    return(
        <div className="flex justify-between items-center gap-y-4 flex-col-reverse lg:flex-row mt-16 lg:mt-182 relative">
            <div className="flex text-center lg:text-left flex-col gap-5">
                <h2 className="text-2xl leading-44 -tracking-0.02 text-dark-100 font-medium lg:text-4xl"> Open NEAR wallet </h2>
                <div className="">
                    <p className="text-dark-200 text-base font-normal lg:text-lg lg:leading-6">
                        Opening a NEAR wallet is the first
                        step and an <br className="hidden lg:block"></br> essential part of joining
                        the NEAR community <br className="hidden lg:block"></br> as well as starting this course.
                    </p>
                </div>
                <ButtonSecondary label={"Creat wallet"} style="mx-auto lg:mx-0" />
            </div>
            <div className={`bg-gradient opacity-.9 blur-159 -top-2/3 -z-40 left-[70%]  h-480 w-480 absolute hidden lg:block`}></div>
            <img className="lg:w-296 lg:h-296 w-180 h-180 z-40" src="/steps/nearicon.png"   alt="near icon" />
        </div>
    )
}
