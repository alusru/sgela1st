import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


/*import { AppRoutingModule } from './/app-routing.module';*/
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { QuotesComponent } from './quotes/quotes.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HeaderComponent },
  { path: 'Services', component: WhatwedoComponent },
  { path: 'Features', component: FeaturesComponent },
  { path: 'Works', component: GalleryComponent },
  { path: 'Pricing', component: QuotesComponent },
  { path: 'Team', component: TeamComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'Contact', component: ContactComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
