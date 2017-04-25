import { SendbirdTestPage } from './app.po';

describe('sendbird-test App', () => {
  let page: SendbirdTestPage;

  beforeEach(() => {
    page = new SendbirdTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
