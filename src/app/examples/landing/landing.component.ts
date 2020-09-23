import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  var rellaxHeader = new Rellax ('.rellax-header');

  var body = document.getElementsByTagName('body')[0];
  body.classList.add('landing-page');
  var navbar = document.getElementsByTagName('nav')[0];
  navbar.classlist.add('navbar-transparent');
  }

  ngOnDestroy(){
  var body = document.getElementsByTagName('body');
  body.classList.remove('landing-page');
  var navbar = document.getElementsByTagName('nav')[0];
  navbar.classList.remove('navbar-transparent');
  }

}
