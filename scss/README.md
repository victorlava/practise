# Components (01-components)
While partials/ and pages/ is kind of macro (defining the global wireframe), components/ is more micro. It can contain all kinds of specific modules like a slider, a loader, a widget, or anything along those lines. There are usually a lot of files in components/ 
since your site is should be mostly composed of tiny modules.
* _section.scss
* _navbar.scss
* _header.scss											  			

# Partials (02-partials)
The partials directory will probably contain the bulk of your SASS files. A page may consist of multiple partials and should be styled individually. These partials may include files like:
* _head.scss
* _footer.scss

# Pages (03-pages)
If you have page-specific styles, It’s good to put them in a pages/ folder and in a file named after the page. For example, it’s not uncommon to have very specific styles for the home page, so you’d have a _home.scss file in pages/ dealing with this. 
* _home.scss
* _article.scss
* _blog.scss
* _contact.scss

# Base (04-base)
The base directory contains styles that help start a project. The base directory could contain the following type of SASS files. **Global.scss file is the most important, because it's global - every style that doesn't go inside component, partial, page or any of the base files, should go here.**
* _settings.scss
* _global.scss
* _fonts.scss
* _helpers.scss
* _animations.scss							