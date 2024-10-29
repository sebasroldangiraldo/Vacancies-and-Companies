import Button from "@/ui/atoms/button";
import Form from "../form/form";
import styles from "./vacancies-form.module.scss"
import InputLabel from "@/ui/molecules/input-label/input-label";
import TextareaLabel from "@/ui/molecules/textarea-label/textarea-label";
import SelectLabel from "@/ui/molecules/select-label/select-label";

interface VacanciesFormProps {
    color: "vacancies" | "companies";
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const inputLabel = [
    {
        labelProps: { htmlFor: "title", children: "Título:" },
        inputProps: { type: "text", id: "title", name: "title" }
    }
];

const textareaLabel = [
    {
        labelProps: { htmlFor: "description", children: "Descripción:" },
        textareaProps: { id: "description", name: "description" }
    }
];

const selectLabel = [
    {
        labelProps: { htmlFor: "state", children: "Estado:" },
        selectProps: { id: "state", name: "state", options: [{ label: "Selecciona una opción", value: " " }, { label: "Open", value: "open" }, { label: "Pending", value: "pending" }] }
    },
    {
        labelProps: { htmlFor: "company", children: "Compañía:" },
        selectProps: { id: "company", name: "company", options: [{ label: "Selecciona una opción", value: " " }, { label: "Riwi", value: "riwi" }, { label: "Apple", value: "apple" }] }
    }
];

const VacanciesForm: React.FC<VacanciesFormProps> = ({ color, onSubmit }) => {
    return (
        <Form onSubmit={onSubmit}>

            {inputLabel.map((element, index) => (
                <InputLabel key={index} labelProps={element.labelProps} inputProps={element.inputProps} color="vacancies"></InputLabel>
            ))}

            {textareaLabel.map((element, index) => (
                <TextareaLabel key={index} labelProps={element.labelProps} textareaProps={element.textareaProps} color="vacancies"></TextareaLabel>
            ))}

            {selectLabel.map((element, index) => (
                <SelectLabel key={index} labelProps={element.labelProps} selectProps={element.selectProps} color="vacancies"></SelectLabel>
            ))}

            <Button type="submit" className={`${styles.button} ${styles[color]}`}>Agregar</Button>
        </Form>
    );
};

export default VacanciesForm;