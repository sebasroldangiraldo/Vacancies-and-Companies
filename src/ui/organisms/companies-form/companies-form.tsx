import { CompaniesService } from "@/services/companies-service";
import { INewCompany } from "@/models/companies-model";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import InputLabel from "@/ui/molecules/input-label/input-label";
import Form from "../form/form";
import Button from "@/ui/atoms/button";
import styles from "./companies-form.module.scss";

interface CompaniesFormProps {
    color: "vacancies" | "companies";
    cardID?: string;
    toggleModal: () => void; 
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

const CompaniesForm: React.FC<CompaniesFormProps> = ({ color, cardID, toggleModal }) => {

    const router = useRouter();

    const useCompaniesService = new CompaniesService();

    const [company, setCompany] = useState<INewCompany>(baseCompany);

    useEffect(() => {

        if (cardID) {

            try {
                const fetchVacancy = async () => {

                    const data = await useCompaniesService.findOne(cardID);
                    console.log(data);

                    setCompany({ name : data.name, location : data.location, contact : data.contact });
                };

                fetchVacancy();

            } catch (error) {
                console.log("error al encontrar la vacante", error);
            }
        };

    }, [cardID]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = event.target;
        setCompany(previusData => ({...previusData, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        if ( !company.name || !company.location || !company.contact) {

            alert("por favor, completa todos los campos");
            return;
        };

        try {

            if (cardID) {

                await useCompaniesService.update(cardID, company);
                console.log("compañía actualizada exitosamente");
                
            } else {
              
                await useCompaniesService.create(company);
                console.log("compañía creada exitosamente");
            };

            setCompany(baseCompany);
            router.refresh();
            toggleModal();
            
        } catch (error) {

            console.log(error, "ocurrió un error al realizar la petición");
        };
    };

    return (
        <Form onSubmit={handleSubmit}>

            {elements.map((element, index) => (
                <InputLabel key={index} labelProps={element.labelProps} inputProps={{ ...element.inputProps, value: company[element.inputProps.name as keyof INewCompany], onChange: handleChange }} color="companies"></InputLabel>
            ))}
            <Button type="submit" className={`${styles.button} ${styles[color]}`}>{cardID ? "Actualizar" : "Agregar"}</Button>
        </Form>
    );
};

export default CompaniesForm;