import { Component, OnInit, Input } from '@angular/core';
import { Post } from "../models/post";
import { MdDialogConfig, MdSnackBar, MdDialog } from "@angular/material";
import { CreatePostComponent } from "../create-post/create-post.component";
import * as firebase from 'firebase';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post; 
  @Input() firebasePath: string;
  isExpanded= false;

  constructor(private snackBar : MdSnackBar, private dialog: MdDialog) { }

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
    console.log("Open")
  }

}
