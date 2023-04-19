import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailBody } from '../models/EmailBody';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url: string = "localhost/8080";

  constructor(
    private http: HttpClient
  ) { }

  public sendEmail(body: EmailBody): void {
    this.http.post(this.url, body);
  }    
}
