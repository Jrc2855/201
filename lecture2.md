# class 02: Basics of HTML, CSS, and JS

## Announcements

* First learning journal
* The first quiz will open up tomorrow (09/15), and is due before the end of class Thursday.

## Warm Up

You are given access to a web server directory, which will serve content over the internet. The directory structure looks like this: after you run 'tree': 

'''
.
| -- profile.png
| -- title.png
| -- thumbnail.png
+ -- home.html
'''

Your job is re-organize the directory to look like this:

'''md
.
| -- assets
|    | -- profile.png
|   | -- title.png
| -- pages
|   | -- contact.html
|       | -- about.html
| -- readme.md
+ -- index.html


'''

what bash terminal commands could we run to convert our directory structure?

'''bash
mkdir assets #creates assets folder
mv profile.png assets/profile.png
mv title.png assets/title.png
mkdir pages
cd pages
touch contact.html
touch about.html
cd ..
mv home.html ./index.html ## renaming home.html to index.html
rm thumbnail.png
touch README.md
'''

To create a file inside of a specific folder use "touch directory/filename.ext

## Code Review

* 4 Questions
    * prompts
        * background color for an ordered list. 
    * What questions did you ask?
        * What is your least favorite ice cream? - Sam
        * What is your favorite drink? - Jared
        * Where would you like to vacation next? - Brannon
        * What's your favorite weather? - Ibraheem
* 4 Responses
    * Storing values in variables.

## Browser App Basics (HTML, CSS, JS)

* HTML Attributes
    * id - is for a single element
    * classes - a class is for a group of elements
    * both are meant to provide a way to select items in CSS (as well as JS).
    * Attribute are defined on a single element, and should be defined in the opening element tag. 
    * <link> element, used for "linking" to external resources that typically would go in the head.
* The browser gives elements some default styling. 
    * reset.css
    * A lot of developers don't want any default styles applied to the webpage.
* Selecting Elements in CSS.
    * When selecting AN element by id attribute, we can use '#' to select that element
    * When selecting MULTIPLE elements by classname, we can use the '.'.
* Data Types
* conditional logic / flow control
    * if
    * then
    * else


## Review

* What is the difference between an 'id' and a 'class'?
    * id is for a single element, class is for a group.
        * Will our HTML break if we have elements that share.
            * No
* How do I link an external Stylesheet?
    * <link rel='stylesheet' href='styles.css'>
        * href attribute should receive a relative path to a css file. 
* How do I link an external javascript file? 
    * <script src="JSfileName.js"></script>
        * the 'src' attribute is more for "embedding" content into our document. 