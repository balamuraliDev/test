import { Component,OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

constructor(public router : Router) 
{      
   
}
 ngOnInit() {

}
}