"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ICompanyResponse } from "@/models/companies-model";
import { CompaniesService } from "@/services/companies-service";
import Text from "@/ui/atoms/text";
import Card from "@/ui/molecules/card/card";
import Header from "@/ui/molecules/header/header";
import Modal from "@/ui/organisms/modal/modal";
import CompaniesForm from "@/ui/organisms/companies-form/companies-form";
import Pagination from "@/ui/organisms/pagination/pagination";
import styles from "./companies.module.scss";

interface CompaniesProps {
    data: ICompanyResponse;
};

const Companies: React.FC<CompaniesProps> = ({ data }) => {

    const useCompaniesService = new CompaniesService();

    const router = useRouter();

    const [modal, setModal] = useState<boolean>(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleEdit = () => {
        setModal(!modal);
        console.log("actualizar");
    };

    const handleDelete = async (id: string) => {

        const confirmation = confirm("¿deseas eliminar esta compañía?");

        if (!confirmation) return;

        try {
            await useCompaniesService.destroy(id);
            router.refresh();
            console.log("compañía eliminada existosamente");

        } catch (error) {
            console.log(error, "ocurrió un error al eliminar la compañía");
        }
    };

    return (
        <div>

            <Header title="Compañías" name="Agregar Compañía" icon="add" color="companies" onClick={toggleModal}></Header>

            <Modal title="Agregar Compañía" open={modal} onClose={toggleModal}>
                <CompaniesForm color="companies"></CompaniesForm>
            </Modal>

            <div className={styles.container}>
                {data.content.map((company, index) => (
                    <Card key={index} title={company.name} color="companies" onEdit={handleEdit} onDelete={() => handleDelete(company.id)}>
                        <Text>{company.location}</Text>
                        <Text>Contacto: {company.contact}</Text>
                    </Card>
                ))}
            </div>

            <Pagination data={data}></Pagination>
        </div>
    );
};

export default Companies;