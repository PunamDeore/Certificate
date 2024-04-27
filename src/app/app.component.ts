import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CertificateComponent } from './certificate/certificate.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[CertificateComponent, CommonModule, FormsModule],
  standalone: true,
  providers: [HttpClientModule]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

}

