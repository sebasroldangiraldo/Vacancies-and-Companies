interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {};

const Input : React.FC<InputProps> = ({ ...props }) => {
    return (
        <input {...props}></input>
    );
}

export default Input;