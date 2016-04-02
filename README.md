# Jade mixins для генерации настроек темы InSales

## Установка

Для работы нужен установленный Node.js и NPM.

- [Дистрибутив Node.js](https://nodejs.org/en/download/)
- [Установка NPM](https://habrahabr.ru/post/133363/#npm_install)

Если всё установлено, скачиваем или клонируем данный проект к себе на компьютер.

Далее в командной строке находим папку проекта и выпорлняем команду:

```
npm install
```

NPM установит в папку с проектом нужные пакеты. После чего в командной строке можно запустить Gulp:

```
gulp
```

## Список миксинов

* head(name)
* color(labels, id, value)
* checkbox(labels, id)
* txt(labels, id)
* file(labels, id, name)
* image(labels, id, name, width, height)
* select(labels, id, value)

### head(name)

Заголовок принимает строку.

Вызов:
```jade
+head('Заголовок')
```
Результат:
```html
<tr>
  <td colspan="2">
    <h2>Заголовок</h2>
  </td>
</tr>
```


## Ссылки

### Node.js

* [Дистрибутив Node.js](https://nodejs.org/en/download/)
* [Установка NPM](https://habrahabr.ru/post/133363/#npm_install)

### Gulp

* [Сайт Gulp.js](http://gulpjs.com/)
* [Базовый курс по Gulp](http://loftblog.ru/material/gulp-js-rabotaem-s-css-concat-minify-rename-notify-watch-dest/)

### Jade

* [Сайт шаблонизатора](http://jade-lang.com/)
* [О Jade на русском](http://jsman.ru/jade/)
