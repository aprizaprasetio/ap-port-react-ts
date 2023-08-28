import ICard from "../types/ICard";

function Card({className, img}: ICard) {
    return (
        <div
            className={`relative block overflow-hidden rounded-lg border border-gray-50 cursor-default shadow-2xl  shadow-[#7F00FF] select-none p-4 sm:p-6 lg:p-8 ${className}`}
        >
            {/*<span*/}
            {/*    className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#7F00FF] to-[#E100FF]"*/}
            {/*></span>*/}

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                        Apriza Prasetio
                    </h3>
                    <p className="mt-1 text-xs font-medium text-gray-300">React Enthusiast</p>
                </div>

                {img && (
                    <div className="hidden sm:block sm:shrink-0">
                        <img
                            alt="Paul Clapton"
                            src={img}
                            className="h-20 w-20 rounded-lg object-cover shadow-sm bg-slate-800 px-1 pt-2"
                        />
                    </div>
                )}
            </div>

            <div className="mt-4">
                <p className="max-w-[40ch] text-sm text-gray-50">
                    I do <span className="font-bold">React</span> and <span className="font-bold">.NET</span>. But more
                    mainly to React because it is my favorite Front End library right now.
                </p>
            </div>
        </div>
    );
}

export default Card;
