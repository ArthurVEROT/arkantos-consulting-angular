import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MonexpertiseComponent } from './pages/monexpertise/monexpertise.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Arkantos Consulting - Home' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'Arkantos Consulting - À propos' },
  },
  {
    path: 'mon-expertise',
    component: MonexpertiseComponent,
    data: { title: 'Arkantos Consulting - Mon expersite' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Arkantos Consulting - Contact' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
