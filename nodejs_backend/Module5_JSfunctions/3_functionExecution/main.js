function Br() { // eslint-disable-line no-unused-vars
  document.write('<br>');
}

function doubleBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
  document.write('<br>');
}

const print = (n) => { // eslint-disable-line no-unused-vars
  document.write(n);
  document.write('<br>');
};

/*


Модуль tags содержит набор функций, позволяющих генерировать HTML с помощью функций.

table(
  tr(td('one'), td('two')),
  tr(td('three'), td('four'))
);

В результате вызовов возвращается вот такой HTML:

<table>
  <tr>
    <td>one</td>
    <td>two</td>
  </tr>
  <tr>
    <td>three</td>
    <td>four</td>
  </tr>
</table>

buildHtml.js

Реализуйте и экспортируйте по умолчанию функцию buildHtml, простой вызов которой:

buildHtml();

создаёт и возвращает следующий HTML:

<table>
  <tr>
    <td>lang</td>
    <td>comment</td>
  </tr>
  <tr>
    <td>php</td>
    <td>statements</td>
  </tr>
  <tr>
    <td>clojure</td>
    <td>expressions</td>
  </tr>
</table>


*/

const table = (...children) => `<table>${children.join('')}</table>`;
const tr = (...children) => `<tr>${children.join('')}</tr>`;
const td = (...children) => `<td>${children.join('')}</td>`;
const p = (...children) => `<p>${children.join('')}</p>`;

const buildHtml = () => {
  return table(
    tr(td('lang'), td('comment')),
    tr(td('php'), td('statements')),
    tr(td('clojure'), td('expressions')),
  );
};

print(buildHtml());





//
