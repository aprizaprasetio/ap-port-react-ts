import {MouseEventHandler} from "react";

interface ICommand {
    isVisible: boolean;
    onClose?: MouseEventHandler<HTMLButtonElement>,
}

export default ICommand;
