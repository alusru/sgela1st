import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-whatwedo',
  templateUrl: './whatwedo.component.html',
  styleUrls: ['./whatwedo.component.css']
})
export class WhatwedoComponent implements OnInit {

  whatwedo = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.whatwedo = this.getwhatWeDo();
  }
  getwhatWeDo() {
    return this.config.getConfig().whatwedo;
  }

}
