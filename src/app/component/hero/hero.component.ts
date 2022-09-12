import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() img = "https://picsum.photos/seed/hero/1024/900/";
  @Input() title: string = "Default Hero";
  @Input() body: string = "Default body";
  @Input() cta_text: string = "Default Click";
  @Input() cta_url: string = "/oeps";

  constructor() { }

  ngOnInit(): void {
  }

}
