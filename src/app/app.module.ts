import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VideosComponent } from './videos/videos.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CounterComponent } from './counter/counter.component';
import { TeamComponent } from './team/team.component';
import { PartnerComponent } from './partner/partner.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { MobilenavComponent } from './mobilenav/mobilenav.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BacktotopComponent } from './backtotop/backtotop.component';
import { FeaturesComponent } from './features/features.component';
import { AppRoutingModule } from './/app-routing.module';
import { ConfigService } from './config.service';

@NgModule({
  declarations: [
    AppComponent,
    WhatwedoComponent,
    GalleryComponent,
    VideosComponent,
    QuotesComponent,
    CounterComponent,
    TeamComponent,
    PartnerComponent,
    BlogComponent,
    HeaderComponent,
    LogoComponent,
    MainnavComponent,
    MobilenavComponent,
    ContactComponent,
    FooterComponent,
    BacktotopComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
