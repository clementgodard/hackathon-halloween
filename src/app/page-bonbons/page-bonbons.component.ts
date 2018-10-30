import { Component, OnInit } from '@angular/core';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';

@Component({
  selector: 'app-page-bonbons',
  templateUrl: './page-bonbons.component.html',
  styleUrls: ['./page-bonbons.component.css']
})
export class PageBonbonsComponent implements OnInit {

  buttonOverlayOrigin: CdkOverlayOrigin;

  constructor() { }

  signInOn() {
    document.getElementById("sign-in-overlay").style.display = "block";
  }

  registerOn() {
    document.getElementById("register-overlay").style.display = "block";
  }

  off() {
    document.getElementById("sign-in-overlay").style.display = "none";
    document.getElementById("register-overlay").style.display = "none";
  }

  ngOnInit() {
  }

}
