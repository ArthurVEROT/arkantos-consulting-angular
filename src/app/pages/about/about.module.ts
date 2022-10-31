import { NgModule } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { SectionTitleComponent } from 'src/app/components/section-title/section-title.component';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [ButtonComponent, NavbarComponent, SectionTitleComponent],
  declarations: [AboutComponent],
  providers: [],
})
export class ProfileModule {}
