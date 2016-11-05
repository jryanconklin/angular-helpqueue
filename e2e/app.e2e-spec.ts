import { NgFirebaseTestPage } from './app.po';

describe('ng-firebase-test App', function() {
  let page: NgFirebaseTestPage;

  beforeEach(() => {
    page = new NgFirebaseTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
