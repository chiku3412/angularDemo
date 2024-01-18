import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from   './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CareerComponent } from './career/career.component';
import { VacancyComponent } from './career/vacancy/vacancy.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeBannerComponent } from './main-page/home-banner/home-banner.component';
import { AboutComponent } from './main-page/about/about.component';
import { ServicesComponent } from './main-page/services/services.component';
import { PortfolioComponent } from './main-page/portfolio/portfolio.component';
import { ContactComponent } from './main-page/contact/contact.component';
import { WorkProcessComponent } from './main-page/work-process/work-process.component';
import { TechnologyComponent } from './main-page/technology/technology.component';
import { TopBannerComponent } from './career/top-banner/top-banner.component';
import { ContactDetailsComponent } from './career/contact-details/contact-details.component';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeBannerComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    WorkProcessComponent,
    TechnologyComponent,
    CareerComponent,
    VacancyComponent,
    MainPageComponent,
    TopBannerComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
