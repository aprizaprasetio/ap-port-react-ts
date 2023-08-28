import {HTMLProps, MouseEventHandler} from "react";

interface IPill {
    className?: HTMLProps<HTMLElement>["className"];
    onCommand?: MouseEventHandler<HTMLButtonElement>;
}

export default IPill;
