import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { WeaponDTO } from "../../models/weapon.dto";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class StoreService {

    constructor(public http: HttpClient) {}

    findWeapons = () : Observable<WeaponDTO[]> => this.http.get<WeaponDTO[]>(`${API_CONFIG.baseUrl}/weapons`);
}