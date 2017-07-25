import { FirebaseFileSnapshot } from "./firebase-file-snapshot";

export class Author extends FirebaseFileSnapshot {
    public displayName: string;

    constructor(obj?:any){
        super(obj);
        this.displayName = obj && obj.displayName || "";
    }
}
