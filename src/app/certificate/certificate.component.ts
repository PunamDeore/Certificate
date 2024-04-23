import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate',
  styleUrls: ['./certificate.component.scss'],
  templateUrl: './certificate.component.html',
  standalone:true
})
export class CertificateComponent {
  Data = {
    certificateNumber: "123456",
    companyLogo: "assets/img/org-logo.png",
    certificateLogo: "assets/img/certificate-logo.png",
    recipientName: "Punam Manik Deore",
    courseName: "Web Development",
    completionDate: "April 23, 2024",
    presidentSignature: "assets/img/president.png",
    directorSignature: "assets/img/director.png",
    orgName: "Maha Mission Education and Career Council",
    orgAddress: "Office No. 404, Vastu Viva, Beside Sanket Inn, Bhumkar Chowk, Wakad, Pune, Maharashtra - 411057",
  };
  config ={
    certificateNumber:'string',
    certificateLogo:'string',
  }
}
