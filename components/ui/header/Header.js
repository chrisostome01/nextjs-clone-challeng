import Layout from "../../layout/Layout";
import Nav from "../../nav/Nav";
import Hero from "../hero/Hero";

export default function Header() {
    return(
        <div className="relative">
            <Nav />
            <div className="absolute h-full w-full lg:-top-[31.25rem] -top-[550px] lg:opacity-0">               
                <div className="flex justify-between h-600">
                    <div className="bg-gradient opacity-0.4 h-full w-1/2"></div>
                    <div className="bg-gradient opacity-0.4 h-full w-1/2"></div>
                </div>            
            </div>
            <Hero />
        </div>
    )
}