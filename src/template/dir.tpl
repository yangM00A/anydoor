<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <style>
        a {
            display: block;
            font-size: 18px;
        }
    </style>
</head>

<body>
    {{#each files}}
        <a href="{{../dir}}/{{this}}">{{this}}</a>
    {{/each}}
</body>

</html>