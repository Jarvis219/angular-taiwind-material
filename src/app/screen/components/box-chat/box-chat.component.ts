import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-box-chat',
  templateUrl: './box-chat.component.html',
  styleUrls: ['./box-chat.component.scss'],
})
export class BoxChatComponent implements OnInit {
  @Input() public displayBoxChat: boolean = false;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  public closeChat() {
    this.newItemEvent.emit(false);
  }
}
