import { Component, OnInit } from '@angular/core';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  buttonOverlayOrigin: CdkOverlayOrigin;
  
  constructor() {  }

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
