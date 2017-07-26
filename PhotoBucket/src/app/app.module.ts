import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './signin/signin.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  MaterialModule
} from '@angular/material';
import { environment } from "../environments/environment";
import { AuthService } from "./services/auth.service";
import { AuthorService } from "./services/author.service";
import { ReversePipe } from './pipes/reverse.pipe';
import { CreatePostComponent } from './create-post/create-post.component';
import { MypostsComponent } from './myposts/myposts.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { OpenPostComponent } from './open-post/open-post.component';
export const MaterialModules = [
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SigninComponent,
    CreatePostComponent,
    MypostsComponent,
    PostListComponent,
    ReversePipe,
    PostComponent,
    OpenPostComponent
  ], 
  entryComponents: [
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModules,
    BrowserAnimationsModule,
    FlexLayoutModule,
     FormsModule,
  ],
  providers: [
    AuthService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
