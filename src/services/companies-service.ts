import { Content, ICompanyResponse, INewCompany } from "@/models/companies-model";
import { HttpClient } from "@/utils/client-http";

export class CompaniesService {

    private httpClient : HttpClient;

    constructor() {
        this.httpClient = new HttpClient(); // inyección de dependencias -> el constructor le da valor al atributo que contiene la clase. 
    };

    async find(page : number, size : number) {

        try {
            const data = this.httpClient.get<ICompanyResponse>(`company?page=${page}&size=${size}`);
            return data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async findAll() {

        try {
            const data = this.httpClient.get<Content[]>("company/all");
            return data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async create( body : INewCompany ) {

        try {
            const data = this.httpClient.post<Content, INewCompany>("company", body);
            return data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    // async update( id : string, body : INewCoder ) {

    //     try {
    //         const coder = this.httpClient.update<ICoder, INewCoder>(`coders/${id}`, body);
    //         return coder;

    //     } catch (error) {
    //         console.log(error);
    //         throw error;
    //     }
    // };

    async destroy( id : string ) {

        try {
            const data = this.httpClient.delete(`company/${id}`);
            return data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    };
}