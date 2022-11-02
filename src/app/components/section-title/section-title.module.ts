import { NgModule } from '@angular/core';
import { SectionTitleComponent } from 'src/app/components/section-title/section-title.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SectionTitleComponent],
  imports: [RouterModule],
  exports: [SectionTitleComponent],
  providers: [],
})
export class SectionTitleModule {}
