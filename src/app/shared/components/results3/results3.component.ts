import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../../services/season.service';

@Component({
  selector: 'app-results3',
  templateUrl: './results3.component.html',
  styleUrls: ['./results3.component.css']
})
export class Results3Component implements OnInit {
  result3;
  constructor(private seasons: SeasonService) { }
  getSeasons19 = () => this.seasons.getSeasons19().subscribe(res => {(this.result3 = res); console.log(res)});

  ngOnInit(): void {
    this.getSeasons19();
  }

}
