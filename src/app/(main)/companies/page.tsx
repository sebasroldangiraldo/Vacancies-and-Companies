import { CompaniesService } from "@/services/companies-service";
import Companies from "@/ui/templates/companies/companies";

interface CompaniesPageProps {
    searchParams: {
        page: string;
        size: string;
        name: string;
    };
};

const useCompanyService = new CompaniesService();

export const generateMetadata = async ({ searchParams }: CompaniesPageProps) => {

    const page = searchParams.page ?? 1;

    return {
        title: `Companies - Page ${page}`,
        description: 'Companies Managment'
    };
};

export default async function CompaniesPage({ searchParams }: CompaniesPageProps) {

    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 6;

    const data = await useCompanyService.findAll(page, size);
    console.log(data);

    return (
        <div>
            <Companies data={data} />
        </div>
    );
}