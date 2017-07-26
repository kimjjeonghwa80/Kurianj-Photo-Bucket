import { Component, OnInit, Input } from '@angular/core';
import { Post } from "../models/post";
import { MdDialogConfig, MdSnackBar, MdDialog } from "@angular/material";
import { CreatePostComponent } from "../create-post/create-post.component";
import * as firebase from 'firebase';
import { Router } from "@angular/router";
import { AuthorService } from "../services/author.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post; 
  @Input() firebasePath: string;
  isExpanded= false;

  constructor(private snackBar : MdSnackBar, private dialog: MdDialog,  private router: Router, private authorService: AuthorService) { }

  ngOnInit() {
  }

   edit(): void{
    console.log("Edit");
    const dialogConfig = new MdDialogConfig();
    dialogConfig.data= {
      firebasePath: this.firebasePath,
      post: this.post,
    }
    this.dialog.open(CreatePostComponent, dialogConfig);
  }

  delete(): void{
    console.log("Delete");
    firebase.database().ref(this.firebasePath).child(this.post.$key).remove();
    this.snackBar.open("Password Removed!", "Dismiss",{
      duration: 3000,
    });
  }

  open(): void{
    console.log("Open");
    this.authorService.updatePhotoUrl(this.post.photoUrl);
    this.authorService.updateCaption(this.post.caption);
    this.router.navigate([`/openPost/${this.post.$key}`]);
  }

}
