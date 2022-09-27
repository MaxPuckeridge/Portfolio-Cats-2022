import { getCssText } from '../stitches.config';

export const decorators = [(Story) => 
  <>
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    <Story/>
  </>
];