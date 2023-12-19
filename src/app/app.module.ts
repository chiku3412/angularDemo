import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { WorkProcessComponent } from './work-process/work-process.component';
import { TechnologyComponent } from './technology/technology.component';
import { ContactDataModelComponent } from './model/contact-data-model/contact-data-model.component';

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
    ContactDataModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
