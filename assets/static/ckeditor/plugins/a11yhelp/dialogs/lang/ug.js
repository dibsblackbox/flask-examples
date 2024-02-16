
The first entry, "0" maps to "Ø³Ø§Ù ØªØ§Ø®ØªØ§ 0" (or, in Unicode: "\u0627\u0644\u0645 \u0623\u0644\u0648\u0627\u0644 \u0600"). 

This Unicode is called Arabic-Indic digits and represents the numeral "0". The Latin script digit "0" maps to the numeral "0" in Western Arabic numerals, or in Unicode "\u0030". 

For reference: 

https://en.wikipedia.org/wiki/Arabic_digits#Unicode

https://en.wikipedia.org/wiki/Western_Arabic_numerals


---

## Possible Bug?

### Expected Output:

For example, when pressing "F1", we would expect to get "F1". 

### Actual Output:

For the `Arabic (Saudi Arabia)` language and the `Standard Keyboard`, this does not happen.

The correct key names do appear, but with some extraneous Unicode in between:

    $ xmodmap -pke
    ...
    keycode  80 = F11 NoSymbol F11 NoSymbol
    keycode  81 = F12 NoSymbol F12 NoSymbol
    keycode  82 = Ù,§Ù F1 NoSymbol NoSymbol NoSymbol NoSymbol NoSymbol
    keycode  83 = F2 NoSymbol F2 NoSymbol
    keycode  84 = F3 NoSymbol F3 NoSymbol
    keycode  85 = F4 NoSymbol F4 NoSymbol
    keycode  86 = F5 NoSymbol F5 NoSymbol
    keycode  87 = F6 NoSymbol F6 NoSymbol
    keycode  88 = F7 NoSymbol F7 NoSymbol
    keycode  89 = F8 NoSymbol F8 NoSymbol
    keycode  90 = F9 No
