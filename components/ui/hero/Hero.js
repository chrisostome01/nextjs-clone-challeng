/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../../layout/Layout";
import styles from "./Hero.module.css"

export default function Hero() {
    return(
        <>
            <div className="mt-[230px]">
                <Layout>
                    <div className="font-medium text-36 lg:text-72 max-w-910 mx-auto">
                        <div className="text-near-black mx-auto w-200 lg:w-full text-near-black-500 text-center">
                            Get {" "} 
                            <span className={styles.hero} >NEAR</span>
                            {" "} 
                            Certified!
                        </div>
                    </div>
                    <div className="pt-5 pb-24 text-lg leading-28 text-center text-near-black-300 lg:text-22 max-w-910 mx-auto">
                        We, in NEAR Balkans, know how important it 
                        is to have regional and local support.
                        Now you can become NEAR certified in a regional 
                        language of preference and connect with our team to support 
                        your further growth within the NEAR ecosystem.
                    </div>
                    <div className="w-full">
                        <a href={"#learning"}>
                            <img className="mx-auto" src="/arrowdown.svg" alt="arrow down"  />
                        </a> 
                    </div>
                </Layout>
            </div>
        </>
    )
}