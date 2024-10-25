import Title from "@/ui/atoms/title";
import styles from "./card.module.scss";
import Button from "@/ui/atoms/button";
import { icons } from "@/ui/atoms/icons";

interface CardProps {
    title : string;
    children : React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children}) => {

    return (
        <div className={styles.card}>
            <Title level={3}>{title}</Title>
            <div>
                {children}
            </div>
            <div>
                <Button>{icons.edit}</Button>
                <Button>{icons.delete}</Button>
            </div>
        </div>
    );
};

export default Card;