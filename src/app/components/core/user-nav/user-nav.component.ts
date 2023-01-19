import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent implements OnInit {

  username!: string

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username')!
  }
  
}
