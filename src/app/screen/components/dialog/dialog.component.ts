import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() public displayDialog: boolean = false;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  public closeDialog() {
    this.newItemEvent.emit(false);
  }
}
