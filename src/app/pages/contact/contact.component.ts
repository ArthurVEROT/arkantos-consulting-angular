import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private http: HttpClient) {}

  @ViewChild('prospectForm') form!: NgForm;

  onSubmit() {
    const myProspect: Object = this.form.form.value;
    console.log('myProspect', myProspect);
    this.http
      .post('https://arkantos-consulting.cyclic.app/prospect', myProspect)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
