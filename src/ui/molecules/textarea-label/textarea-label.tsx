import Label, { LabelProps } from "@/ui/atoms/label";
import Textarea, { TextareaProps } from "@/ui/atoms/textarea";
import styles from "./textarea.module.scss";

interface TextareaLabelProps {
    labelProps : LabelProps;
    textareaProps : TextareaProps;
    color: "vacancies" | "companies";
};

const TextareaLabel : React.FC<TextareaLabelProps> = ({ labelProps, textareaProps, color }) => {

    return (
        <div className={styles.element} >
            <Label {...labelProps} className={styles.label}></Label>
            <Textarea {...textareaProps} className={`${styles.textarea} ${styles[color]}`}></Textarea>
        </div>
    );
};

export default TextareaLabel;