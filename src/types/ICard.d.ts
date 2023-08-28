import {HTMLProps} from "react";

interface ICard {
    className?: HTMLProps<HTMLElement>["className"];
    img?: string;
}

export default ICard;
