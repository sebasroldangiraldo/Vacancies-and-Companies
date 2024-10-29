"use client";

import { useState } from "react";
import Text from "@/ui/atoms/text";
import Card from "@/ui/molecules/card/card";
import Header from "@/ui/molecules/header/header";
import Modal from "@/ui/organisms/modal/modal";
import CompaniesForm from "@/ui/organisms/companies-form/companies-form";
import styles from "./companies.module.scss";

const Companies : React.FC = () => {

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
            <Header title="Compañías" name="Agregar Compañía" icon="add" color="companies" onClick={toggleModal}></Header>
            <Modal title="Agregar Compañía" open={modal} onClose={toggleModal}>
                <CompaniesForm onSubmit={handleSubmit} color="companies"></CompaniesForm>
            </Modal>
            <div className={styles.container}>
                <Card title="TechCorp" onEdit={handleEdit} onDelete={handleDelete} color="companies">
                    <Text>Ciudad</Text>
                    <Text>Contacto: 555-0101</Text>
                </Card>
                <Card title="TechCorp" onEdit={handleEdit} onDelete={handleDelete} color="companies">
                    <Text>Ciudad</Text>
                    <Text>Contacto: 555-0101</Text>
                </Card>
                <Card title="TechCorp" onEdit={handleEdit} onDelete={handleDelete} color="companies">
                    <Text>Ciudad</Text>
                    <Text>Contacto: 555-0101</Text>
                </Card>
                <Card title="TechCorp" onEdit={handleEdit} onDelete={handleDelete} color="companies">
                    <Text>Ciudad</Text>
                    <Text>Contacto: 555-0101</Text>
                </Card>
            </div>
        </div>
    );
};

export default Companies;