import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private accesToken = localStorage.getItem('access_token');
  private expiresIn = localStorage.getItem('expires_in');
  private tokenType = localStorage.getItem('token_type');
  private userName = localStorage.getItem('userName');   

}
