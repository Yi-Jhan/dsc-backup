import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { LicenseComponent } from '../license/license.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { SharedModule, onDestroyed } from '../../../shared';
import { ChipsInputComponent, TableComponent } from '../../../shared/component';
import { IColumnDef, IDialogConfig, ITable } from '../../../core/model';
import { DialogService } from '../../../shared/service';
import { DialogButtonType, DialogSize, DialogStatus } from '../../../core/enum';
import Chart from 'chart.js/auto';
import _ from 'lodash';

interface respData {
  id: number,
  name: string,
  email: string,
  group: string,
  note: string
}

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    TableComponent,
    ChipsInputComponent
  ],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, AfterViewInit {

  destory$ = onDestroyed();

  @ViewChild('testTemp') testTemp!: TemplateRef<any>;

  demoList = [
    { view: 'Table', value: 'Table' },
    { view: 'Dialog', value: 'Dialog' },
    { view: 'Event', value: 'Event' },
    { view: 'i18n', value: 'i18n' },
    { view: 'Icon', value: 'Icon' },
    { view: 'Chart', value: 'Chart' },
    { view: 'Chips Input', value: 'Chips Input' }
  ];

  optionSelected = this.demoList[0].value;

  coldefs: IColumnDef<respData>[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'group', headerName: 'Group' },
    { field: 'email', headerName: 'E-mail' },
    { field: 'note', headerName: 'Note' }
  ];

  tableInfo: ITable<respData> = {
    id: '',
    columnDefs: this.coldefs,
    data: [],
    withSelection: true
  };

  chart: any = [];

  constructor(

    private dialogService: DialogService,
    public dialog: MatDialog

  ) {}

  ngOnInit(): void {
    // this.initChart();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

  setTableData(): void {

    this.tableInfo.data = [
      { id: 45227645, name: 'Joe', group: 'group1', email: 'joe777@test.com', note: 'Joe666' },
      { id: 41315785, name: 'Leon', group: 'group2', email: 'Leon77894@test.com', note: '777' },
      { id: 76612755, name: 'Mark', group: 'group3', email: 'Mark6@test.com', note: 'Mark no.1' },
      { id: 12648789, name: 'Terry', group: 'group1', email: 'Terry77979@test.com', note: '77979 Yeee' },
    ];

    this.tableInfo = _.clone(this.tableInfo);

  }

  clearTableData() {

    this.tableInfo.data = [];
    this.tableInfo = _.clone(this.tableInfo);

  }

  openComponentDialog() {

    const dialogInfo: IDialogConfig = {
      title: 'Dialog with Component',
      subtitle: 'subtitle test',
      matConfig: { id: 'DialogTest', data: 'test2' },
      buttons: [
        { id: 'test', desc: 'test', type: DialogButtonType.General, status: DialogStatus.Danger },
        { id: 'close', desc: 'close', type: DialogButtonType.Close}
      ],
      size: DialogSize.normal
    };

    const dialogRef = this.dialogService.open(LicenseComponent, dialogInfo);

  }

  openTemplateDialog() {

    const dialogInfo: IDialogConfig = {
      title: 'Dialog with Template',
      subtitle: '',
      matConfig: { id: 'DialogTest', data: 'Test Template' },
      buttons: [{ id: 'close', desc: 'close', type: DialogButtonType.Close }],
      size: DialogSize.normal
    };

    const dialogRef = this.dialogService.open(this.testTemp, dialogInfo);

  }

  openStringDialog() {

    const config = {
      title: '',
      size: DialogSize.small,
      buttons: [{ id: 'close', desc: 'close', type: DialogButtonType.Close}],
    };

    const dialogRef = this.dialogService.open('test', config);

  }

  initChart() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    });
  }

  changeSelect() {
    if (this.optionSelected === 'Chart') {
      setTimeout(() => {
        this.initChart();
      }, 500);

    }
  }
}
