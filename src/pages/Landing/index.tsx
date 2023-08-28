import Card from "../../components/Card.tsx";
import Pill from "../../components/Pill.tsx";
import Index from "./components/Command";
import aprizaVector from "../../assets/apriza-vector.png";
import {useState} from "react";

function Landing() {
    const [commandVisible, setCommandVisible] = useState(false);

    function commandVisibleSwitch() {
        setCommandVisible(current => !current);
    }

    return (
        <>
            <div className="bg-slate-900 h-screen flex flex-col justify-center items-center">
                <Card className="lg:w-1/4 md:w-1/3 md:m-0 m-3" img={aprizaVector}/>
                <Pill className="absolute lg:bottom-6 bottom-3" onCommand={commandVisibleSwitch}/>
            </div>
            <Index isVisible={commandVisible} onClose={commandVisibleSwitch}/>
        </>
    );
}

export default Landing;
