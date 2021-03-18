import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListsComponent } from './components/lists/lists.component';
import { MemberDetailComponent } from './components/members/member-detail/member-detail.component';
import { MemberEditComponent } from './components/members/member-edit/member-edit.component';
import { MemberListComponent } from './components/members/member-list/member-list.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { AuthGuard } from './_guards/auth.guard';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
  { path: 'members/:username', component: MemberDetailComponent, canActivate: [AuthGuard] },
  { path: 'member/edit', component: MemberEditComponent, canActivate: [AuthGuard], canDeactivate: [PreventUnsavedChangesGuard] },
  { path: 'lists', component: ListsComponent, canActivate: [AuthGuard] },
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
