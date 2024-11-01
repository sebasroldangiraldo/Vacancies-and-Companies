"use client";

import { useState } from "react";
import Text from "@/ui/atoms/text";
import Card from "@/ui/molecules/card/card";
import Header from "@/ui/molecules/header/header";
import Modal from "@/ui/organisms/modal/modal";
import VacanciesForm from "@/ui/organisms/vacancies-form/vacancies-form";
import Pagination from "@/ui/organisms/pagination/pagination";
import styles from "./vacancies.module.scss";
import { IVacancyResponse } from "@/models/vacancies-model";
import { VacanciesService } from "@/services/vacancies-service";
import { useRouter } from "next/navigation";

interface VacanciesProps {
    data: IVacancyResponse;
    options: {
        label: string;
        value: string;
    }[]
};

const Vacancies: React.FC<VacanciesProps> = ({ data, options }) => {

    const useVacanciesService = new VacanciesService();

    const router = useRouter();

    const [modal, setModal] = useState<boolean>(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    const handleEdit = () => {
        setModal(!modal);
        console.log("actualizar");
    };

    const handleDelete = async ( id : number ) => {
        
        const confirmation = confirm("¿deseas eliminar esta vacante?");

        if (!confirmation) return;

        try {
            await useVacanciesService.destroy(id);
            router.refresh();
            console.log("vacante eliminada existosamente");

        } catch (error) {
            console.log(error, "ocurrió un error al eliminar la vacante");
        }
    };
    
    return (
        <div>
            <Header title="Vacantes" name="Agregar Vacante" icon="add" color="vacancies" onClick={toggleModal}></Header>
            <Modal title="Agregar Vacante" open={modal} onClose={toggleModal}>
                <VacanciesForm options={options} color="vacancies"></VacanciesForm>
            </Modal>
            <div className={styles.container}>
                {data.content.map((vacancy, index) => (
                    <Card key={index} title={vacancy.title} color="vacancies" onEdit={handleEdit} onDelete={() => handleDelete(vacancy.id)}>
                        <Text>{vacancy.description}</Text>
                        <Text>Estado: {vacancy.status}</Text>
                        <Text>Compañía: {vacancy.company.name}</Text>
                    </Card>
                ))}
            </div>
            <Pagination data={data}></Pagination>
        </div>

    );
};

export default Vacancies;