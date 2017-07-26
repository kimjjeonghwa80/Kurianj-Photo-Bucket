import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { SigninComponent } from "./signin/signin.component";
import { MypostsComponent } from "./myposts/myposts.component";
import { OpenPostComponent } from "./open-post/open-post.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', component: MainComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'openPost/:post',  component: OpenPostComponent},
    {path: 'myposts', pathMatch: 'full', component: MypostsComponent},
    {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
