import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomepageServiceService } from '../app-services/homepage-service.service';
import { ICustomerPcbuildDetail } from '../app-interfaces/ICustomerPcbuildDetail';

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
  constructor(private _homepageService: HomepageServiceService) { }
  ngOnInit() { }
  AddDetails(form: NgForm) {
    //console.log(form.value.name);
    //console.log(form.value.email);
    //console.log(form.value.UseCase);
    //console.log(form.value.Budget);
    //console.log(form.value.AdditionalNotes);

    //console.log('Easter Egg');
    this._homepageService.addPCBuildDetails(form.value.name, form.value.email, form.value.UseCase, form.value.Budget,
      form.value.AdditionalNotes).subscribe(
        response => {
          this.status = response;
          if (response) {
            alert("Details submitted successfully. \n\nThis is an experimental website.\n\nFor business enquiries, contact us on WhatsApp at:\n+91-8368490306");
            form.reset();
          } else {
            alert("Sorry, there is some error. Please verify your details. Make sure the Email-Id is unique.")
            form.reset();
          }
        },
        responseError => {
          alert("Sorry, there is some error. Please verify your details.")
          form.reset();
        },
        () => console.log("Easter Egg.")
      );
  }
}
