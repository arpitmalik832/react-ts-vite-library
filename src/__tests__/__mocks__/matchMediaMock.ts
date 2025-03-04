const matchMediaMock = <T>(matches: boolean) =>
  jest.fn().mockImplementation((query: T) => ({
    matches,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));

export default matchMediaMock;
