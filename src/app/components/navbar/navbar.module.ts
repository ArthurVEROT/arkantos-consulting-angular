import { NgModule } from '@angular/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent],
  imports: [RouterModule],
  exports: [NavbarComponent],
  providers: [],
})
export class NavbarModule {}
