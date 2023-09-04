import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  async login() {
    if (this.email && this.password) {

      this.router.navigate(['/home']); 

    } else {

      const alert = await this.alertController.create({
        header: 'Faltan campos',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK'],
      });
      await alert.present();
    }    
  }   
  navigateToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }


  register() {
    this.router.navigate(['/register']);
  }
}




