import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
firstName: string = "";
lastName: string = "";
email: string = "";
Age: string = "";

constructor(private userService: UserService) { }

registerUser() {
  const newUser: User = {
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    Age: this.Age
};
this.userService.addUser(newUser);
this.firstName = "";
this.lastName = "";
this.email = "";
this.Age = "";
}
}