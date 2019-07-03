import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  ourproject = {};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.ourproject = this.getProject();
  }

  getProject(){
    return this.config.getConfig().ourproject;
  }

}
