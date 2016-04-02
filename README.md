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
* color(label, id, value)
* checkbox(label, id)
* txt(label, id)
* file(label, id, name)
* image(label, id, name, width, height)
* select(label, id, value)

### head(name)

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

### color(label, id, value)

Вызов:
```jade
+color('Label name', 'main_color', '#fff')
```
Результат:
```html
<tr>
  <td>
    <label for="main_color">Label name</label>
  </td>
  <td>
    <input name="main_color" id="main_color" value="#fff" class="color"/>
  </td>
</tr>
```

### checkbox(label, id)

Вызов:
```jade
+checkbox('label name', 'main_checkbox')
```
Результат:
```html
<tr>
  <td>
    <label for="main_checkbox">label name</label>
  </td>
  <td>
    <input name="main_checkbox" id="main_checkbox" type="checkbox"/>
  </td>
</tr>
```

### txt(label, id)

Вызов:
```jade
+txt('label name', 'main_txt')
```
Результат:
```html
<tr>
  <td>
    <label for="main_txt">label name</label>
  </td>
  <td>
    <input name="main_txt" id="main_txt" type="text"/>
  </td>
</tr>
```

### file(label, id, name)

Вызов:
```jade
+file('Загрузить файл', 'main_file')
```
Результат:
```html
<tr>
  <td>
    <label for="main_file">Загрузить файл</label>
  </td>
  <td>
    <input name="main_file" id="main_file" type="file"/>
  </td>
</tr>
```

Вызов:
```jade
+file('Загрузить файл', 'main_file', 'main_file.txt')
```
Результат:
```html
<tr>
  <td>
    <label for="main_file">Загрузить файл</label>
  </td>
  <td>
    <input name="main_file.txt" id="main_file" type="file"/>
  </td>
</tr>
```

### image(label, id, name, width, height)

Вызов:
```jade
+image('Загрузить фото', 'main_photo', 'main_photo.png', '2000', '1000')
```
Результат:
```html
<tr>
  <td>
    <label for="main_photo">Загрузить фото</label>
  </td>
  <td>
    <input name="main_photo.png" id="main_photo" type="file" data-max-width="2000" data-max-height="1000"/>
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
