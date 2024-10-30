import { CompaniesService } from "@/services/companies-service";
import { INewCompany } from "@/models/companies-model";
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputLabel from "@/ui/molecules/input-label/input-label";
import Form from "../form/form";
import Button from "@/ui/atoms/button";
import styles from "./companies-form.module.scss";

interface CompaniesFormProps {
    color: "vacancies" | "companies";
};

const elements = [
    {
        labelProps: { htmlFor: "name", children: "Nombre:" },
        inputProps: { type: "text", id: "name", name: "name" }
    },
    {
        labelProps: { htmlFor: "location", children: "Ubicación:" },
        inputProps: { type: "text", id: "location", name: "location" }
    },
    {
        labelProps: { htmlFor: "contact", children: "Contacto:" },
        inputProps: { type: "text", id: "contact", name: "contact" }
    }
];

const baseCompany: INewCompany = {
    name: "",
    location: "",
    contact: ""
};

const CompaniesForm: React.FC<CompaniesFormProps> = ({ color }) => {

    const router = useRouter();

    const useCompaniesService = new CompaniesService();

    const [company, setCompany] = useState<INewCompany>(baseCompany);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = event.target;
        setCompany(previusData => ({...previusData, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        try {
            await useCompaniesService.create(company);
            setCompany(baseCompany);
            router.refresh();
            console.log("compañía creada exitosamente");

        } catch (error) {
            console.log(error, "error");
        };
    };

    return (
        <Form onSubmit={handleSubmit}>

            {elements.map((element, index) => (
                <InputLabel key={index} labelProps={element.labelProps} inputProps={{ ...element.inputProps, value: company[element.inputProps.name as keyof INewCompany], onChange: handleChange }} color="companies"></InputLabel>
            ))}
            <Button type="submit" className={`${styles.button} ${styles[color]}`}>Agregar</Button>
        </Form>
    );
};

export default CompaniesForm;