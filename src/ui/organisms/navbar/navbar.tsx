import NavLink from "../../atoms/link";
import Input from "../../atoms/input";
import { icons } from "../../atoms/icons";
import styles from "./navbar.module.scss";

const links = [
    { path: "/vacancies", title: "Vacantes", icon: icons.suitcase },
    { path: "/companies", title: "Compañías", icon: icons.building }
];

const Navbar: React.FC = () => {

    return (
        <nav className={styles.nav}>
            <div className={styles.navLinks}>
                {links.map((item, key) => (
                    <NavLink path={item.path} title={item.title} key={key} icon={item.icon} className={styles.navLink}/>
                ))}
            </div>
            <div className={styles.search}>
                {icons.search}
                <Input type="text" placeholder="Buscar..." className={styles.input}></Input>
            </div>
        </nav>
    );
};

export default Navbar;

