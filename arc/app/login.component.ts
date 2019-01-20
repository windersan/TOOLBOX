import { Component, OnInit,  HostBinding } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth.service'; 
import { User } from './models/user.model'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
   animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User;
  

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }
 
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  newUser(): void {
    this._router.navigate(['newuser']);
    return;
  }

  onSubmit(): void {

    console.log(this.loginForm.value);

    this._authService.authenticate(this.loginForm.value).subscribe(x => 
      {
        this.user = x;
        if(x.authorization == 2)this._router.navigate(['list']);
        if(x.authorization == 1)this._router.navigate(['applicant',this.user.id]);///['applicant/<returnObjectid>']
      }, 
      (error: any) => console.log(error), ()=> console.log('o.0')
    );
    
   
  }

  swipeit(): void {
   // this.swipeit = "wtf!";
   console.log("SWIPE");
 
  }

}
