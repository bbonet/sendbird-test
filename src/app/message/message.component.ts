import { Component, OnInit } from '@angular/core';
import { SendBird } from 'sendbird';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

declare var SendBird: any;

export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
