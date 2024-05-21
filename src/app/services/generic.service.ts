import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GenericService<Entity> {
urlNew: string = environment.apiUrl;



constructor (private http: HttpClient){}
getById(entity: string, id: number): Observable<Entity> {
  const url = `${this.urlNew}${entity}/${id}`;
  return this.http.get<Entity>(url);
  }

getAll(endpoint: string): Observable<Entity[]> {
  const url = `${this.urlNew}${endpoint}`;
  return this.http.get<Entity[]>(url);
}

create (s:Entity, endpoint:string):Observable<Entity>{
  return this.http.post<Entity>(`${this.urlNew}${endpoint}`,s,httpOptions);
}

  
delete(endpoint: string, id: number): Observable<any> {
  const url = `${this.urlNew}${endpoint}/${id}`;
  return this.http.delete(url, httpOptions);
}



update(entity: Entity, endpoint: string, entityId: number): Observable<Entity> {
    const url = `${this.urlNew}${endpoint}/${entityId}`;
    return this.http.put<Entity>(url, entity, httpOptions);
  }


}
