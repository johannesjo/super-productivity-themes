# Themes for [Super Productivity](https://github.com/johannesjo/super-productivity)

<a href="https://lbesson.mit-license.org">
  <img alt="MIT license"
       src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square"
       align="center">
</a>
<a href="https://www.reddit.com/r/selfhosted/comments/by7bcu/super_productivity_is_an_open_source_todo_list/?ref=readnext">
  <img alt="On reddit"
       src="https://img.shields.io/badge/on-reddit-orange.svg?style=flat-square"
       align="center">
</a>

## :heavy_check_mark: Make theming easy

This repository is for user made themes for [Super Productivity](https://github.com/johannesjo/super-productivity). The repository aims for easy theming from the CSS standpoint.

## :question: How to add your theme

1. Fork this repository
2. Clone the forked repository to your computer
3. Run `npm install`
4. Develop your theme under `src/yourthemename`, check out dracula.scss for example. You can see the stylable elements inside `src/dark-base`
5. Keep command `gulp` running while developing your theme or if you prefer simply task compiling instead of watching files, run `gulp styles` after your changes
6. When you are done, send a Pull Request and we'll add your theme if it's good!

## :globe_with_meridians: Testing themes

Currently there is no live testing themes (yet) but you can test your themes under the official super-productivity repository by doing the following:

1. `git clone -branch styles-dev https://github.com/ronilaukkarinen/super-productivity.git`
2. `cd super-productivity`
3. `npm install`
4. `npm install -g @angular/cli`
5. `ng serve`
6. Open a new Terminal window and run `npm start`
7. Go to src/styles.scss and import your styles