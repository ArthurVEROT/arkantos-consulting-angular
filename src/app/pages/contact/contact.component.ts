import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  @ViewChild('prospectForm') form!: NgForm;

  onSubmit() {
    console.log(this.form.form.value);
  }
}
