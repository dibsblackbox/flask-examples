
What's strange is that it only works for `post_render()` but not for `dataBind()` in `AdminMenuView`. I am still debugging, but maybe somebody already had a similar issue?

Thanks

Comment: Thanks, but this did not help me

Comment: can you check that what are the content you are getting on AdminMenuView? I think that can be an issue

Comment: Thanks for the help, but this is the response: 200 OK Content-Length: 3394 Content-Type: application/x-javascript new CKEDITOR.plugins.loadClassics();

Comment: Are you able to share some piece of code here, how you are getting it, where are you putting that content etc

Comment: @saurabh.agarwal The `post_render()` and `dataBind()` functions are inside a Razor View `AdminMenuView`. It's too big to share, but basically, `dataBind()` and `post_render()` functions are in a partial view and `post_render()` function works as expected. But when I do `$(view).data("bind",function(){ ... })` it doesn't work

Comment: Thanks, I see the problem, let me see what is wrong there.

Comment: Can you please try with $(view.element).data("bind",function(){ ... }) instead of $(view).data("bind",function(){ ... })

Comment: That didn't help unfortunately. Thanks

Comment: $(view.el).data("bind",function(){ ... }) is the solution for your issue, have you tried with it?

Comment: I think `el` should be lower case

Comment: el should be camelCase as well

Comment: Sorry, my mistake. Can you try $(view.el).data("bind",function(){ ... }) and see what happens

Comment: Yes, that was my mistake as well, it is `el` and not `el`. So the final code should be `$(view.el).data("bind",function
