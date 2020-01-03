import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Helpers } from '../helpers/helpers';
import { AppConfig } from 'src/config/config';
import { Observable } from 'rxjs';
import { BaseService } from './baseService';

@Injectable()

export class TokenService extends BaseService {

  private pathAPI = this.config.setting['PathAPI'];

  public errorMessage: string;

  constructor(private http: HttpClient, private config: AppConfig, helper: Helpers) { super(helper); }

  auth(data: any): any {

    let body = JSON.stringify(data);

    return this.getToken(body);

  }

  private getToken (body: any): Observable<any> {

    return this.http.post<any>(this.pathAPI + 'token', body, super.header()).pipe(

        catchError(super.handleError)

      );

  }

}