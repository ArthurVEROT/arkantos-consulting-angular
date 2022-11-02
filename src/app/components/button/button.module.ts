import { NgModule } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ButtonComponent],
  imports: [RouterModule],
  exports: [ButtonComponent],
  providers: [],
})
export class ButtonModule {}
