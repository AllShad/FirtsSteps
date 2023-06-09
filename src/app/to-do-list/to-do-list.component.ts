import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  toDoList:string[] = [];
  listItem:string = '';
  invalid:string ='';

  constructor() { }

  ngOnInit(): void {
  }

  insertOnList(){
    this.toDoList.push(this.listItem);
  }

  deletOnList(index : number){
    this.toDoList.splice(index, 1);
  }

}
