const Fbutton = ({ onClick, className, children }) => {
    return (
        <button onClick={onClick} className={className}>
            {children || "button"}
        </button>
    );
};

export default Fbutton;
