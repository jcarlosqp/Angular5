import { AppPage } from './app.po';

describe('app-angular-demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Simple App message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Simple App');
  });
});
