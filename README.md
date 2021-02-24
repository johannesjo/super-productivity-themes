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

## :lollipop: Themes

### Dracula

macOS oneliner:

```` bash
wget https://raw.githubusercontent.com/johannesjo/super-productivity-themes/main/dist/dracula/dracula.css && mv dracula.css styles.css && cp styles.css ~/Library/Application\ Support/superProductivity/
````

<img src="https://i.imgur.com/obqJl3o.png" alt="Dracula">

### Nord Polar Night

macOS oneliner:

```` bash
wget https://raw.githubusercontent.com/johannesjo/super-productivity-themes/main/dist/nord-polar-night/nord-polar-night.css && mv nord-polar-night.css styles.css && cp styles.css ~/Library/Application\ Support/superProductivity/
````

<img src="https://i.imgur.com/vffv478.png" alt="Nord Polar Night">

### Nord Snow Storm

macOS oneliner:

```` bash
wget https://raw.githubusercontent.com/johannesjo/super-productivity-themes/main/dist/nord-snow-storm/nord-snow-storm.css && mv nord-snow-storm.css styles.css && cp styles.css ~/Library/Application\ Support/superProductivity/
````

<img src="https://i.imgur.com/AeJGdPy.png" alt="Nord Snow Storm">

### Arc

macOS oneliner: 

```` bash
wget https://raw.githubusercontent.com/johannesjo/super-productivity-themes/main/dist/arc/arc.css && mv arc.css styles.css && cp styles.css ~/Library/Application\ Support/superProductivity/
````

<img src="https://i.imgur.com/WUk8k5G.png" alt="Arc">

## :question: How to add your theme

1. Fork this repository
2. Clone the forked repository to your computer
3. Run `npm install`
4. Copy some existing theme under src/ so that your theme will be in single folder like src/yourtheme (assuming the name of your theme is "yourtheme" in this example). Check out [dracula](https://github.com/johannesjo/super-productivity-themes/tree/main/src/dracula) for example. You can see the stylable elements inside [src/dark-base](https://github.com/johannesjo/super-productivity-themes/tree/main/src/dark-base) but if your theme does not contain any complex stuff like drop shadows you should only need one file to replace the [color variables](https://github.com/johannesjo/super-productivity-themes/blob/main/src/dark-base/helpers/_variables.scss).
5. Keep command `gulp` running while developing your theme or if you prefer simply task compiling instead of watching files, run `gulp styles` after your changes
6. When you are done, send a Pull Request and we'll add your theme if it's good!

## :floppy_disk: How to install a theme

After 6.1.2 you can use themes in Desktop version of the app. Follow [these instructions](https://github.com/johannesjo/super-productivity#custom-themes-desktop-only):

1. Choose your theme from this repository or develop your own
2. For example, if you'd like to use Dracula, copy [dist/dracula.css](https://github.com/johannesjo/super-productivity-themes/blob/main/dist/dracula/dracula.css) and save it as styles.css and move to your [user data folder](https://github.com/johannesjo/super-productivity#user-data-folder). (or use oneliners for macOS under the screenshots)
3. Start/restart your desktop app and you should see the theme in effect immediately!

## :globe_with_meridians: Testing themes

There are two ways to test themes and make changes.

### 1. Use the official app with developer tools (currently Mac only)

1. Download the [official release](https://github.com/johannesjo/super-productivity/releases)
2. Add your styles.css to app data by following [these instructions](#how-to-install-a-theme)
3. Open developer tools with F12 and make some notes

### 2. Use the official dev version

You can test your themes under the official super-productivity repository by doing the following:

1. `git clone -branch styles-dev https://github.com/ronilaukkarinen/super-productivity.git`
2. `cd super-productivity`
3. `npm install`
4. `npm install -g @angular/cli`
5. `ng serve`
6. Open a new Terminal window, navigate to project with cd command and run `npm start`
7. Go to src/styles.scss and import your styles
8. Use Chrome with Developer Tools or open devtools in mac app by pressing F12
9. Make your changes and commit them
10. Send a PR when you are ready!
