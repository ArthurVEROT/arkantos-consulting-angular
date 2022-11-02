import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SectionTitleModule } from 'src/app/components/section-title/section-title.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    ButtonModule,
    NavbarModule,
    SectionTitleModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class ContactModule {}
