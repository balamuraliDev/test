import {Component,OnInit,ElementRef} from '@angular/core';
import {ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router, CanActivate,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit  {
  
  constructor(public myElement: ElementRef,private formBuilder: FormBuilder,private router: Router){
    
  }

    ngOnInit() {
    }

}