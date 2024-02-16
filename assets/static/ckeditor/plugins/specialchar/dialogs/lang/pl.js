
This should help.

## Answer (1)

There are three solutions.

First is not really good but the most common: add your js script just before `</body>`




Second: wrap it with a `$(document).ready(function() {...})` or `$(function() {...})` (same)




Third (better than first but the same as second): set an ID for the script and wrap it with a script that check if DOM is loaded.




The reason for the third is: sometimes `$(document).ready()` does not wait until DOM is ready (there is no 100% chance of waiting until DOM is loaded) so I recommend you the third option.

## Answer (0)

**How about wrapping the function inside document ready ?**




**EDIT :**

This can also be used.

