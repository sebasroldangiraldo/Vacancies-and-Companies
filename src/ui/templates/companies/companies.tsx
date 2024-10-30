"use client";

import { useState } from "react";
import { ICompanyResponse } from "@/models/companies-model";
import Text from "@/ui/atoms/text";
import Card from "@/ui/molecules/card/card";
import Header from "@/ui/molecules/header/header";
import Modal from "@/ui/organisms/modal/modal";
import CompaniesForm from "@/ui/organisms/companies-form/companies-form";
import Pagination from "@/ui/organisms/pagination/pagination";
import styles from "./companies.module.scss";

interface CompaniesProps {
    data : ICompanyResponse;
};

const Companies : React.FC<CompaniesProps> = ({ data }) => {

    const [modal, setModal] = useState<boolean>(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleEdit = () => {
        console.log("actualizar");
    };

    const handleDelete = () => {
        console.log("eliminar");
    };

    return (
        <div>

            <Header title="Compañías" name="Agregar Compañía" icon="add" color="companies" onClick={toggleModal}></Header>

            <Modal title="Agregar Compañía" open={modal} onClose={toggleModal}>
                <CompaniesForm color="companies"></CompaniesForm>
            </Modal>

            <div className={styles.container}>
              {data.content.map((company, index)=>(
                <Card key={index} title={company.name} color="companies" onEdit={handleEdit} onDelete={handleDelete}>
                    <Text>{company.location}</Text>
                    <Text>{company.contact}</Text>
                </Card>
              ))}
            </div>

            <Pagination data={data}></Pagination>
        </div>
    );
};

export default Companies;