## Programa Relacionamento RED by Dufry

---

### Rodando o Projeto

+ Certifique-se de ter [Jekyll](https://jekyllrb.com/) instalado em sua máquina.
+ Certifique-se de ter [gulp.js](https://gulpjs.com/) instalado globalmente em sua máquina.
+ Abra duas instâncias de terminal na pasta do projeto
+ Terminal 1 - `npm i && gulp`
+ Terminal 2 -`jekyll serve`

---

### Detalhes de desenvolvimento

+ O projeto usa stylus, mas não significa que deve deixar o CSS bagunçado. Utilize `{}`, `:` e `;`
+ O arquivo `_assets/styl/_definitions/__variables.styl` possui uma variável de debug para habilitar bordas e o media-helper
+ O arquivo `_assets/styl/_definitions/_mixins.styl` te dá uma boa base de como usar as medias queries. Leia mais em [rupture](https://github.com/jescalan/rupture). 
+ Se você rodar o jekyll, provavelmente o site vai funcionar pois estamos versionando os arquivos de CSS e JS. Verifique se o gulp está rodando caso suas alterações não funcionem.

---
