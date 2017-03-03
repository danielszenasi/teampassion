import { Teampassion2Page } from './app.po';

describe('teampassion2 App', function() {
  let page: Teampassion2Page;

  beforeEach(() => {
    page = new Teampassion2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
