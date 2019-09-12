import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, XhrFactory } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UploadService{
    public url: string;

    constructor(public _http: HttpClient){
        this.url = 'http://localhost:8080/';
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string){
        const formData: FormData = new FormData();

        for(var i=0; i < files.length; i++){
            formData.append(name, files[i], files[i].name);
        }

        return this._http.post(url, formData);

    }
}