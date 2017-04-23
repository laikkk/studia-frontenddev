import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: string[] = ['Bolek', 'Lolek', 'Antoś'];
  @Input() selectedUser: string;
  constructor() { }

  ngOnInit() {
  }

  onSelect(user: string): void {
    this.selectedUser = user;
  }

  userClicked(message: string): void {
    console.log('Parent clicked');
    alert(message);
  }
}
