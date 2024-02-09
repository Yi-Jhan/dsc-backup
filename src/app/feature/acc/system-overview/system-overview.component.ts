import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, onDestroyed } from '../../../shared';
import { TableComponent } from '../../../shared/component';
import { IColumnDef, IDialogConfig, ITable } from '../../../core/model';
import _ from 'lodash';
import { DialogService } from '../../../shared/service';
import { DialogButtonType, DialogSize, DialogStatus } from '../../../core/enum';
import { Router } from '@angular/router';

interface testResp {
  id: number,
  name: string,
  email: string,
  group: string,
  note: string
}

@Component({
  selector: 'app-system-overview',
  standalone: true,
  imports: [CommonModule, SharedModule, TableComponent],
  templateUrl: './system-overview.component.html',
  styleUrls: ['./system-overview.component.scss']
})
export class SystemOverviewComponent implements OnInit {

  dialogService = inject(DialogService);
  router = inject(Router);

  destory$ = onDestroyed();

  coldefs: IColumnDef<testResp>[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'group', headerName: 'Group' },
    { field: 'email', headerName: 'E-mail' },
    { field: 'note', headerName: 'Note' }
  ];

  tableInfo: ITable<testResp> = {
    id: '',
    columnDefs: this.coldefs,
    data: [],
    withSelection: true
  };

  constructor() { }

  ngOnInit(): void {
    // const dialogInfo: IDialogConfig = {
    //   title: "i18n_Message",
    //   size: DialogSize.large,
    //   matConfig: { id: 'timeoutDialog', autoFocus: false },
    //   buttons: [
    //     { id: 'btn1', desc: 'btn1', type: DialogButtonType.General, status: DialogStatus.Danger },
    //     { id: 'btn2', desc: 'btn2', type: DialogButtonType.General, status: DialogStatus.Info },
    //     { id: 'btn3', desc: 'btn3', type: DialogButtonType.General, status: DialogStatus.Primary },
    //     { id: 'btn4', desc: 'btn4', type: DialogButtonType.General, status: DialogStatus.Secondary },
    //     { id: 'btn5', desc: 'btn5', type: DialogButtonType.General, status: DialogStatus.Success },
    //     { id: 'btn6', desc: 'btn6', type: DialogButtonType.General, status: DialogStatus.Warning },
    //     { id: 'btn6', desc: 'btn6', type: DialogButtonType.Cancel, status: DialogStatus.Danger }
    //   ]
    // };
    // this.dialogService.open('test', dialogInfo);
  }

  test() {
    this.tableInfo.data = [
      { id: 45227645, name: 'Joe', group: 'group1', email: 'joe777@test.com', note: 'Joe666' },
      { id: 41315785, name: 'Leon', group: 'group2', email: 'Leon77894@test.com', note: '777' },
      { id: 76612755, name: 'Mark', group: 'group3', email: 'Mark6@test.com', note: 'Mark no.1' },
      { id: 12648789, name: 'Terry', group: 'group1', email: 'Terry77979@test.com', note: '77979 Yeee' },
    ];

    this.tableInfo = _.clone(this.tableInfo);
  }

  test2() {
    this.tableInfo.data = [];

    this.tableInfo = _.clone(this.tableInfo);
  }

  test3() {
    // this.router.navigateByUrl('/Demo');
    this.router.navigate(['/Demo']);
  }
}
