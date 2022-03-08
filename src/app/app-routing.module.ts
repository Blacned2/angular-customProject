import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AliciEditComponent } from './components/content/alici/alici-edit/alici-edit.component';
import { AliciGetComponent } from './components/content/alici/alici-get/alici-get.component';
import { ContentComponent } from './components/content/content.component';
import { PostPostComponent } from './components/content/post/post-post/post-post.component';
import { PostComponent } from './components/content/post/post.component';
import { TodoComponentComponent } from './components/content/todo-component/todo-component.component';
import { UserComponent } from './components/content/user/user.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"todos",component:TodoComponentComponent},
  {path:"users",component:UserComponent},
  {path:"posts",component:PostComponent},
  {path:"posts/post-posts",component:PostPostComponent},
  {path:"alicilar",component:AliciGetComponent},
  {path:"aliciedit/:id",component:AliciEditComponent},
  {path:"lgn",component:LoginComponent},
  // {path:"rgr",component:RegisterComponent},

  {path:"**",component:ContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
