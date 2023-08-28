import ICommand from "../../../../types/ICommand";
import InputLine from "./InputLine.tsx";
import useAddress from "../../../../hooks/useAddress.ts";
import useCommand from "../../../../hooks/useCommand.ts";

function Index({isVisible, onClose}: ICommand) {
    const address = useAddress();
    const {inputVal, inputValHandler} = useCommand();

    return (
        <div
            className={`absolute bottom-0 translate-x-1/2 right-1/2  w-5/6 h-full select-none ${isVisible ? 'block' : 'hidden'}`}>
            <div className="pt-5 flex flex-col items-start h-full text-gray-50">
                <header className="px-6 py-3 ml-6 w-1/4 bg-slate-950 rounded-t-3xl flex justify-between items-center">
                    <h3>Command</h3>
                    <button
                        className="text-red-800 rounded-full w-5 h-5 p-1 flex justify-center items-center hover:bg-red-100"
                        onClick={onClose}
                    >
                        X
                    </button>
                </header>
                <div className="bg-slate-950 rounded-t-3xl flex-1 p-6 self-stretch font-mono flex flex-col">
                    <span className="italic">This command line still not completed yet!</span>
                    <div className="flex flex-col gap-3">
                        <InputLine name={address} value={inputVal} onChange={inputValHandler}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

Index.defaultProps = {
    isVisible: false,
};

export default Index;
