export const questionClass = [
  {
    code: 'HTML',
    label: 'HTML',
    children: [
      {
        code: 'DOM',
        name: 'DOM',
        items: [
          {
            code: 'div',
            name: 'div',
          },
        ],
      },
      {
        code: 'BOM',
        name: 'BOM',
      },
    ],
  },
  {
    code: 'CSS',
    name: 'CSS',
    items: [],
  },
];

export const question = [
  {
    question: '<p>问你是不是喝多了</p>',
    class: 'DOM',
    level: 1,
    answer:
      "<p>没有</p><br/><pre class='language-markup'><code>let me = '没喝'</code></pre>",
  },
];
