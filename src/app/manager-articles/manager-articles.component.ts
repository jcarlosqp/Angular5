import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { CounterActions } from '../store/app.action';
import { IArticleFilterParam } from '../_models/shared.model';

@Component({
  selector: 'app-manager-articles',
  templateUrl: './manager-articles.component.html',
  styleUrls: ['./manager-articles.component.scss']
})
export class ManagerArticlesComponent implements OnInit {
  filters: IArticleFilterParam = {
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
