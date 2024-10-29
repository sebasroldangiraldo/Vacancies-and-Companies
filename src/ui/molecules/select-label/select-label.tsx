import Label, { LabelProps } from "@/ui/atoms/label";
import Select, { SelectProps } from "@/ui/atoms/select";
import styles from "./select-label.module.scss";

interface SelectLabelProps {
    labelProps : LabelProps;
    selectProps : SelectProps;
    color: "vacancies" | "companies";
};

const SelectLabel : React.FC<SelectLabelProps> = ({ labelProps, selectProps, color }) => {

    return (
        <div className={styles.element} >
            <Label {...labelProps} className={styles.label}></Label>
            <Select {...selectProps} className={`${styles.select} ${styles[color]}`}></Select>
        </div>
    );
};

export default SelectLabel;