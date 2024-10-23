"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../organisms/navbar/navbar.module.scss";

export interface NavLinkProps {
    path: string;
    title: string;
    className: string;
    icon?: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ path, title, className, icon }) => {

    const currentPath = usePathname();
    const active = currentPath === path;

    return (
        <Link href={path} className={`${className} ${active ? (path === "/vacancies" ? styles.vacancies : styles.companies) : ""}`}>{icon}{title}</Link>
    );
};

export default NavLink;