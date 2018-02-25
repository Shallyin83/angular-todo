import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeModel } from './home.model';
import { Globals } from '../../shared/helpers/app.const';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    model: any;
    errorMsg: string;
    constructor(public router: Router) {
        this.model = new HomeModel('','');
    }

    ngOnInit() {
    }

    onLoggedin() {
        if(this.model.email === Globals.user && this.model.password === Globals.password) {
            sessionStorage.setItem('isLoggedin', 'true');
            this.errorMsg = '';
            this.router.navigate(['/todos']);            
        } else {
            this.errorMsg = 'Invalid login details';            
        }

        
    }

}
