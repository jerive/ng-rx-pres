import { NgRxPresPage } from './app.po';

describe('ng-rx-pres App', () => {
  let page: NgRxPresPage;

  beforeEach(() => {
    page = new NgRxPresPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
