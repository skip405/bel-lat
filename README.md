# belLat

Convert cyrillic Belarusian characters to Latin characters using transliteration. Can transliterate in accordance with the ["Instruction on transliteration of geographical names"](https://en.wikipedia.org/wiki/Instruction_on_transliteration_of_Belarusian_geographical_names_with_letters_of_Latin_script) (2000 and 2023) or in accordance with the rules of the [Belarusian Latin alphabet (Łacinka)](https://en.wikipedia.org/wiki/Belarusian_Latin_alphabet).

## Installation

```
npm i @skip405/bel-lat
```

## Usage

By default, the package transliterates in accordance with the Łacinka rules.

```javascript
import belLat from '@skip405/bel-lat';

belLat('Лацінка'); // Łacinka
```

which is equivalent to:

```javascript
import belLat from '@skip405/bel-lat';

belLat('Лацінка', { style: 'lacinka' }); // Łacinka
```

## Instruction for geographical names

You can specify conversion in accordance with the instructions for geographical names (2000 and 2023), e.g.

```javascript
import belLat from '@skip405/bel-lat';

belLat('Шчучыншчына', { style: 'geo-2000' }); // Ščučynščyna
belLat('Шчучыншчына', { style: 'geo-2023' }); // Shchuchynshchyna
```

## Basic replacements

The package allows to specify own replacement symbols.

```javascript
import belLat from '@skip405/bel-lat';

belLat("№", {
  customReplacements: [ ['№', ['#']] ]
}); // #
```

**N.B.** if you need more complex conversions please prepare the string beforehand using other means.

## Basic omissions

If you'd like to omit any characters from conversion you can specify `_omitted` as a value for a custom replacement.

```javascript
import belLat from '@skip405/bel-lat';

belLat("абв", {
  customReplacements: [ ['б', '_omitted'] ]
}); // av
```

**N.B.** conversion is done on a per-character basis, it is not possible to omit multiple characters in a single call.

## Testing

```
npm test
```

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.