import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';


@Injectable()
export class DataService{
    baseUrl: string = "data/structure/buildingBlocks.json";

    constructor(private httpClient : HttpClient){}

    getBuildingBlocks() : Observable<string[]>{
        return this.httpClient.get<string[]>(this.baseUrl)
    }
}