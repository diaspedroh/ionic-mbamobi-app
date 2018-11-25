import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { PessoaDTO } from "../../models/pessoa.dto";
import { API_CONFIG } from "../../config/api.config";
import { StorageService } from "../storage.service";

@Injectable()
export class PessoaService {

    constructor(
        public http: HttpClient, 
        public storage: StorageService) {
    }

    findById(id: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/pessoas/${id}`);
    }
    
    findByEmail(email: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/pessoas/email?value=${email}`);
    }

    insert(obj : PessoaDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/pessoas`, 
            obj,
            { 
                observe: 'response', 
                responseType: 'text'
            }
        ); 
    }

}
