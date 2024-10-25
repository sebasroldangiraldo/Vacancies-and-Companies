"use client";

import Text from "@/ui/atoms/text";
import Card from "@/ui/molecules/card/card";
import Header from "@/ui/molecules/header/header";
import styles from "./vacancies.module.scss";

const Vacancies: React.FC = () => {

    const handleEdit = () => {
        console.log("actualizar");
    };

    const handleDelete = () => {
        console.log("eliminar");
    };

    return (
        <div>
            <Header title="Vacantes" name="Agregar Vacante" icon="add" color="vacancies"></Header>
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