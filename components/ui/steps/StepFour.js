/* eslint-disable @next/next/no-img-element */
import { ButtonSecondary } from "../../button/Button";

export default function StepFour() {
    return(
        <div className="flex justify-between items-center  gap-y-4 flex-col-reverse lg:flex-row mt-[168px] relative lg:max-w-940 mx-auto 2xl:min-w-full 2xl:mx-0 2xl:px-9">
            <div className="flex items-center lg:items-start flex-col gap-5">
                <h2 className="text-2xl leading-44 -tracking-0.02 text-dark-100 font-medium lg:text-4xl"> Open NEAR wallet </h2>
                <div className="">
                    <p className="text-dark-200 text-base text-center lg:text-left">
                        Opening a NEAR wallet is the first
                        step and an <br className="hidden lg:block"></br> essential part of joining
                        the NEAR community <br className="hidden lg:block"></br> as well as starting this course.
                    </p>
                </div>
                <ButtonSecondary label={"Start The course"} style="mx-auto lg:mx-0" />
            </div>
            <img className="lg:w-296 lg:h-296 w-180 h-180" src="/steps/nearSecondIcon.png"   alt="near icon" />
            <div className={`bg-stepFourGradient opacity-.9 blur-159 w-[1067px] h-[440px] top-[5%] -left-[10%] absolute hidden lg:block -z-20`}></div>
        </div>
    )
}
