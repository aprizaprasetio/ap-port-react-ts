import IInputLine from "../../../../types/IInputLine.ts";

function InputLine({name, ...inputProps}: IInputLine) {
    return (
        <div className="flex gap-3">
            <span>Users:[{name ?? 'Users'}]\</span>
            <input className="bg-transparent outline-none no-underline flex-1"
                   autoComplete="off" {...inputProps} />
        </div>
    );
}

export default InputLine;
