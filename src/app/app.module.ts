import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { ContentComponent } from './components/content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponentComponent } from './components/content/todo-component/todo-component.component';
import { UserComponent } from './components/content/user/user.component';
import { RouterModule } from '@angular/router';
import { TypeheadFocusComponent } from './components/content/typehead-focus/typehead-focus.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './components/content/post/post.component';
import { PostPostComponent } from './components/content/post/post-post/post-post.component';
import { AliciGetComponent } from './components/content/alici/alici-get/alici-get.component';
import { AliciEditComponent } from './components/content/alici/alici-edit/alici-edit.component';
import { ModalOptionsComponent } from './components/content/alici/modal-options/modal-options.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptorService } from './services/loading-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    ContentComponent,
    TodoComponentComponent,
    UserComponent,
    TypeheadFocusComponent,
    PostComponent,
    PostPostComponent,
    AliciGetComponent,
    AliciEditComponent,
    ModalOptionsComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
