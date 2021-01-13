import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../../services/season.service';

@Component({
  selector: 'app-results2',
  templateUrl: './results2.component.html',
  styleUrls: ['./results2.component.css']
})
export class Results2Component implements OnInit {
  result2;
  constructor(private seasons: SeasonService) { }
  getSeasons20 = () => this.seasons.getSeasons20().subscribe(res => {(this.result2 = res); console.log(res)});

  ngOnInit(): void {
    this.getSeasons20();
  }

}
