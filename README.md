# Jade mixins для генерации настроек темы InSales

## Установка

Для работы нужен установленный Node.js.

- [Дистрибутив Node.js](https://nodejs.org/en/download/)

Если Node.js установлен, скачиваем или клонируем данный проект к себе на компьютер.

Далее в командной строке находим папку проекта, например:

```
cd c:\settings
```

Далее выполняем команду:

```
npm install
```

NPM установит в папку с проектом нужные пакеты.

После чего в командной строке можно запустить Gulp:

```
gulp
```

Если вы пользуетесь Sublime Text и не хотите вникать в Gulp.js 

Можно установить [пакет компилятора](https://packagecontrol.io/packages/Jade%20Build) в свой редактор, но установка node.js обязательна, так же обязательно установить Jade через NPM глобально.

```
* Windows: `npm install jade --global`

* OS X: `sudo npm install jade --global`
```

## Работа с проектом

Jade фалы для компиляции лежат в папке **./set/** и компилируются в папку **./public/**.

Миксины находятся в папке **./set/part/** и подключаются в файлы из папки **./set/** через **include ./part/mixin.jade**

Пример написания settings.html:

Jade

```jade
include ./part/mixin.jade
fieldset
  legend Логотип
  table
    +image('Загрузить логотип', 'logo', 'logo.png', '500', '300')

```

HTML
```html
<fieldset>
  <legend>Логотип</legend>
  <table>
    <tr>
      <td>
        <label for="logo">Загрузить логотип</label>
      </td>
      <td>
        <input name="logo.png" id="logo" type="file" data-max-width="500" data-max-height="300"/>
      </td>
    </tr>
  </table>
</fieldset>
```

Больше примеров работы с миксинами можно посмотреть в файле **./set/test.jade**.

## Список миксинов

* head(name)
* color(label, id, value)
* checkbox(label, id)
* radio(label, id, value, name)
* txt(label, id)
* file(label, id, name)
* image(label, id, name, width, height)
* select(label, id, value, groups)

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

### radio(label, id, value, name)

Вызов:
```jade
+radio('Main label 1', 'main_label_1', '1', 'main_label')
+radio('Main label 2', 'main_label_2', '2', 'main_label')
```
Результат:
```html
<tr>
  <td>
    <label for="main_label_1"></label>
  </td>
  <td>
    <input name="main_label" id="main_label_1" type="radio" value="1"/>
  </td>
</tr>
<tr>
  <td>
    <label for="main_label_2"></label>
  </td>
  <td>
    <input name="main_label" id="main_label_2" type="radio" value="2"/>
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


### select(label, id, value, groups)

Вызов:
```jade
+select('Положение', 'background-attachment',
        {
          "Стандарт": {
            "По умолчанию": "no-repeat",
            "Замостить": "repeat", 
            "Горизонтально": "repeat-x", 
            "Вертикально": "repeat-y"
          },
          "С заполнением": {
            "С пробеллами между фото":"space", 
            "round": "Растянуть фото с заполнением"
          }
        }, true)
```
Результат:
```html
<tr>
  <td>
    <label for="background-attachment">Положение</label>
  </td>
  <td>
    <select name="background-attachment" id="background-attachment">
      <optgroup label="Стандарт">
        <option value="no-repeat">По умолчанию</option>
        <option value="repeat">Замостить</option>
        <option value="repeat-x">Горизонтально</option>
        <option value="repeat-y">Вертикально</option>
      </optgroup>
      <optgroup label="С заполнением">
        <option value="space">С пробеллами между фото</option>
        <option value="Растянуть фото с заполнением">round</option>
      </optgroup>
    </select>
  </td>
</tr>
```

## Ссылки

### Node.js

* [Дистрибутив Node.js](https://nodejs.org/en/download/)

### Gulp

* [Сайт Gulp.js](http://gulpjs.com/)
* [Базовый курс по Gulp](http://loftblog.ru/material/gulp-js-rabotaem-s-css-concat-minify-rename-notify-watch-dest/)
* [Сринкаст по Gulp](https://learn.javascript.ru/screencast/gulp)

### Jade

* [Установка Jade компилятора в Sublime Text](https://packagecontrol.io/packages/Jade%20Build)
* [Сайт препроцессора](http://jade-lang.com/)
* [О Jade на русском](http://jsman.ru/jade/)
* [Небольшой code-style по Jade](https://github.com/CSSSR/sputnik/blob/master/Jade.md)
