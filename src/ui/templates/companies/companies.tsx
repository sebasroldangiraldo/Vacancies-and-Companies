"use client";

import Text from "@/ui/atoms/text";
import Card from "@/ui/molecules/card/card";
import Header from "@/ui/molecules/header/header";
import styles from "./companies.module.scss";

const Companies : React.FC = () => {

    const handleEdit = () => {
        console.log("actualizar");
    };

    const handleDelete = () => {
        console.log("eliminar");
    };

    return (
        <div>
            <Header title="Compañías" name="Agregar Compañía" icon="add" color="companies"></Header>
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