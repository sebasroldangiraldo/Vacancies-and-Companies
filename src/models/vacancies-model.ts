export interface IVacancyResponse {
    content: Content[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    numberOfElements: number;
    first: boolean;
    size: number;
    number: number;
    sort: Sort;
    empty: boolean;
};

export interface Content {
    id: number;
    title: string;
    description: string;
    status: string;
    company: Company;
};

export interface Company {
    id: string;
    name: string;
    location: string;
    contact: string;
};

export interface Pageable {
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    offset: number;
    paged: boolean;
    unpaged: boolean;
};

export interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
};

export interface INewVacancy {
    title: string;
    description: string;
    status: string;
    companyId: string;
};