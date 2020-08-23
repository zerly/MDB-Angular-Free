import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { ClassementService } from './../shared/classement.service';
import { getLocaleDateTimeFormat, DatePipe } from '@angular/common';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.scss']
})
export class ClassementComponent implements OnInit {

  constructor(public service : ClassementService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
