import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
	name:string= 'kn';
	email:string='kn@gmail.com';
	mobile:number='1234567890';
	car:any=environment.car;
		

	 
	constructor() {
	console.log(environment.car)
	}

	ngOnInit() {
	}

}
