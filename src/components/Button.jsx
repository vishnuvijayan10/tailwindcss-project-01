

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
    return (
        <button className={`flex justify-center items-center px-7 py-4 border font-montserrat leading-none  text-lg
        ${backgroundColor
                ? `${backgroundColor} ${textColor} ${borderColor}`
                : " bg-coral-red  text-white border-coral-red"
            }
            rounded-full
            ${fullWidth && 'w-full'}
            `}
        >
            {label}
            {iconURL && <img
                src={iconURL}
                alt="arrow right icon"
                className="ml-2 rounded-full w-5 h-5"
            />}
        </button >
    )
}

export default Button