import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'message-component',
  templateUrl: './message-component.component.html',
  styleUrls: ['./message-component.component.css']
})
export class MessageComponentComponent {
  city: string;
  constructor(private messageService: MessageService) {
    this.city='';
  }

  sendMessage(): void {
    this.messageService.sendMessage(this.city.trim());
  }

  clearMessages(): void {
    this.messageService.clearMessages();
  }


}
