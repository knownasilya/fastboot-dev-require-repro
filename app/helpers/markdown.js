import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export default helper(function markdown([value] /*, named*/) {
  const tool = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify);
  const content = tool.processSync(value);

  return htmlSafe(String(content));
});
