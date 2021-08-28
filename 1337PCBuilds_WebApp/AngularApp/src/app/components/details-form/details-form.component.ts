import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomepageServiceService } from 'src/app-services/homepage-service.service';


@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailsFormComponent implements OnInit {
  detailsForm = new FormGroup({}) 
  constructor(private formBuilder:FormBuilder, private _homepageService: HomepageServiceService) { }

  ngOnInit(): void {
    this.detailsForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      use: ['', [Validators.required]],
      budget: ['',[Validators.required]],
      notes: ['',[Validators.maxLength(250)]]
    })
  }

  get name(){
    return this.detailsForm?.get('name')
  }
  get email(){
    return this.detailsForm?.get('email')
  }
  get use(){
    return this.detailsForm?.get('use')
  }
  get budget(){
    return this.detailsForm?.get('budget')
  }
  get notes(){
    return this.detailsForm?.get('notes')
  }
  
  AddDetails(){
    console.log('working!');
    console.log(this.name?.value);
    
    if(this.detailsForm.invalid){
      console.log(this.detailsForm);
      alert("Please verify your details.")
      this.detailsForm.reset();
    }else{
      this._homepageService.addPCBuildDetails(this.name?.value, this.email?.value, this.use?.value, this.budget?.value, this.notes?.value).subscribe(
          response => {
            if (response) {
              alert("Details submitted successfully. \n\nThis is an experimental website.\n\nFor business enquiries, contact us on WhatsApp at:\n+91-8368490306");
              this.detailsForm.reset();
            } else {
              alert("Sorry, there is some error. Please verify your details. Make sure the Email-Id is unique.")
              this.detailsForm.reset();
            }
          },
          responseError => {
            alert("Sorry, there is some error. Please verify your details.")
            this.detailsForm.reset();
          },
          () => console.log("Easter Egg.")
        );
    }
  }
  

}
