// @todo: напишите здесь код парсера

function parsePage() {
    return {
        meta: fillMeta (),
        product: {},
        suggested: [],
        reviews: []
    };
}

window.parsePage = parsePage;

function fillMeta () {
  const meta = {};
  const head = document.head;
  const title = head.querySelector('title')
    .textContent.split('—')[0].trim();          // получить название заголовка до тире 
  const description = head.querySelector('meta[name="description"]')
    .getAttribute('content');                   // получить описание сайта
  const keywords = head.querySelector('meta[name="keywords"]')
    .getAttribute('content')
    .split(',')
    .map(word => word.trim());                  // получаем ключевые слова в виде массива
  const language = document.querySelector('html')
    .getAttribute('lang');                      // получить язык
  const opengraph = {};
  const propertyOpengraph = Array.from(head.querySelectorAll('meta[property]'))
    .map(attribute => attribute.getAttribute('property').split(':')[1]);  // задаю массив ключей из property
  const contentOpengraph = Array.from(head.querySelectorAll('meta[property]'))
    .map(attribute => attribute.getAttribute('content'));  // задаю массив ключей из content

  propertyOpengraph.forEach((key, index) => {
    opengraph[key] = contentOpengraph[index];
  });                                           // наполняю объект ключами и значением

  meta.title = title;                           // заголовок
  meta.description = description;               // описание из мета-тега
  meta.keywords = keywords;                     // ключевые слова мета-тега
  meta.language = language;                     // язык
  meta.opengraph = opengraph;                   //мета-теги с ключами вида og:*
  
  return meta;
}

function fillProduct () {
  const product = {};
  const id;
      
}



// console.log(opengraph);
