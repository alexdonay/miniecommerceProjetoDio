import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable()
export class BookService{
    private url = "http://localhost:8080/produtos";
    httpOptions = {
        Headers: new HttpHeaders({'content-type':"aplication/json"})

    }

    constructor(private http:HttpClient){

    }
    getBook(){
        return this.http.get(this.url)
    }

}
