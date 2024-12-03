import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = [];

  constructor(private userService: UserService){
    this.users = this.userService.getUsers();
  }
}