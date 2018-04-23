const book = {
  title: 'Book 123',
  author: 'Artur Kozieł',
  publisher: {
    name: 'Jan Kowalski',
    city: "Warszawa",
    //agency: ''
  }
};

const { author: auth }  = book;
console.log(`Book author is ${auth}`);

const { name: publisherName, city, agency = 'Agency' } = book.publisher

if(publisherName && city) {
  console.log(`Publisher name is ${publisherName}, city is ${city}, agency is ${agency}`)
}

const item = ['Coffe (hot)', '2.25$', '2.50$' , '3$'];
const [coffe, smallCoffePrice, mediumCoffePrice, largeCoffePrice] = item;
console.log(`Prices for ${coffe} are: small: ${smallCoffePrice}, medium: ${mediumCoffePrice}, large: ${largeCoffePrice}`);