import { MutantSpaPage } from './app.po';

describe('mutant-spa App', () => {
  let page: MutantSpaPage;

  beforeEach(() => {
    page = new MutantSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
