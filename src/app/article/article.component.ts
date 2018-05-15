import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor(private articleService:ArticlesService) { }

  ngOnInit() {

  }
  voteUp00(): boolean {
    this.article.voteUp();
    return false;
  }
  voteDown00(): boolean {
    this.article.voteDown();
    return false;
  }


  voteUp(votes): boolean {
    let currentVotes= +votes;
    currentVotes += 1;
    this.article.votes=currentVotes;
    return false;
  }

  voteDown(votes): boolean {
    let currentVotes= +votes;
    currentVotes -= 1;
    this.article.votes=currentVotes;
    return false;
  }

  delete(id){
    this.articleService.delete(id).subscribe(
      result=>{
        console.log("elimino ok");
      }, err=>{
        console.log("error");
      },
      ()=>{
        console.log("finish");
      }
    )
  }
  edit(id, title,link,votes){
    this.articleService.edit(id,title,link,votes).subscribe(
      result=>{
        this.article.title=title;
        this.article.link=link;
        this.article.votes=votes;
        this.stater(0);
 
        console.log("Edito ok");
      }, err=>{
        console.log("error edit");
      },
      ()=>{
        console.log("finish");
      }
    )
  }
  stater(pState:number){
    this.article.state=pState;
  }

      // domain() is a utility function that extracts
    // the domain from a URL, which we'll explain shortly
    domain(link): string {
      try {
        // e.g. http://foo.com/path/to/bar
        const domainAndPath: string = link.split('//')[1];
        // e.g. foo.com/path/to/bar
        return domainAndPath.split('/')[0];
      } catch (err) {
        return null;
      }
    }

}
