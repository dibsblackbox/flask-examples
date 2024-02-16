
The input was `

**Foo**

Bar
========================

### Quux

![alt](img/q.jpg)

* Unordered
	+ Sub




* **Bold**

`Code block`

> Blockquote
> > Sub
> > > Sub
>
> ------------------------------------

The output is


// Javascript code block
var x = 5;



---

#### Details

* Input Type: 	markdown
* Output Type: 	plaintext
* # of Tests: 	1
* Coverage: 	['strong', 'a', 'blockquote', 'pre', 'br', 'i', 'code', 'ul', 'hr', 'img', 'hr', 'p', 'hr', 'ol']

---

**[Run tests](https://jestjs.io/docs/en/api#testcommand-options)**
