import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { of, Observable, throwError } from "rxjs";


@Injectable({providedIn: "root"})
export class HttpMiddlewareService{
    constructor(private readonly http: HttpClient){

    }

    public post(url, body){ // headers? : headerParams - ha szükséges lesz majd paraméterezhető header
        return this.http.post(url, body, { headers: this.createHeaders()}).pipe(catchError((error) => of(this.handleError(error))));
    }

    public get(url){ // headers? : headerParams - ha szükséges lesz majd paraméterezhető header
        return this.http.get(url, { headers: this.createHeaders()}).pipe(catchError((error) => of(this.handleError(error))));
    }

    public patch(url, body){ // headers? : headerParams - ha szükséges lesz majd paraméterezhető header
        return this.http.patch(url, body, { headers: this.createHeaders()}).pipe(catchError((error) => of(this.handleError(error))));
    }

    public delete(url){ // headers? : headerParams - ha szükséges lesz majd paraméterezhető header
        return this.http.delete(url, { headers: this.createHeaders()}).pipe(catchError((error) => of(this.handleError(error))));
    }

    public put(url, body){ // headers? : headerParams - ha szükséges lesz majd paraméterezhető header
        return this.http.put(url, body, { headers: this.createHeaders()}).pipe(catchError((error) => of(this.handleError(error))));
    }


    private createHeaders(headerParams?):HttpHeaders{
        let headers = new HttpHeaders();
        headers = headers.append("Content-Type", "application/json");
        return headers;
    }   

    private handleError(error){
        alert(error);
        return throwError(error); 
    }
}