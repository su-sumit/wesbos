import React from "react";
// import Heading from "../heading";
import Text from "./text";
import Code from "./code";
import CodeBlock from "./codeBlock";
import Pre from "./pre";

/* eslint-disable react/display-name*/
// TODO: This sohuld be a custom heading?
export default {
  h1: props => <h1 {...props} is="h1" fontSize={[5, 6]} />,
  h2: props => <h1 {...props} is="h2" fontSize={[4, 5]} />,
  h3: props => <h1 {...props} is="h3" fontSize={3} />,
  h4: props => <h1 {...props} is="h4" fontSize={2} />,
  h5: props => <h1 {...props} is="h5" fontSize={1} />,
  h6: props => <h1 {...props} is="h6" fontSize={0} />,
  p: props => <Text {...props} is="p" lineHeight={1.625} mt={3} mb={4} />,
  pre: Pre,
  code: CodeBlock,
  inlineCode: props => <Code {...props} />
  // TODO add `a`
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};
