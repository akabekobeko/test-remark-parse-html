# test-remark-parse-html

Test the parsing of HTML tags by remark-parse.

## Description

A repository for verifying that `<svg>` and `<math>` tags do not become a single AST in HTML parsing with `remark-parse` 9.0.0 and `remark-gfm` 1.0.0.

## Setup

```
$ git clone https://github.com/akabekobeko/test-remark-parse-html.git
$ cd test-remark-parse-html
$ npm i
```

## Run

Executing npm-scripts will output the AST parsed by remark-parse. For `remark-parse` 9.0.0 and `remark-gfm` 1.0.0:

```
$ npm start

> test-remark-parse-html@1.0.0 start
> ts-node index.ts

root[6]
├─0 html "<table>\n<tbody>\n  <tr><td>aaa</td></tr>\n</tbody>\n</table>"
├─1 html "<iframe>\ntest\n</iframe>"
├─2 html "<div>\naaaaa\n</div>"
├─3 html "<a href=\"sample.jpg\">\ntest\n</a>"
├─4 paragraph[3]
│   ├─0 html "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"100%\" height=\"100%\" viewBox=\"0 0 3000 3000\">"
│   ├─1 html "<image width=\"3000\" height=\"3000\" xlink:href=\"../image/cover.jpg\"/>"
│   └─2 html "</svg>"
└─5 paragraph[36]
    ├─0 html "<math>"
    ├─1 html "<mrow>"
    ├─2 html "<mrow>"
    ├─3 html "<msup>"
    ├─4 html "<mi>"
    ├─5 text "a"
    ├─6 html "</mi>"
    ├─7 html "<mn>"
    ├─8 text "2"
    ├─9 html "</mn>"
    ├─10 html "</msup>"
    ├─11 html "<mo>"
    ├─12 text "+"
    ├─13 html "</mo>"
    ├─14 html "<msup>"
    ├─15 html "<mi>"
    ├─16 text "b"
    ├─17 html "</mi>"
    ├─18 html "<mn>"
    ├─19 text "2"
    ├─20 html "</mn>"
    ├─21 html "</msup>"
    ├─22 html "</mrow>"
    ├─23 html "<mo>"
    ├─24 text "="
    ├─25 html "</mo>"
    ├─26 html "<msup>"
    ├─27 html "<mi>"
    ├─28 text "c"
    ├─29 html "</mi>"
    ├─30 html "<mn>"
    ├─31 text "2"
    ├─32 html "</mn>"
    ├─33 html "</msup>"
    ├─34 html "</mrow>"
    └─35 html "</math>"
```
