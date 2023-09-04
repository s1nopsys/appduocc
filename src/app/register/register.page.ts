import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
}) 
export class  RegisterPage {
  name: string = '';
  email: string = '';
  password: string = '';


  constructor(private router: Router, private alertController: AlertController) {}

  async register() {
    if (this.name && this.email && this.password) {   
      const alert= await this.alertController.create({
        header: 'Cuenta registrada exitósamente',
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