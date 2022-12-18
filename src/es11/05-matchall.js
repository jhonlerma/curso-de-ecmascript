const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, Banana, kisi. orange';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}