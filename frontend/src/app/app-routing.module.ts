import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';


const routes: Routes = [
 
  // candidate views
 
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
