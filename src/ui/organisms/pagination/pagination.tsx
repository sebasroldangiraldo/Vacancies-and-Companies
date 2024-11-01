import { useSearchParams, useRouter } from "next/navigation";
import { ICompanyResponse } from "@/models/companies-model";
import { IVacancyResponse } from "@/models/vacancies-model";
import { icons } from "@/ui/atoms/icons";
import Button from "@/ui/atoms/button";
import styles from "./pagination.module.scss";

interface PaginationProps {
    data: ICompanyResponse | IVacancyResponse;
};

const Pagination: React.FC<PaginationProps> = ({ data }) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const onPageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());

        router.push(`?${params.toString()}`);
    };
    
    const currentPage = data.pageable.pageNumber + 1;

    return (
        <div className={styles.container}>
            <Button className={styles.button} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>{icons.back}</Button>
            <span>Página {currentPage} de {data.totalPages}</span>
            <Button className={styles.button} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === data.totalPages}>{icons.foward}</Button>
        </div>
    );
};

export default Pagination;