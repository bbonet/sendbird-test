import { Component, OnInit } from '@angular/core';
import { SendBird } from 'sendbird';
import { sendbirdConfig } from '../../environments/sendbird.config';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {

  sendBird: any;

  constructor() { }

  ngOnInit() {
    this.sendBird = new SendBird(sendbirdConfig);
    console.log('MessageComponent.onInit sendbird', this.sendBird);
  }

}
