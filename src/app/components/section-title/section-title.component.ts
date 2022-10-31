import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {

  constructor() { }

  @Input() h2!: string;
  @Input() h3!: string;


  ngOnInit(): void {
  }

}
