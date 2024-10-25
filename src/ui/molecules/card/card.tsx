import Title from "@/ui/atoms/title";
import Button from "@/ui/atoms/button";
import { icons } from "@/ui/atoms/icons";
import styles from "./card.module.scss";

interface CardProps {
    title : string;
    children : React.ReactNode;
    color : "vacancies" | "companies";
    onEdit : () => void;
    onDelete : () => void;
};

const Card: React.FC<CardProps> = ({ title, children, color, onEdit, onDelete }) => {

    return (
        <div className={styles.card}>
            <Title level={3}>{title}</Title>
            <div className={styles.data}>
                {children}
            </div>
            <div className={styles.actions}>
                <Button type="button" onClick={onEdit} className={`${styles.button} ${styles[color]}`}>{icons.edit}</Button>
                <Button type="button" onClick={onDelete} className={`${styles.button} ${styles.delete}`}>{icons.delete}</Button>
            </div>
        </div>
    );
};

export default Card;