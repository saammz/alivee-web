const Button = ({ onclick, text, className}) =>{
    return(
        <button
            onClick={onclick}
            className={`text-white bg-[#4cc273] hover:bg-opacity-90 hover:text-white px-6 py-4 rounded-[2rem] text-sm font-medium${className}`}
        >
            {text}
        </button>
    );
}
export default Button;