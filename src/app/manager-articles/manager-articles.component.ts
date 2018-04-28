import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { CounterActions } from '../store/app.action';

@Component({
  selector: 'app-manager-articles',
  templateUrl: './manager-articles.component.html',
  styleUrls: ['./manager-articles.component.scss']
})
export class ManagerArticlesComponent implements OnInit {
  filters: Models.IArticleFilterParam = {
    sortBy: "",
    searchText: "",
    pageNumber: undefined,
    pageSize: undefined
  }

@select() readonly count$:Observable<number>;

  constructor(private counterActions:CounterActions) { }

  ngOnInit() {
  }

increment(){
  this.counterActions.increment();
}
decrement(){
  this.counterActions.decrement();
}
}
