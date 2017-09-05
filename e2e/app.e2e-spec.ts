import { StdAppPage } from './app.po';

describe('std-app App', () => {
  let page: StdAppPage;

  beforeEach(() => {
    page = new StdAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
