import unified from 'unified'
import markdown from 'remark-parse'
import gfm from 'remark-parse'
import inspect from 'unist-util-inspect'

const main = () => {
  const processor = unified().use([markdown, gfm]).freeze()
  const md = `<table>
<tbody>
  <tr><td>aaa</td></tr>
</tbody>
</table>

<iframe>
test
</iframe>

<div>
aaaaa
</div>

<a href="sample.jpg">
test
</a>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 3000 3000"><image width="3000" height="3000" xlink:href="../image/cover.jpg"/></svg>

<math><mrow><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math>`

  console.log(inspect(processor.parse(md), { showPositions: false }))
}

main()
