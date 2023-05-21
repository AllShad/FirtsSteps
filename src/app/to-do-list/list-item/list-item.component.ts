import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() item:string = '';
  class:string = 'uncheked';
  constructor() { }

  ngOnInit(): void {
  }

  changeClass(){
    if (this.class == 'uncheked')
      this.class = 'cheked';
    else  
      this.class = 'uncheked';
  }

}
