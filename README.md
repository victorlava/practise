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
	2. cd project_folder
	3. php -S localhost:9000 (launch PHP server)

2. Open new terminal
	1. cd project_folder
	2. npm install
	3. grunt watch

3. Open http://localhost:9000/www/index.php on your browser

## Directory Structure
1. node_modules (don't touch this)

2. [scss](https://github.com/victor-lava/front-end-boilerplate/tree/master/scss) (style files)
	1. [01-components](https://github.com/victor-lava/front-end-boilerplate/tree/master/scss/01-components)
	2. [02-partials](https://github.com/victor-lava/front-end-boilerplate/tree/master/scss/02-partials)
	3. [03-pages](https://github.com/victor-lava/front-end-boilerplate/tree/master/scss/03-pages)
	4. [04-base](https://github.com/victor-lava/front-end-boilerplate/tree/master/scss/04-base)
	5. main.scss // Import your SASS files here

3. www (PHP files)
	1. css (don't touch this, use scss directory instead)
	2. partials (your PHP partial files, for ex. head.php, navigation.php, footer.php)
	3. index.php (your home page)
	4. contact.php
	5. about.php
	6. 404.php (error page)
