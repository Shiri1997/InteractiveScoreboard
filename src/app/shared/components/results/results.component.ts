import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { SeasonService } from '../../services/season.service';
import {Location} from '@angular/common';

interface DataItem {
  id: string;
  miejsce: number;
  mecze: number;
  wygrane: number;
  remisy: number;
  porazki: number;
  punkty: number;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {
  listOfColumn = [
    {
      title: 'Miejsce',
      compare: (a: DataItem, b: DataItem) => a.miejsce - b.miejsce,
      priority: 6
    },
    {
      title: 'Nazwa klubu',
      compare: null,
      priority: false
    },
    {
      title: 'Rozegrane mecze',
      compare: (a: DataItem, b: DataItem) => a.mecze - b.mecze,
      priority: 5
    },
    {
      title: 'Wygrane',
      compare: (a: DataItem, b: DataItem) => a.wygrane - b.wygrane,
      priority: 4
    },
    {
      title: 'Remisy',
      compare: (a: DataItem, b: DataItem) => a.remisy - b.remisy,
      priority: 3
    },
    {
      title: 'Porażki',
      compare: (a: DataItem, b: DataItem) => a.porazki - b.porazki,
      priority: 2
    },
    {
      title: 'Punkty',
      compare: (a: DataItem, b: DataItem) => a.punkty - b.punkty,
      priority: 1
    }
  ];
  listOfData: DataItem[] = [];

  constructor(private seasons: SeasonService) { }
  getSeasons21 = () => this.seasons.getSeasons21().subscribe(res => {
    res.forEach( i => {
      this.listOfData.push({
        // @ts-ignore
        miejsce: i.payload.doc.data().Miejsce,
        id: i.payload.doc.id,
        // @ts-ignore
        mecze: i.payload.doc.data().Mecze,
        // @ts-ignore
        wygrane: i.payload.doc.data().Wygrane,
        // @ts-ignore
        remisy: i.payload.doc.data().Remisy,
        // @ts-ignore
        porazki: i.payload.doc.data().Porazki,
        // @ts-ignore
        punkty: i.payload.doc.data().Punkty
      });
    });
    this.listOfColumn[2].priority = 7;
  })
  ngOnInit(): void {
    this.getSeasons21();
  }
}
