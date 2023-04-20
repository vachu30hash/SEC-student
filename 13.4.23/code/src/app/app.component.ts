import { Component } from '@angular/core';
import { data } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code';
  t1:string=data.title1;
  d1:string=data.description;
  t2:string=data.title2;
  t3:string[]=data.title3;

}
