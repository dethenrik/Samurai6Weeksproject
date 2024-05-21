import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GenericService } from '../../services/generic.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = 'celynflacker@gmail.com';
  password: string = 'Passw0rd?';
  errorMessage: string = '';

  constructor(private router: Router, private GenerirService: GenericService<LoginComponent>) { }

  login() {
    if (this.email === 'celynflacker@gmail.com' && this.password === 'Passw0rd?') {
      this.router.navigate(['/admin']);

    } else {
      if (this.email !== 'celynflacker@gmail.com') {
        this.errorMessage = 'Your email is wrong';
      } else {
        this.errorMessage = 'Your password is wrong';
      }
    }
  }
}
