import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TopClientsComponent} from "./components/top-clients/top-clients.component";
import {AdventureComponent} from "./components/adventure/adventure.component";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {AboutComponent} from "./pages/about/about.component";
import {ClientsComponent} from "./pages/clients/clients.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {TermsConditionsComponent} from "./pages/terms-conditions/terms-conditions.component";
import {LastBlogComponent} from "./components/last-blog/last-blog.component";
import {DesignComponent} from "./pages/services/design/design.component";
import {BrandingComponent} from "./pages/services/branding/branding.component";
import {DigitalMarketingComponent} from "./pages/services/digital-marketing/digital-marketing.component";
import {SupportComponent} from "./pages/services/support/support.component";
import {TechnologyComponent} from "./pages/services/technology/technology.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {SidebarBlogComponent} from "./pages/blog/sidebar-blog/sidebar-blog.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    TopClientsComponent,
    AdventureComponent,
    HomepageComponent,
    AboutComponent,
    ClientsComponent,
    ProjectsComponent,
    TermsConditionsComponent,
    LastBlogComponent,
    DesignComponent,
    BrandingComponent,
    DigitalMarketingComponent,
    SupportComponent,
    TechnologyComponent,
    BlogComponent,
    SidebarBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
