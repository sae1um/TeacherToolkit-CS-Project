import { IconContext } from "react-icons"
import { Link } from "react-router-dom";

const colourClasses = {
    blue: 'bg-[#0976dd]',
    red: 'bg-[#e94951]',
    green: 'bg-[#dd009e]',
    purple: 'bg-[#ddb900]',
    yellow: 'bg-[#00b741]',
    orange: 'bg-[#ff7b00]'
};

export default function GridBoxes({ name, icon, colour, description, link}) {
    return(
        <Link to={`${link}`} 
            className={`flex flex-row justify-between ${colourClasses[colour]} text-white w-full mt-4 py-8 px-6 rounded-xl hover:${colourClasses[colour]}-`}
        >
                <div className="gap-1">
                    <h2 className="font-extrabold text-3xl">
                        {name}
                    </h2>
                    <p className="flex flex-row items-center gap-2 font-semibold">
                        {description}
                    </p>
                </div>
                <span className="text-6xl">
                    <IconContext.Provider value={{color: "white"}}>
                        {icon}
                    </IconContext.Provider>
                </span>
        </Link>
    )
};
