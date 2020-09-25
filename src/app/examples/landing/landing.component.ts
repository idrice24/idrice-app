import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  const rellaxHeader = new Rellax ('.rellax-header');

  const body = document.getElementsByTagName('body')[0];
  body.classList.add('landing-page');
  const navbar = document.getElementsByTagName('nav')[0];
  navbar.classList.add('navbar-transparent');
  }



}
