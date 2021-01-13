import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../../services/season.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  result;
  constructor(private seasons: SeasonService) { }
  getSeasons21 = () => this.seasons.getSeasons21().subscribe(res => {(this.result = res); console.log(res)});

  ngOnInit(): void {
    this.getSeasons21();
  }

}
