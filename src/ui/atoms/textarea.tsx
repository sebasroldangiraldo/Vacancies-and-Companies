export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {};

const Textarea: React.FC<TextareaProps> = ({ ...props }) => {
    return (
        <textarea {...props}></textarea>
    );
};

export default Textarea;