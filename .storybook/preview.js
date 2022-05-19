import GlobalStyles from "../src/components/GlobalStyles"

export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyles />
        <Story />
      </>
    );
  },
 ];