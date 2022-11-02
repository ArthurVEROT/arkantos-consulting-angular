import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

import { ButtonModule } from 'src/app/components/button/button.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SectionTitleModule } from 'src/app/components/section-title/section-title.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [ButtonModule, NavbarModule, SectionTitleModule, RouterModule],
  providers: [],
})
export class AboutModule {}
