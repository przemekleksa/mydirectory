import { MydirectoryPage } from './app.po';

describe('mydirectory App', function() {
  let page: MydirectoryPage;

  beforeEach(() => {
    page = new MydirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
