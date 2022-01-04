import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }, { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) }, { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
