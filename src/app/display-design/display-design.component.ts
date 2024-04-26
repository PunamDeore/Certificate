import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-design',
  templateUrl: './display-design.component.html',
  styleUrls: ['./display-design.component.css']
})
export class DisplayDesignComponent implements OnInit {
  certificateHTML: string = '';
  certificateCSS: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Load certificate HTML and CSS files
    this.loadCertificateFiles('assets/punam/preview.html', 'assets/punam/style.css');
  }

  loadCertificateFiles(htmlPath: string, cssPath: string): void {
    // Load HTML file
    this.http.get(htmlPath, { responseType: 'text' }).subscribe((data: string) => {
      this.certificateHTML = data;
    });

    // Load CSS file
    this.http.get(cssPath, { responseType: 'text' }).subscribe((data: string) => {
      this.certificateCSS = data;
    });
  }
}
