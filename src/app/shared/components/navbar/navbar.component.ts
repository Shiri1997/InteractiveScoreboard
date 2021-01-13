import { Component, OnInit } from '@angular/core';
import { faFutbol, faDumbbell, faSignInAlt, faHome, faThLarge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faFutbol = faFutbol;
  faDumbbell = faDumbbell;
  faSignInAlt = faSignInAlt;
  faThLarge = faThLarge;
  faHome = faHome;
  constructor() { }

  ngOnInit(): void {
  }


}
