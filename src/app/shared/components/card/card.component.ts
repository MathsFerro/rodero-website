import { Component, Inject, Input, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public image: string;
  @Input() public title: string;
  @Input() public descriptions: string[] = [];
  @Input() public titleColor: string;
  @Input() public backgroundColor: string;


  constructor() {

  }

  ngOnInit(): void {
  }
}
// https://michalsnik.github.io/aos/