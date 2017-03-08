import { MinimagClientPage } from './app.po';

describe('minimag-client App', function() {
  let page: MinimagClientPage;

  beforeEach(() => {
    page = new MinimagClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
