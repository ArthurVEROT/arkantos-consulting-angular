import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NavbarModule } from './components/navbar/navbar.module';
import { ButtonModule } from './components/button/button.module';
import { SectionTitleModule } from './components/section-title/section-title.module';
import { MonexpertiseModule } from './pages/monexpertise/monexpertise.module';
import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { ContactModule } from './pages/contact/contact.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    ButtonModule,
    SectionTitleModule,
    MonexpertiseModule,
    HomeModule,
    AboutModule,
    ContactModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
