import { Content, INewVacancy, IVacancyResponse } from "@/models/vacancies-model";
import { HttpClient } from "@/utils/client-http";

export class VacanciesService {

    private httpClient : HttpClient;

    constructor() {
        this.httpClient = new HttpClient(); // inyección de dependencias -> el constructor le da valor al atributo que contiene la clase. 
    };

    async findAll(page : number, size : number) {

        try {
            const data = this.httpClient.get<IVacancyResponse>(`vacants?page=${page}&size=${size}`);
            return data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async findOne(id : number) {

        try {
            const data = this.httpClient.get<Content>(`vacants/${id}`);
            return data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async create( body : INewVacancy ) {

        try {
            const data = this.httpClient.post<Content, INewVacancy>("vacants", body);
            return data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async update( id : number, body : INewVacancy ) {

        try {
            const coder = this.httpClient.update<Content, INewVacancy>(`vacants/${id}`, body);
            return coder;

        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async destroy( id : number ) {

        try {
            const data = this.httpClient.delete(`vacants/${id}`);
            return data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    };
}