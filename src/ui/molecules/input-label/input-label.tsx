import Input, { InputProps } from "@/ui/atoms/input";
import Label, { LabelProps } from "@/ui/atoms/label";
import styles from "./input-label.module.scss";

interface InputLabelProps {
    labelProps : LabelProps;
    inputProps : InputProps;
    color: "vacancies" | "companies";
};

const InputLabel : React.FC<InputLabelProps> = ({ labelProps, inputProps, color }) => {

    return (
        <div className={styles.element} >
            <Label {...labelProps} className={styles.label}></Label>
            <Input {...inputProps} className={`${styles.input} ${styles[color]}`}></Input>
        </div>
    );
};

export default InputLabel;