import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Post } from "../models/post";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase';
import { AuthService } from "../services/auth.service";
import { AuthorService } from "../services/author.service";

@Component({
  selector: 'app-open-post',
  templateUrl: './open-post.component.html',
  styleUrls: ['./open-post.component.scss']
})
export class OpenPostComponent implements OnInit {
    photoUrl: string;
    photoCaption: string;

  constructor(private router: Router, private db: AngularFireDatabase, public authService: AuthService, public authorService: AuthorService) { 
    var res = router.url.split("/");
    var firebasePath = res[res.length-1];
    this.photoUrl = this.authorService.photoUrl;
    this.photoCaption = this.authorService.photoCaption;
    console.log("Photo URL? ", this.photoUrl);
  }

  ngOnInit() {
  }

  back(){
    console.log("back");
    this.router.navigate(["/"]);
  }

}
