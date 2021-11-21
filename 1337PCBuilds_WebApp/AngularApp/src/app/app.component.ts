import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICustomerPcbuildDetail } from '../app-interfaces/ICustomerPcbuildDetail';
//import { HomepageServiceService } from './app-services/homepage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  notes = '';
  status = false;
  //errorAddmsg = '';
  //showDiv = false;
  //msg = '';
  title = '1337PCBuildsApp';
  //constructor(private _homepageService: HomepageServiceService) { }
  ngOnInit() { }
  AddDetails(form: NgForm) {
    

   
  }
}
