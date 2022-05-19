import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import dataSetColumnsLarge from './dataset-columns-large';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-aggrid',
  templateUrl: './aggrid.component.html',
  styleUrls: ['./aggrid.component.sass'],
})
export class AggridComponent {
  columnDefs: ColDef[] = dataSetColumnsLarge;

  rowData$: Observable<any[]>;

  serverAWS = 'http://18.193.129.166/';

  constructor(private http: HttpClient) {
    this.rowData$ = http
      .get<{ dataset: any[] }>(this.serverAWS)
      .pipe(map((data) => data.dataset));
  }
}
