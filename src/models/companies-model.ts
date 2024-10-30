export interface ICompanyResponse {
    content: Content[];
    pageable: Pageable;
    totalElements: number;
    totalPages: number;
    last: boolean;
    numberOfElements: number;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    empty: boolean;
};

export interface Content {
    id: string;
    name: string;
    location: string;
    contact: string;
    vacants: Vacant[];
};

export interface Vacant {
    id: number;
    title: string;
    description: string;
    status: string;
};

export interface Pageable {
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    offset: number;
    unpaged: boolean;
    paged: boolean;
};

export interface Sort {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
};

export interface INewCompany {
    name: string;
    location: string;
    contact: string;
}