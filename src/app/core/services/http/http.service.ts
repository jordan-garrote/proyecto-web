import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private defaultHeader: HttpHeaders = new HttpHeaders()

  constructor(
    private http: HttpClient,
  ) {
    this.defaultHeader
      .append('Accept', 'application/json')
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Origin', '*');
  }

  callSP(body: any = {}): Promise<any> {
    // params = [],
    // let httpParams = new HttpParams();
    // params.forEach(p => {
    //   httpParams = httpParams.append(p.key, p.value);
    // });

    return new Promise((resolve, reject) => this.http.put(`${environment.baseUrl}json/CALLSP`, body, { headers: this.defaultHeader })
        .subscribe((response: any) => {
          resolve({ data: response });
        }, (error): any => {
          // this.logException(error.message.toString()).then((response: any) => {
          //   console.log('response', response);
          // }).catch((error: any) => { console.log('Error: ', error.message.toString()); });
          alert(error.message.toString());
          reject({ msg: error });
        }));
  }
}
