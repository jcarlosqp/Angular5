export class Article{
    title:string;
    link:string;
    votes:number;
    state:number;
    id:number;

    constructor(title: string, link: string, votes?: number, id?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
        this.state=0;
        this.id = id || 0;
      }

    voteUp():void{
        this.votes+=1;
    }
    voteDown():void{
        this.votes-=1;
    }


}