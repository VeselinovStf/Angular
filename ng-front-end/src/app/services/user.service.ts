import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Helpers } from '../helpers/helpers';
import { BaseService } from './baseService';
import { AppConfig } from 'src/config/config';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService extends BaseService {

  private pathAPI = this.config.setting['PathAPI'];

  constructor(private http: HttpClient, private config: AppConfig, helper: Helpers) { super(helper); }

  /** GET heroes from the server */
  getUsers (): Observable<any> {
    return this.http.get(
        this.pathAPI + 'user', super.header()).pipe(
    catchError(super.handleError)
    );
  }
}