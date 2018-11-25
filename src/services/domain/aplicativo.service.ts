import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { AplicativoDTO } from "../../models/aplicativo.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AplicativoService {

    constructor(public http: HttpClient) {
    }

    findPageByPessoa(page : number = 0, linesPerPage : number = 24) : Observable<AplicativoDTO[]>  {
        return this.http.get<AplicativoDTO[]>(`${API_CONFIG.baseUrl}/aplicativos/page/pessoas?page=${page}&linesPerPage=${linesPerPage}`);
    }
}
