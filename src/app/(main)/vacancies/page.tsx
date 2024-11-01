import { CompaniesService } from "@/services/companies-service";
import { VacanciesService } from "@/services/vacancies-service";
import Vacancies from "@/ui/templates/vacancies/vacancies";

interface VacanciesPageProps {
    searchParams: {
        page: string;
        size: string;
        name: string;
    };
};

const useVacanciesService = new VacanciesService();
const useCompaniesService = new CompaniesService();

export const generateMetadata = async ({ searchParams }: VacanciesPageProps) => {

    const page = searchParams.page ?? 1;

    return {
        title: `Vacancies - Page ${page}`,
        description: 'Vacancies Managment'
    };
};

export default async function VacanciesPage( { searchParams } : VacanciesPageProps) {

    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 6;

    const data = await useVacanciesService.findAll(page, size);
    console.log(data);

    const response = await useCompaniesService.findAll();

    const select = response.map((company) => (
        { label : company.name, value : company.id }
    ));

    return (
        <div>
            <Vacancies options={select} data={data} />
        </div>
    );
}