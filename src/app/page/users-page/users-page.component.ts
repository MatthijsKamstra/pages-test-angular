import { Component, OnInit } from '@angular/core';

// Model
import { UserModel } from '../../models/user.model';

// Service
import { UsersService } from '../../service/users.service';


@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users!: UserModel[];

  constructor(private usersService: UsersService) { }

  getUsers(): void {
    this.usersService.getUsers().subscribe(users => this.users = users);
  }

  ngOnInit() {
    this.getUsers()
  }

}
