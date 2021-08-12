import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICustomerPcbuildDetail } from 'src/app-interfaces/ICustomerPcbuildDetail';
//import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class HomepageServiceService {

  constructor(private http: HttpClient) { }

  addPCBuildDetails(Name: string, EmailId: string, UseCase: string, Budget: string, AdditionalNotes: string): Observable<boolean> {
    var obj: ICustomerPcbuildDetail;
    obj = { Name: Name, EmailId: EmailId, UseCase: UseCase, Budget: Budget, AdditionalNotes: AdditionalNotes };
    var response =  this.http.post<boolean>('https://localhost:44382/api/_1337/AddDetails', obj)
      .pipe(catchError(this.errorHandler));
    return response;
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'ERROR')
  }
}
