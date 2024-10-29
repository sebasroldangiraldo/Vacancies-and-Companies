import Button from "@/ui/atoms/button";
import { icons } from "@/ui/atoms/icons";
import styles from "./pagination.module.scss";

const Pagination : React.FC = () => {
    return (
        <div className={styles.container}>
            <Button className={styles.button}>{icons.back}</Button>
            <span>Página 1 de 1</span>
            <Button className={styles.button}>{icons.foward}</Button>
        </div>
    );
};

export default Pagination;