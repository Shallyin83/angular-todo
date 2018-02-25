import {Component} from '@angular/core';

@Component({
  selector: 'app-todos',
  template: `<div class="col-sm-10">
  <div *ngIf="isLogged()" class="text-right">
          <a [routerLink]="['/home']" (click)="onLoggedout()"><i class="fa fa-fw fa-power-off"></i> Log Out </a> 
  </div>
</div>
<router-outlet></router-outlet>`
})
export class TodosComponent {
    isLogged () {
        if (sessionStorage.getItem('isLoggedin')) {
            return true;
        }
        return false;
    }

    onLoggedout() {
        sessionStorage.removeItem('isLoggedin');
    }
}
