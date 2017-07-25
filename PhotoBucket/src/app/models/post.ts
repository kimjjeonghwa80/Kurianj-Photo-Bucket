import { FirebaseFileSnapshot } from "./firebase-file-snapshot";
import { Author } from "./author";

export class Post extends FirebaseFileSnapshot {
    public authorKey: string;
    public photoUrl: string;
    public caption: string;

    constructor(obj?:any){
        super(obj);
        this.authorKey = obj && obj.authorKey || "";
        this.photoUrl = obj && obj.photoUrl || "";
        this.caption = obj && obj.caption || "";
    }
}

export class PostWithAuthor extends Post{
    public author: Author;

    constructor(obj?: any){
        super(obj);
        this.author = obj && obj.author || new Author();
    }
}