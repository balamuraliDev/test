import {Component,OnInit,ElementRef} from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, CanActivate,ActivatedRoute } from '@angular/router';
import {ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import * as $ from 'jquery';


@Component({
  selector: 'searchResults',
  templateUrl: './searchResults.component.html',
  styleUrls: ['./searchResults.component.css'],

})
export class SearchResultsComponent {
  constructor(public myElement: ElementRef,private router: Router,private formBuilder: FormBuilder){
  }
}
