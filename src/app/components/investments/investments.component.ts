import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Investment } from '../../models/investment';
import { InvestmentService } from '../../services/investment.service';
import { PerformanceType } from '../../models/performance-type.enum';
import { Performance } from '../../models/performance';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit  {

  displayedColumns = [ 'name','3month','1year','3year','5year','10year','sinceinception'];
  dataSource: MatTableDataSource<Investment>;

  constructor( private investmentService: InvestmentService ) {

   }

  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);

    this.investmentService.investments.subscribe(
      data => {
        this.dataSource.data = data;
        console.log( data );
      }
    );
  }

  getPerformance( inv: Investment, type: PerformanceType ): number {
    let perf: Performance = inv.performance.find( x => x.type == type );
    return perf ? perf.value : null;
  }

  getFee( inv: Investment, feeName: string ) : number {
      let fee = inv.fees.find( x => x.type === feeName );
      return fee ? fee.amount : null;
  }
}
