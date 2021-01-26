import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../../services/season.service';
// @ts-ignore
import { DataItem } from '../../interfaces/ekstraklasaInterface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {
  result;
  listOfColumn = [
    {
      title: 'Miejsce',
      compare: null,
      priority: false
    },
    {
      title: 'Nazwa klubu',
      compare: (a: DataItem, b: DataItem) => a.chinese - b.chinese,
      priority: 3
    },
    {
      title: 'Rozegrane mecze',
      compare: (a: DataItem, b: DataItem) => a.math - b.math,
      priority: 2
    },
    {
      title: 'Wygrane',
      compare: (a: DataItem, b: DataItem) => a.english - b.english,
      priority: 1
    },
    {
      title: 'Remisy',
      compare: (a: DataItem, b: DataItem) => a.math - b.math,
      priority: 2
    },
    {
      title: 'Porażki',
      compare: (a: DataItem, b: DataItem) => a.math - b.math,
      priority: 2
    },
    {
      title: 'Punkty',
      compare: (a: DataItem, b: DataItem) => a.math - b.math,
      priority: 2
    }
  ];
  listOfData: DataItem[] = [
    {
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70
    },
    {
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89
    },
    {
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70
    },
    {
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89
    }
  ];
  constructor(private seasons: SeasonService) { }
  getSeasons21 = () => this.seasons.getSeasons21().subscribe(res => {(this.result = res); console.log(res)});
  ngOnInit(): void {
    this.getSeasons21();
  }
}
