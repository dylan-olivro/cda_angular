import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: string[] = ['Alban', 'Dylan', 'Charles'];

  getUsers(): string[] {
    return this.users;
  }

  addUser(user: string): void {
    // @ts-ignore
    this.users.push(user)
  }

  removeUser(user: string): void {
    // @ts-ignore
    const index = this.users.indexOf(user);
    if (index !== -1) {
      // @ts-ignore
      this.users.splice(index, 1);
    }
  }

  constructor() {
  }
}
