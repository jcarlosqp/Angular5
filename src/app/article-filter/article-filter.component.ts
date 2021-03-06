import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IOptionElement, IArticleFilterParam } from '../_models/shared.model';

@Component({
  selector: 'app-article-filter',
  templateUrl: './article-filter.component.html',
  styleUrls: ['./article-filter.component.scss']
})

export class ArticleFilterComponent implements OnInit {
  sortListFilters: IOptionElement[]=[];
  filters: IArticleFilterParam = {
    sortBy: "",
    searchText: "",
    pageNumber: undefined,
    pageSize: undefined
  }
  @Output() onUpdateFilters = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    this.sortListFilters.push({ text:"Title", value:"TITLE"});
    this.sortListFilters.push({ text:"Points", value:"POINTS"});
    this.onSelectSortBy("POINTS");
  }
  onSelectSortBy(sortbyId: string = "TITLE") {
    this.filters.sortBy = sortbyId;
    console.log(sortbyId);
    this.updateList();
  }

  updateList() {
    this.onUpdateFilters.emit(this.filters);
  }

}