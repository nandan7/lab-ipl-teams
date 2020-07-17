import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor() {}
  iplteam = [
    {
      name: 'Chennai Super Kings',
      website: 'https://www.chennaisuperkings.com',
      phnumber: '1111111111',
      image: '../assets/csk.png ',
    },
    {
      name: 'Sunrisers Hyderabad',
      website: 'https://www.sunrisershyderabad.com',
      phnumber: '2222222222',
      image: '../assets/SRH.png ',
    },
    {
      name: 'Royal Challengers Banglore',
      website: 'https://www.royalchallengersbanglore.com',
      phnumber: '3333333333',
      image: '../assets/RCB.png ',
    },
    {
      name: 'Kolkata Knight Riders',
      website: 'https://www.kkr.com',
      phnumber: '44444444444',
      image: '../assets/KKR.png ',
    },
    {
      name: 'Mumbai Indians',
      website: 'https://www.mumbaiindians.com',
      phnumber: '55555555555',
      image: '../assets/MI.png ',
    },
    {
      name: 'Rajastan Royals',
      website: 'https://www.rajastanroyals.com',
      phnumber: '666666666666',
      image: '../assets/RR.png ',
    },
    {
      name: 'Delhi Capitals',
      website: 'https://www.delhicapitals.com',
      phnumber: '77777777777',
      image: '../assets/Delhi.png ',
    },
    {
      name: 'Kings XI Punjab',
      website: 'https://www.kxip.com',
      phnumber: '88888888888',
      image: '../assets/KXI.png ',
    },
  ];
  ngOnInit(): void {}
}
