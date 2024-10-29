import InputLabel from "@/ui/molecules/input-label/input-label";
import Form from "../form/form";
import Button from "@/ui/atoms/button";
import styles from "./companies-form.module.scss"

interface CompaniesFormProps {
    color: "vacancies" | "companies";
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const elements = [
    {
        labelProps: { htmlFor: "name", children: "Nombre:"},
        inputProps: { type: "text", id: "name", name: "name"}
    },
    {
        labelProps: { htmlFor: "location", children: "Ubicación:"},
        inputProps: { type: "text", id: "location", name: "location"}
    },
    {
        labelProps: { htmlFor: "contact", children: "Contacto:"},
        inputProps: { type: "text", id: "contact", name: "contact"}
    }
];

const CompaniesForm : React.FC<CompaniesFormProps> = ({ color, onSubmit }) => {

    return (
        <Form onSubmit={onSubmit}>

            {elements.map((element, index) => (
                <InputLabel key={index} labelProps={element.labelProps} inputProps={element.inputProps} color="companies"></InputLabel>
            ))}
            <Button type="submit" className={`${styles.button} ${styles[color]}`}>Agregar</Button>
        </Form>
    );
};

export default CompaniesForm;