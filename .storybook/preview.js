import GlobalStyles from "../src/components/UI/GlobalStyles/GlobalStyles"

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