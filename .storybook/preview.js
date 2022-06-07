import GlobalStyles from "../src/components/UI/GlobalStyles"

export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyles />
        <Story />
      </>
    )
  },
 ]