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
    // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result)=>{
    //   console.log("modal open");
      
    // }), (reason:any) =>{
    //   console.log(reason);
    // }
    this.modalService.open(content, {centered:true, backdropClass:'.black-backdrop'});
  }
   
  

}
