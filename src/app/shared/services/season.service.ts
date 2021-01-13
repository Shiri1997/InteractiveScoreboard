import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private firestore: AngularFirestore) { }
  private readonly url = `Sezon 20\\21`;
  private readonly url2 = `Sezon 19\\20`;

  getSeasons21 () {
    return this.firestore.collection(this.url).snapshotChanges();
  }
  getSeasons20 () {
    return this.firestore.collection(this.url2).snapshotChanges();
  }
}
