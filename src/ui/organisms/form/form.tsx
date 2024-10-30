import styles from "./form.module.scss";

interface FormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
};

const Form : React.FC<FormProps> = ({ onSubmit, children }) => {
    return (
        <form onSubmit={onSubmit} className={styles.form}>
            {children}
        </form>
    );
};

export default Form;