import Title from '@/ui/atoms/title';
import Navbar from '@/ui/organisms/navbar/navbar';
import styles from "./layout.module.scss";

interface LayoutProps {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.layoutContainer}>
            <Title level={1} className={styles.title}>Panel de Administración</Title>
            <Navbar></Navbar>
            <main>{children}</main>
        </div>
    );
};

export default Layout;