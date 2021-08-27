import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailsFormComponent implements OnInit {
  detailsForm = new FormGroup({}) 
  constructor(private formBuilder:FormBuilder) { }

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

}
