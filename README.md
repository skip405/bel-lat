# belLit

Convert cyrillic Belarusian characters to Latin characters using transliteration. Can transliterate in accordance with the ["Instruction on transliteration of geographical names"](https://en.wikipedia.org/wiki/Instruction_on_transliteration_of_Belarusian_geographical_names_with_letters_of_Latin_script) or in accordance with the rules of the [Belarusian Latin alphabet (Łacinka)](https://en.wikipedia.org/wiki/Belarusian_Latin_alphabet). Can slugify the resulted transliterated string.

## Installation

```
npm i @skip405/bel-lat
```

## Usage

By default, the package transliterates in accordance with the Łacinka rules.

```javascript
import belLat from '@skip405/bel-lat';

belLat('Лацінка') // Łacinka
```

which is equivalent to:

```javascript
import belLat from '@skip405/bel-lat';

belLat('Лацінка', { style: 'lacinka' }) // Łacinka
```

You can specify conversion in accordance with the instruction for geographical names, e.g.

```javascript
import belLat from '@skip405/bel-lat';

belLat('Лацінка', { style: 'geographical' }) // Lacinka
```

## Testing

```
npm test
```

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.