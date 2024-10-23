import Title from "@/ui/atoms/title";
import Button from "@/ui/atoms/button";
import { icons } from "@/ui/atoms/icons";
import styles from "./header.module.scss";

interface HeaderProps {
    title: string;
    name: string;
    icon: keyof typeof icons;
    color: string;
}

const Header: React.FC<HeaderProps> = ({ title, name, icon, color }) => {
    
    return (
        <div className={styles.container}>
            <Title level={2}>{title}</Title>
            <Button type="button" className={`${styles.button} ${styles[color]}`}>{icons[icon]}{name}</Button>
        </div>
    );
};

export default Header;

{/* <div className={styles.container}>
<Title level={2}>{title}</Title>
<div className={`${styles.buttonContainer} ${styles[colorButton]}`} > 
    {icons[iconName]}
    <Button type="button" className={styles.button}>{buttonTitle}</Button>
</div>
</div> */}