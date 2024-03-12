import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = {
    firstname: "Dylan",
    lastname: "Olivro",
    age: 23,
    email: "dylanolivro94@gmail.com"
  };
}
