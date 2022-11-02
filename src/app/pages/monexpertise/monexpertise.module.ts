import { NgModule } from '@angular/core';
import { MonexpertiseComponent } from './monexpertise.component';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'src/app/components/button/button.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SectionTitleModule } from 'src/app/components/section-title/section-title.module';

@NgModule({
  declarations: [MonexpertiseComponent],
  imports: [ButtonModule, NavbarModule, SectionTitleModule, RouterModule],
  providers: [],
})
export class MonexpertiseModule {}
