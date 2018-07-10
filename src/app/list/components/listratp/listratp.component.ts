import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs';
import { Commerce } from '../../../shared/models/commerce.model';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-listratp',
  templateUrl: './listratp.component.html',
  styleUrls: ['./listratp.component.css']
})

export class ListratpComponent implements OnInit {

  private _dataSource: any;
  displayedColumns = ['tco_libelle', 'code_postal', 'ville'];
  public get dataSource(): any {
    return this._dataSource;
  }
  public set dataSource(value: any) {
    this._dataSource = value;
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getApi().subscribe((data) => {
      console.log(data.records);
      this.generateTable(data.records);
    });

  }

  generateTable(data) {
    this.dataSource = new MatTableDataSource(data);
  }
}


