import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];

  constructor(private getUsers: UsersService) { }

  ngOnInit() {
    this.getUsers.getUsers().subscribe(
      res => {
        this.users = res;
        console.log(res);
      }
    )
  }

}
