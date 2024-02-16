
When I click the Save Button on my template in WordPress it does this and shows a white page with this on it. It seems like there is an issue with some php files and a json_decode() but I'm not sure how to resolve it. I can provide any further details that may be helpful. Thank you for any assistance!

## Answer (1)

Looks like there's an error somewhere in the WordPress plugin (Visual Composer). You'll want to go through your site files and update them. It could also be that a plugin isn't compatible with your current version of WordPress. You should go to the Dashboard -> Updates page and see if there are any plugin or WordPress updates to make.

You could also look in the PHP error logs and see if you can find anything specific there.

Comment: Hi I looked at the logs and I got this error. "PHP Fatal error: Allowed memory size of 134217728 bytes exhausted (tried to allocate 368640 bytes) in /home/devinw56/public_html/wp-includes/wp-db.php on line 2269". Is there any way I can fix this?

Comment: Increase your memory limit in php.ini (`memory_limit = 256M`) and `wp-config.php` (`define('WP_MEMORY_LIMIT', '256M');`). The issue might also be the fact that there is a script with a lot of iterations that takes too much time. Try increasing your maximum execution time as well.
