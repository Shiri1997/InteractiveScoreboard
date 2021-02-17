import { Component } from '@angular/core';
import { faChartBar, faWeight, faCapsules, faCalculator, faAngleDoubleRight, faSignInAlt, faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interactive Scoreboard';
  faChartBar = faChartBar;
  faWeight = faWeight;
  faCapsules = faCapsules;
  faCalculator = faCalculator;
  faAngleDoubleRight = faAngleDoubleRight;
  faSignInAlt = faSignInAlt;
  faBook = faBook;
}

