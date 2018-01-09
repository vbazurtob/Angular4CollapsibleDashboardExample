import { CrossoverAssignmentPage } from './app.po';

describe('crossover-assignment App', () => {
  let page: CrossoverAssignmentPage;

  beforeEach(() => {
    page = new CrossoverAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
