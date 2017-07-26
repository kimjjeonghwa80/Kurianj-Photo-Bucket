import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { Post } from "../models/post";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import { MdDialog } from "@angular/material";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy  {
 private authStateSubscription: Subscription;
  postStream: FirebaseListObservable<Post[]>;
    firebasePath: string;
  constructor(private afAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase, private dialog: MdDialog) { }

  ngOnInit() {
     this.authStateSubscription = this.afAuth.authState.subscribe((user: firebase.User) =>{
      if(user){
        console.log("User has signed in as: ", user.uid);
        this.firebasePath = `/users/${user.uid}`;
        this.postStream = this.db.list(this.firebasePath);
      }
      else{
        console.log("User not signed in");
        this.router.navigate(["/signin"]);
      }
    });
  }

    get numColumns(): number{
    if(window.innerWidth < 500){
      return 1;
    }else if(window.innerWidth < 900){
      return 2;
    }
    else if(window.innerWidth < 1300){
      return 3;
    }
    else{
      return 4;
    }
  }

  ngOnDestroy(): void{
    this.authStateSubscription.unsubscribe();
  }

}
