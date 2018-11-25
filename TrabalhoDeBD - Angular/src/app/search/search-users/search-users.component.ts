import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  constructor(public usersService: UsersService) { }

  ngOnInit() {

  }

  onSubmitUsers(searchUsers) {
    console.log(searchUsers);
  }

  onSubmitLibraries(searchLibraries) {
    console.log(searchLibraries);
  }

  onSubmitUserTag(searchUserTag) {
    console.log(searchUserTag);
  }
}
