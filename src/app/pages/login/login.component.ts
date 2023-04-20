import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = '';
  pass = '';

  constructor(private userService: UserService, private router: Router) { }

  navigateToRegister() {
    this.router.navigate(['/updatePaciente']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  async login(){
    const params = {
      usuario: this.user,
      clave: this.pass
    };

    this.userService.login(params).subscribe(async (res: any)=>{
      if(res.message === undefined){
        alert('Bienvenido '+res[0].usuario);
        this.navigateToRegister();
      }else{
        alert(res.message);
      }
    });
  }

}

