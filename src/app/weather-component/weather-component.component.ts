import { Component, OnInit, Input, enableProdMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../weather';
import { MessageService } from '../message.service';
//import { createCipher } from 'crypto';

@Component({
  selector: 'WeatherComponent',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css']
})
export class WeatherComponentComponent implements OnInit {

  @Input() MyWeather: Weather;
  todayDate = new Date().toISOString().substring(0, 10);
  
  constructor(public messageService: MessageService) {

  }

  ngOnInit() {
  
  }



}