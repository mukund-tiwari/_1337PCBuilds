import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  } 

  open(content:any){
    this.modalService.open(content, {centered:true, backdropClass:'.black-backdrop', scrollable:true});
  }
   
  

}
