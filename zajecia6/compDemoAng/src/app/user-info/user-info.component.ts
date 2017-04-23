import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() user: string;
  @Output() clickEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onClick() {
    console.log('Nested clicked');
    this.clickEmitter.emit('Click from nested component');
  }
}
