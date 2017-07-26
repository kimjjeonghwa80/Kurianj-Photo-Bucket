import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { CreatePostComponent } from "../create-post/create-post.component";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import { AngularFireDatabase } from "angularfire2/database";
import { Subscription } from "rxjs/Subscription";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  private authStateSubscription: Subscription;
    firebasePath: string;

  constructor(private afAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase, private dialog: MdDialog) {}

  ngOnInit(): void {
    this.authStateSubscription = this.afAuth.authState.subscribe((user: firebase.User) =>{
      if(user){
        console.log("User has signed in as: ", user.uid);
        this.firebasePath = `/users/${user.uid}`;
      }
      else{
        console.log("User not signed in");
        this.router.navigate(["/signin"]);
      }
    });
  }

  showPostDialog(): void{
    console.log("show dialog");
    const dialogConfig = new MdDialogConfig();
    dialogConfig.data = {firebasePath: this.firebasePath};
    this.dialog.open( CreatePostComponent, dialogConfig);
  }

}
