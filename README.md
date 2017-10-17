Hybrid front-end/backend boilerplate with SASS and Live Reload. Works well for simple websites with a little bit of PHP. Includes structured SASS.

# Getting started

## Features
* Grunt
* SASS
* Live Reload
* PHP

## Install global dependencies
1. [Node.js](https://nodejs.org/en/)
2. [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
4. [Grunt.js](https://gruntjs.com/)
5. PHP (with working CLI)

## How to start new project
1. Open terminal
	1. Clone or download this repository
	2. cd project_folder/www
	3. php -S localhost:9000 (launch PHP server)

2. Open new terminal
	1. cd project_folder/
	2. npm install
	3. grunt watch

3. Open http://localhost:9000 on your browser

## Directory Structure
1. node_modules (don't touch this)

2. [scss](https://github.com/victor-lava/front-end-boilerplate/tree/master/scss) (style files)
	1. [01-components](https://github.com/victor-lava/front-end-boilerplate/tree/master/scss/01-components)
	2. [02-partials](https://github.com/victor-lava/front-end-boilerplate/tree/master/scss/02-partials)
	3. [03-pages](https://github.com/victor-lava/front-end-boilerplate/tree/master/scss/03-pages)
	4. [04-base](https://github.com/victor-lava/front-end-boilerplate/tree/master/scss/04-base)
	5. style.scss // Import your SASS modules, for ex. _nav.scss

3. www (PHP files)
	* partials (your PHP partial files, for ex. head.php, navigation.php, footer.php)
	* index.php
	* contact.php
	* about.php
	* 404.php 


# License
## Credits
 Borrowed some ideas from [Gergely Kovács](https://github.com/ggkovacs/architecture-sass-project).
 
## MIT
Copyright (c) <2017> <Victor Lava (info@victorlava.com)>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
