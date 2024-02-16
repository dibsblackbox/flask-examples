
Is this related to some permission? If yes, then which one?

Comment: Why not simply run a check against https://dareboost.com/ or http://tools.pingdom.com/ to find out?

Comment: It may or may not be a permissions issue, but that is certainly an important first step to diagnosing this problem. You need to run your server and make the requests you're getting a 403 for and look at your error logs. If it is a permissions issue, that's where you'll find the info. If not, then there is other useful information in there that may help.

Comment: The webserver doesn't send back a `403` to you. The code runs in a user's browser and sends a `403` back to you. You can not have direct access to that webserver or any user's browsers to know for sure why that happened. It is very likely a user who doesn't have permissions or something that was rejected. I don't think that anyone can give you an accurate answer.

Comment: This question appears to be off-topic because it is about the inner workings of a closed source 3rd party software that cannot be verified or changed.

Comment: This question appears to be off-topic because it is about an application/product (cKeditor)

## Answer (0)

There are no forbidden or any kind of issues on your end. It's all the third party end which is providing spellcheck functionality in your CKEditor. You may ask your vendor for solution, they can resolve this by upgrading to newer version or making a few configuration changes on their end.

If you're not bound by any kind of agreement, I'd recommend switching to spellcheck.net or just go without a spellcheck. I had faced a lot of issues with it. I finally ditched it.
