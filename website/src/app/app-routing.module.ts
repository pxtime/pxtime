import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {TermsConditionsComponent} from "./pages/terms-conditions/terms-conditions.component";
import {ClientsComponent} from "./pages/clients/clients.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {AboutComponent} from "./pages/about/about.component";
import {GdprComponent} from "./pages/gdpr/gdpr.component";
import {DigitalMarketingComponent} from "./pages/services/digital-marketing/digital-marketing.component";
import {BrandingComponent} from "./pages/services/branding/branding.component";
import {DesignComponent} from "./pages/services/design/design.component";
import {TechnologyComponent} from "./pages/services/technology/technology.component";
import {SupportComponent} from "./pages/services/support/support.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {SingleBlogComponent} from "./pages/blog/single-blog/single-blog.component";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomepageComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blog', component: BlogComponent },
      { path:  'blog/:id' , component: SingleBlogComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'terms-conditions', component: TermsConditionsComponent },
      { path: 'gdpr', component: GdprComponent },
      { path: 'services/design', component: DesignComponent },
      { path: 'services/branding', component: BrandingComponent },
      { path: 'services/digital-marketing', component: DigitalMarketingComponent },
      { path: 'services/technology', component: TechnologyComponent },
      { path: 'services/support', component: SupportComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
