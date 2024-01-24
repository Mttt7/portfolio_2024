import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GalleriaModule } from 'primeng/galleria';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FooterCardComponent } from './components/footer-card/footer-card.component';
import { HeaderCardComponent } from './components/header-card/header-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { HomeComponent } from './components/home/home.component';
import { SeeOnGithubButtonComponent } from './buttons/see-on-github-button/see-on-github-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FooterCardComponent,
    HeaderCardComponent,
    ProjectCardComponent,
    ContactCardComponent,
    ProjectDetailsComponent,
    HomeComponent,
    SeeOnGithubButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleriaModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
