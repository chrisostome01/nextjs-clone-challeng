import Nav from "../../nav/Nav";
import Hero from "../hero/Hero";

export default function Header({ setShowModel }) {
    return(
        <>
            <div className="relative">
                <Nav setShowModel={setShowModel} />
                <div className="absolute h-full w-full lg:-top-31 -top-34 lg:opacity-0">               
                    <div className="flex justify-between h-600">
                        <div className="bg-gradient opacity-0.4 h-full w-1/2"></div>
                        <div className="bg-gradient opacity-0.4 h-full w-1/2"></div>
                    </div>            
                </div>
                <Hero />            
            </div>
            
        </>
    )
}