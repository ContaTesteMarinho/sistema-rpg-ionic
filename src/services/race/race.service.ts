import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { RacesDTO } from "../../models/race.dto";

@Injectable()
export class RaceService 
{
    constructor(public http: HttpClient) {}

    findAll = () : Observable<RacesDTO[]>  => this.http.get<RacesDTO[]>(`${API_CONFIG.baseUrl}/races`);
}