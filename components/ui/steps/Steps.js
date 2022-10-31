/* eslint-disable @next/next/no-img-element */
import { ButtonSecondary } from "../../button/Button";
import Layout from "../../layout/Layout";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

export default function Steps() {
    return(
        <>
            <Layout>
                <div className="mt-16" id="learning">
                    <h1 className="text-center font-medium text-dark-100 text-32 lg:text-5xl font-primary tracking-[-0.02] leading-7">
                        Making your NEAR
                        <br/>
                        learning easy.
                    </h1>
                </div>

                <div className="lg:max-w-940 mx-auto">

                    {/* ========== start: step one ========== */}
                        <StepOne />
                    {/* ========== end: step one ============ */}

                    {/* ========= start: arrow down ========= */}
                        <img className="hidden lg:block mx-auto" src="/steps/arrowDown.svg" alt="arrow down" />
                    {/* ========= end: arrow down =========== */}
                    
                    {/* ========= start: step two =========== */}
                        <StepTwo />
                    {/* ============ end: step two ========== */}


                    {/* ========= start: arrow down ========= */}
                        <img className="hidden lg:block mx-auto" src="/steps/arrowDown2.svg" alt="arrow down" />
                    {/* ========= end: arrow down ========= */}
                    

                    {/* ========= start: step three ========= */}
                        <StepThree />
                    {/* ========== end: step three ========== */}

                </div>
            </Layout>
            {/* ========= start: step four ========== */}
                <StepFour />
            {/* ========= end: step four ============ */}
        </>
    )
}