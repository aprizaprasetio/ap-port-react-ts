import IPill from "../types/IPill";

function Pill({className, onCommand}: IPill) {
    return (
        <div className={className}>
            <div>
                <nav className="flex gap-3">
                    <a
                        href="https://www.linkedin.com/in/aprizaprasetio/"
                        className="shrink-0 rounded-xl p-2 text-md font-medium text-gray-400 hover:bg-gray-700 hover:text-slate-50 transition"
                        target="_blank"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/aprizaprasetio/"
                        className="shrink-0 rounded-xl p-2 text-md font-medium text-gray-400 hover:bg-gray-700 hover:text-slate-50 transition"
                        target="_blank"
                    >
                        Github
                    </a>

                    <a
                        href="https://www.instagram.com/aprizaprasetio/"
                        className="shrink-0 rounded-xl p-2 text-md font-medium text-gray-400 hover:bg-gray-700 hover:text-slate-50 transition"
                        target="_blank"
                    >
                        Instagram
                    </a>
                    <button
                        className="shrink-0 bg-gradient-to-r from-[#E100FF] to-[#7F00FF] bg-clip-text hover:text-transparent p-2 text-md font-bold text-gray-400 transition"
                        onClick={onCommand}
                    >
                        Command
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default Pill;
