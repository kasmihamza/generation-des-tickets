import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { CandidateComponent } from './layouts/candidate/candidate.component';
import { RhprofileComponent } from './views/Rh/rhprofile/rhprofile.component';
import { ProfileComponent } from './views/candidate/profile/profile.component';
import { ApplicationsComponent } from './views/candidate/applications/applications.component';
import { OffersComponent } from './views/candidate/offers/offers.component';
import { HomeComponent } from './views/candidate/home/home.component';
import { SettingsComponent } from './views/candidate/settings/settings.component';
import { RhComponent } from './layouts/rh/rh.component';

const routes: Routes = [
  {
    path: "Rh",
    component: RhComponent,
    children: [
      { path: "settings", component: SettingsComponent },
      { path: "rhprofile", component: RhprofileComponent },
    ],
  },
  // candidate views
  {
    path: "candidate",
    component: CandidateComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "profile", component: ProfileComponent },
      { path: "offers", component: OffersComponent },
      { path: "applications", component: ApplicationsComponent },
      { path: "settings", component: SettingsComponent },

      { path: "", redirectTo: "home", pathMatch: "full" },
    ],
  },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
