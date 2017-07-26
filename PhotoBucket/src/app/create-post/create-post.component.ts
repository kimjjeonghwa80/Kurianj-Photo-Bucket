import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogConfig, MdDialogRef, MD_DIALOG_DATA } from "@angular/material";
import { Post } from "../models/post";
import * as firebase from 'firebase';
import { AuthService } from "../services/auth.service";
import { AngularFireDatabase } from "angularfire2/database";


interface PostDialogData{
  firebasePath:string;
  post?: Post;
}

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  title="Add a Photo";
  formPost : Post;

  constructor(private dialogRef: MdDialogRef<CreatePostComponent>,
    @Inject(MD_DIALOG_DATA) private dialogData: PostDialogData, public authService: AuthService,
    private db: AngularFireDatabase) { 
       this.formPost = new Post();
      console.log("Recieved the data: ", dialogData);
    }

  ngOnInit() {
     if(this.dialogData.post){
       this.title = "Edit this post!"
      Object.assign(this.formPost, this.dialogData.post);
    }
  }
  onSubmit(){
    try{
     const post = new Post({
        caption: this.formPost.caption,
        photoUrl: this.formPost.photoUrl,
        authorKey: this.authService.userID,
      });
            const firebaseRef = firebase.database().ref(this.dialogData.firebasePath);
      if(this.dialogData.post){
          firebaseRef.child(this.dialogData.post.$key).set(post); 
      }
      else{
        firebaseRef.push(post);
      }
      console.log("Post should be in database now!", post);
      this.dialogRef.close();
    } catch(e){
      console.error("Submit Error", e);
    }
  }

  featuredPhotoSelected(event : any, photoName: string){
    const file: File = event.target.files[0];
    console.log("Selected file: ", file.name);
    const metaData = {'contentType': file.type};

    const storageRef: firebase.storage.Reference = 
    firebase.storage().ref().child(`/users/${photoName}`);

    const uploadTask: firebase.storage.UploadTask = storageRef.put(file, metaData);
    console.log("Uploading file: ", file.name);
    uploadTask.then( (uploadSnapshot: firebase.storage.UploadTaskSnapshot) => { 
        console.log("Upload is complete", uploadSnapshot.downloadURL);
        this.formPost.photoUrl = uploadSnapshot.downloadURL;
     });
      
  }


}
