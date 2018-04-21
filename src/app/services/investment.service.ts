import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Investment } from '../models/investment';

@Injectable()
export class InvestmentService {

  private _investments: BehaviorSubject<Investment[]>;
  private dataStore: {
    investments: Investment[]
  }

  constructor( private httpClient: HttpClient ) { 
    this.dataStore = { investments: [] };
    this._investments = new BehaviorSubject<Investment[]>([]);
  }

  get investments() : Observable<Investment[]> {
    if( this.dataStore.investments.length == 0 )
      this.getInvestments();
      
    return this._investments.asObservable();
  }

  investmentById( id: number ) {
    return this.dataStore.investments.find( x => x.id === id );
  }

  getInvestments() {
    const url = "/assets/investment-data.json";

    return this.httpClient.get<Investment[]>(url)
      .subscribe(data => {
        this.dataStore.investments = data;
        this._investments.next(Object.assign({}, this.dataStore).investments);
      }, error => {
        console.log("Failed to fetch investments");
      });
  }
}
