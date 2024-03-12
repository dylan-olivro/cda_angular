import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HelloComponent} from "./hello/hello.component";
import {UserService} from "./user.service";
import {UserComponent} from "./user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  users: string[];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  addUser(): void {
    const newUser = prompt("Entrer un nom");
    if (newUser) {
      this.userService.addUser(newUser);
      this.users = this.userService.getUsers();
    }
  }
}
