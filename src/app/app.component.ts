import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Investment } from './models/investment';
import { InvestmentService } from './services/investment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  _investments: Observable<Investment[]>;
  investments: Investment[];
  title = 'app';

  constructor(
    private investmentService: InvestmentService
  ){
  }

  ngOnInit(): void {
    this._investments = this.investmentService.investments;
    this.investmentService.getInvestments();
    this._investments.subscribe( 
      data => this.investments = data, 
      error => console.log( error ));
  }
}
