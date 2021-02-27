import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-weather-draw',
  templateUrl: './weather-draw.component.html',
  styleUrls: ['./weather-draw.component.css']
})
export class WeatherDrawComponent implements OnInit {
  weathers: any = [];
  city: string;
  messages: any[] = [];
  subscription: Subscription;

  constructor(private api: HttpClient, public messageService: MessageService) {

    this.subscription = this.messageService.getMessage().pipe(debounceTime(500),distinctUntilChanged(),).subscribe(message => {
        if (message) {
          this.messages.push(message);
          this.city = this.messages.toString();
          this.api.get('http://api.openweathermap.org/data/2.5/forecast?q='+this.city+'YOUR KEY FROM OPENWEATHERMAP')
          .subscribe(
            x => { this.weathers = x; }
          )
        } else {
          // clear messages when empty message received
          this.messages = [];
        }
      });

  }
  ngOnInit() {
  
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}