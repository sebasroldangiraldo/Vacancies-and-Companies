import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { INewVacancy } from "@/models/vacancies-model";
import { VacanciesService } from "@/services/vacancies-service";
import { Option } from "@/ui/atoms/select";
import Button from "@/ui/atoms/button";
import Form from "../form/form";
import InputLabel from "@/ui/molecules/input-label/input-label";
import TextareaLabel from "@/ui/molecules/textarea-label/textarea-label";
import SelectLabel from "@/ui/molecules/select-label/select-label";
import styles from "./vacancies-form.module.scss";

interface VacanciesFormProps {
    color: "vacancies" | "companies";
    options: Option[];
    cardID?: number;
    toggleModal: () => void; 
};

const baseVacancy: INewVacancy = {
    title: "",
    description: "",
    status: "",
    companyId: ""
};

const VacanciesForm: React.FC<VacanciesFormProps> = ({ color, options, cardID, toggleModal }) => {

    const useVacanciesService = new VacanciesService();

    const router = useRouter();

    const [vacancy, setVacancy] = useState<INewVacancy>(baseVacancy);

    useEffect(() => {

        if (cardID) {

            try {
                const fetchVacancy = async () => {

                    const data = await useVacanciesService.findOne(cardID);
                    setVacancy({ title: data.title, description: data.description, status: data.status, companyId: data.company.id });
                };

                fetchVacancy();

            } catch (error) {
                console.log("error al encontrar la vacante", error);
            }
        };

    }, [cardID]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {

        const { name, value } = event.target;
        setVacancy(previusData => ({ ...previusData, [name]: value }));
    };

    const selectLabel = [
        {
            labelProps: { htmlFor: "status", children: "Estado:" },
            selectProps: { id: "status", name: "status", options: [{ label: "Selecciona una opción", value: " " }, { label: "Open", value: "ACTIVE" }, { label: "Pending", value: "INACTIVE" }], value: vacancy.status, onChange: handleChange }
        },
        {
            labelProps: { htmlFor: "companyId", children: "Compañía:" },
            selectProps: { id: "companyId", name: "companyId", options: [{ label: "Selecciona una opción", value: " " }, ...options], value: vacancy.companyId, onChange: handleChange }
        }
    ];

    const inputLabel = [
        {
            labelProps: { htmlFor: "title", children: "Título:" },
            inputProps: { type: "text", id: "title", name: "title", value: vacancy.title, onChange: handleChange }
        }
    ];

    const textareaLabel = [
        {
            labelProps: { htmlFor: "description", children: "Descripción:" },
            textareaProps: { id: "description", name: "description", value: vacancy.description, onChange: handleChange }
        }
    ];

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        if (!vacancy.title || !vacancy.description || !vacancy.status || !vacancy.companyId) {

            alert("por favor, completa todos los campos");
            return;
        };
    
        try {

            if (cardID) {

                await useVacanciesService.update(cardID, vacancy);
                console.log("vacante actualizada exitosamente");
                
            } else {
              
                await useVacanciesService.create(vacancy);
                console.log("vacante creada exitosamente");
            };

            setVacancy(baseVacancy);
            router.refresh();
            toggleModal();
            
        } catch (error) {

            console.log(error, "ocurrió un error al realizar la petición");
        };
    };

    return (
        <Form onSubmit={handleSubmit}>

            {inputLabel.map((element, index) => (
                <InputLabel key={index} labelProps={element.labelProps} inputProps={element.inputProps} color="vacancies"></InputLabel>
            ))}

            {textareaLabel.map((element, index) => (
                <TextareaLabel key={index} labelProps={element.labelProps} textareaProps={element.textareaProps} color="vacancies"></TextareaLabel>
            ))}

            {selectLabel.map((element, index) => (
                <SelectLabel key={index} labelProps={element.labelProps} selectProps={element.selectProps} color="vacancies"></SelectLabel>
            ))}

            <Button type="submit" className={`${styles.button} ${styles[color]}`}>{cardID ? "Actualizar" : "Agregar"}</Button>
        </Form>
    );
};

export default VacanciesForm;