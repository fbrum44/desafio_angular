import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/book";

@Injectable()

export class BooksService {
    
    private url = 'http://example.com';

    httpOptions = {
        Headers: new HttpHeaders ({'content-type': 'aplication/json'})
    }
    constructor(private http:HttpClient) {

        getBook() {
            return this.http.get(this.url)
        }

    }
}
