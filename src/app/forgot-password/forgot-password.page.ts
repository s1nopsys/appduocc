import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ForgotPasswordPage {
  email: string = '';


  constructor(private router: Router, private alertController: AlertController) {}

  async sendResetPasswordEmail() {

    if (this.email) {
      const alert= await this.alertController.create({
        header: 'Correo enviado satisfactoriamente',
        buttons: ['OK'],
      });   
      await alert.present();
      this.router.navigate(['/login']); 
    } else {
     
      const alert = await this.alertController.create({
        header: 'Faltan campos',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK'],
      });
      await alert.present();
    }    
  }
}
