import { TestBed, inject } from '@angular/core/testing';

import { ArticlesService } from './articles.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IArticleFilterParam } from '../_models/shared.model';

fdescribe('ArticlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlesService],
      imports:[HttpClientTestingModule]
    });
  });

  it('should be created', inject([ArticlesService], (service: ArticlesService) => {
    expect(service).toBeTruthy();
  }));

  it('http should be created', inject([HttpTestingController], (http: HttpTestingController) => {
    expect(http).toBeTruthy();
  }));

  it('getList should return the data list',()=>{
    //Arrange
    let expectedList=[];
    let service = TestBed.get(ArticlesService);
    let http= TestBed.get(HttpTestingController);
    let filters: IArticleFilterParam = {
      sortBy: "POINTS",
      searchText: "",
      pageNumber: undefined,
      pageSize: undefined
    };
    //Act
    service.getList(filters).subscribe((datalist)=>{
      expect(datalist).toEqual(expectedList);
    });
    //Assert
    const req= http.expectOne('http://localhost:3000/articles?_sort=points&_order=desc');
    expect(req.request.method).toBe("GET");
    req.flush(expectedList);
  });

  it('newArticle should add one article',()=>{
    //Arrange
    let expectedList=[];
    let beforeCount=5;
    let afterCount=1;
    let service = TestBed.get(ArticlesService);
    let http= TestBed.get(HttpTestingController);
    //Act

    service.newArticle('Test-1','http://www.test.com').subscribe((datalist)=>{
      expect(datalist).toEqual(expectedList);
    });
    //Assert
    const req= http.expectOne('http://localhost:3000/articles');
    expect(req.request.method).toBe("POST");
    req.flush(expectedList);
  });

  it('Edit should edit one article',()=>{
    //Arrange
    let expectedList=[];
    let service = TestBed.get(ArticlesService);
    let http= TestBed.get(HttpTestingController);
    //Act

    service.edit(1,'Edit-2','http://www.test.com',15).subscribe((datalist)=>{
      expect(datalist).toEqual(expectedList);
    });
    //Assert
    const req= http.expectOne('http://localhost:3000/articles/1');
    expect(req.request.method).toBe("PUT");
    req.flush(expectedList);
  });

  it('Delete should erase the article',()=>{
    //Arrange
    let expectedList=[];
    let service = TestBed.get(ArticlesService);
    let http= TestBed.get(HttpTestingController);
    //Act

    service.delete(1).subscribe((datalist)=>{
      expect(datalist).toEqual(expectedList);
    });
    //Assert
    const req= http.expectOne('http://localhost:3000/articles/1');
    expect(req.request.method).toBe("DELETE");
    req.flush(expectedList);
  });

});
