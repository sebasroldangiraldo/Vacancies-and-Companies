"use client";

import { useState } from "react";
import Text from "@/ui/atoms/text";
import Card from "@/ui/molecules/card/card";
import Header from "@/ui/molecules/header/header";
import Modal from "@/ui/organisms/modal/modal";
import VacanciesForm from "@/ui/organisms/vacancies-form/vacancies-form";
import styles from "./vacancies.module.scss";

const Vacancies: React.FC = () => {

    const [modal, setModal] = useState<boolean>(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    const handleEdit = () => {
        console.log("actualizar");
    };

    const handleDelete = () => {
        console.log("eliminar");
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("enviar formulario");
    };
    
    return (
        <div>
            <Header title="Vacantes" name="Agregar Vacante" icon="add" color="vacancies" onClick={toggleModal}></Header>
            <Modal title="Agregar Vacante" open={modal} onClose={toggleModal}>
                <VacanciesForm onSubmit={handleSubmit} color="vacancies"></VacanciesForm>
            </Modal>
            <div className={styles.container}>
                <Card title="Desarrollador Front-end" onEdit={handleEdit} onDelete={handleDelete} color="vacancies">
                    <Text>Descripción</Text>
                    <Text>Estado: OPEN</Text>
                    <Text>Compañía: TechCorp</Text>
                </Card>
                <Card title="Desarrollador Front-end" onEdit={handleEdit} onDelete={handleDelete} color="vacancies">
                    <Text>Descripción</Text>
                    <Text>Estado: OPEN</Text>
                    <Text>Compañía: TechCorp</Text>
                </Card>
                <Card title="Desarrollador Front-end" onEdit={handleEdit} onDelete={handleDelete} color="vacancies">
                    <Text>Descripción</Text>
                    <Text>Estado: OPEN</Text>
                    <Text>Compañía: TechCorp</Text>
                </Card>
                <Card title="Desarrollador Front-end" onEdit={handleEdit} onDelete={handleDelete} color="vacancies">
                    <Text>Descripción</Text>
                    <Text>Estado: OPEN</Text>
                    <Text>Compañía: TechCorp</Text>
                </Card>
            </div>
        </div>

    );
};

export default Vacancies;