import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cat} from './cat.model';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';

@Injectable()
export class CatsService {

  constructor(private http: HttpClient) {
  }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(environment.api + '/cats');
  }

  addCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(environment.api + '/cats', cat);
  }

  removeCat(catId: number): Observable<Cat> {
    return this.http.delete<Cat>(environment.api + `/cats/${catId}`);
  }

  editCat(cat: Cat) {
    return this.http.put<Cat>(environment.api + `/cats/${cat.id}`, cat);
  }
}
