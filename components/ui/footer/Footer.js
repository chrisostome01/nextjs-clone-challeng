/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../../layout/Layout";
import Line from "../../line/Line";

export default function Footer() {
    return(
        <div className="w-full bg-white py-96 z-30">
            <Layout>
                <div className="py-24 text-lg text-near-black-500 font-primary">
                    <h1 className="text-center">
                        Visit {" "}
                        <span className=" font-bold">
                            <Link target={"_blank"} href={"nearbalkans.org"}>
                                nearbalkans.org
                            </Link>
                        </span>
                        {" "}
                        and make sure to follow us on our social and community channels!
                    </h1>
                </div>
                
                {/* icons */}
                <div className="lg:flex lg:item-center lg:justify-center">
                    {/* logo */}
                    <div className=" hidden mr-61 lg:flex items-center relative">
                        <img src="/icons/nearIcon.svg" className="hidden lg:block"  alt="near icon" />
                    </div>
                    <Line style={"hidden lg:block"} />
                    <div className="flex justify-between lg:items-center lg:ml-61">
                        <Link href={"/"}>
                            <img className="lg:px-3 px-2 mt-40 lg:mt-0" src="/icons/twitter.svg" alt="Twitter icon" />
                        </Link>
                        <Link href={"/"}>
                            <img className="lg:px-3 px-2 mt-40 lg:mt-0" src="/icons/discord.svg" alt="Twitter icon" />
                        </Link>
                        <Link href={"/"}>
                            <img className="lg:px-3 px-2 mt-40 lg:mt-0" src="/icons/paperPlain.svg" alt="Twitter icon" />
                        </Link>
                        <Link href={"/"}>
                            <img className="lg:px-3 px-2 mt-40 lg:mt-0" src="/icons/facebook.svg" alt="Twitter icon" />
                        </Link>
                        <Link href={"/"}>
                            <img className="lg:px-3 px-2 mt-40 lg:mt-0" src="/icons/linkedin.svg" alt="Twitter icon" />
                        </Link>
                        <Link href={"/"}>
                            <img className="lg:px-3 px-2 mt-40 lg:mt-0" src="/icons/instagram.svg" alt="Twitter icon" />
                        </Link>
                        <Link href={"/"}>
                            <img className="lg:px-3 px-2 mt-40 lg:mt-0" src="/icons/dev.svg" alt="dev icon" />
                        </Link>
                    </div>
                </div>

                {/* short links */}
                <ul className="flex justify-center flex-col lg:flex-row lg:gap-10 text-lg text-center pt-36">
                    <li>
                        <Link href={"/"}>
                            NEAR Balkans <br className="hidden lg:block 2xl:hidden"></br>2022
                        </Link>
                    </li>
                    <li>
                        <Link href={"mailto: info@nearbalkans.org"}>
                            info@nearbalkans.org
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            Privacy  <br className="hidden lg:block 2xl:hidden"></br> Policy
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            Cookie  <br className="hidden lg:block 2xl:hidden"></br> Policy
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            Terms &  <br className="hidden lg:block 2xl:hidden"></br> Conditions
                        </Link>
                    </li>
                </ul>


                {/* footer text */}
                <div className="text-center pt-34 text-lg">
                    NEAR Balkans Hub: Bosnia & Herzegovina,
                    Bulgaria, Croatia, Montenegro, North Macedonia,
                    Serbia, and Slovenia
                </div>
            </Layout>
        </div>
    )
}