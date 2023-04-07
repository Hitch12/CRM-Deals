import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Contact } from './contact';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  potentialValue:Array<Contact> = [];
  focus:Array<Contact> = [];
  contactMade:Array<Contact> = [];
  offerSent:Array<Contact> = [];
  gettingReady:Array<Contact> = [];
  contacts:Array< Contact> = [];
  temp:string = "";

  // Dependency Injection
  constructor(private _TaskService:TaskService) {}




  // methods
  getContacts(){
    this._TaskService.getContacts().subscribe({
      next:(result)=>{
        this.contacts = result.deals;
        this.sortContacts(this.contacts)
        this.temp

      }
    })
  }

  sortContacts(contacts:Array<Contact>){
    this.potentialValue=[];
    this.focus=[];
    this.contactMade=[];
    this.offerSent=[];
    this.gettingReady=[];
    for (let i = 0; i < contacts.length; i++) {
      switch (this.contacts[i].status) {
        case "Potential Value":
          this.potentialValue.push(contacts[i]);
          break;
        case "Focus":
          this.focus.push(contacts[i]);
          break;
        case "Contact Made":
          this.contactMade.push(contacts[i]);
          break;
        case "Offer Sent":
          this.offerSent.push(contacts[i]);
          break;
        case "Getting Ready":
          this.gettingReady.push(contacts[i]);
          break;
        default:
          break;
      }
    }
  }

  drop(event: CdkDragDrop<Contact[]>,nameOfArray:string) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    }
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      let itemSelect=event.container.data[event.currentIndex]
      itemSelect.status=nameOfArray;
    }
    this.temp="";
  }



  ngOnInit(){
    this.getContacts()
  }


}
