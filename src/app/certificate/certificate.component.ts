
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certificate',
  styleUrls: ['./certificate.component.scss'],
  templateUrl: './certificate.component.html',
  standalone:true,
  imports: [CommonModule, HttpClientModule, FormsModule]
})
export class CertificateComponent implements OnInit{
    designFolders: string[] = ['akanksha','dipak','jaiminkumar','kalpesh','punam', 'ketan', 'mayur', 'sagar','saurabh','shivani']; // Update with your actual design folder names
    selectedDesignFolder: string = '';
  renderer: any;
  
    constructor(private http: HttpClient) {}
  
    ngOnInit() {
      // Initialize with the first design folder
      if (this.designFolders.length > 0) {
        this.selectedDesignFolder = this.designFolders[0];
        this.loadHTMLTemplate(this.selectedDesignFolder);
        this.loadCSS(this.selectedDesignFolder);
      }
    }
  
    onDesignFolderChange(event: Event) {
      const selectedValue = (event.target as HTMLSelectElement).value;
      this.selectedDesignFolder = selectedValue;
      this.loadHTMLTemplate(selectedValue);
      this.loadCSS(selectedValue);
    }
  
    loadHTMLTemplate(selectedFolder: string) {
      this.http.get(`assets/${selectedFolder}/index.html`, { responseType: 'text' }).subscribe((data) => {
        // Update certificateTemplate with the loaded HTML
        this.certificateTemplate = data;
      });
    }
  
    /*loadCSS(selectedFolder: string) {
      const head = document.getElementsByTagName('head')[0];
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = `assets/${selectedFolder}/css/style.css`;
      head.appendChild(link);
     //this.renderer.appendChild(document.head, link);
      
    }
  */

    loadCSS(selectedFolder: string) {
      // Remove previously loaded CSS if any
      const existingLink = document.querySelector('link[rel="stylesheet"]');
      if (existingLink && existingLink.parentNode) {
          existingLink.parentNode.removeChild(existingLink);
      }
  
      // Load the CSS of the selected design
      const head = document.getElementsByTagName('head')[0];
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = `assets/${selectedFolder}/css/style.css`;
      head.appendChild(link);
  }
  
    certificateTemplate: string = '';
  
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
      certificateNumber:'srno',
      companyLogo: 'logo',
      certificateLogo:'logo1',
      recipientName: 'candidateName',
      courseName: 'course',
      completionDate: 'date',
      presidentSignature:'signature',
      directorSignature: 'signature1',
      orgName: 'org-name',
      orgAddress: 'org-address',
    }
  }
  