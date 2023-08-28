import {useState, ChangeEvent} from "react";

function useCommand() {
    const [commands, setCommands] = useState<string[]>([]);
    const [inputVal, setInputVal] = useState<string>('');

    function addCommands(command: string) {
        setCommands(current => [...current, command]);
    }

    function inputValHandler(event: ChangeEvent<HTMLInputElement>) {
        setInputVal(event.target.value);
    }

    return {
        inputVal,
        inputValHandler,
        commands,
        addCommands
    };
}

export default useCommand;
