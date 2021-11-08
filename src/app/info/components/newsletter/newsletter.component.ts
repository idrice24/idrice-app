import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap'; // to use bootstrap js and jq

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  closeModal:string;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }


  triggerModal(content){
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
