<template>
    <navigation />

    <section id="blog-post">
        <div class="container">
            <h1>5 начина да подобрите скоростта на вашия сайт</h1>
            <p class="meta">Публикувано на: 26 май 2024 | Автор: Мария Петрова</p>
            <article>
                <p>Скоростта на зареждане на вашия сайт е критично важна за потребителското изживяване и SEO
                    оптимизацията.
                    Бавните сайтове могат да отблъснат посетителите и да понижат вашето място в резултатите от
                    търсенето. В
                    тази статия ще ви покажем 5 ефективни начина да подобрите скоростта на вашия сайт.</p>

                <h2>1. Оптимизирайте изображенията</h2>
                <p>Големите изображения могат значително да забавят зареждането на вашия сайт. Уверете се, че използвате
                    компресирани изображения без загуба на качество и подходящи формати като JPEG и PNG. Можете също
                    така да
                    използвате инструменти за автоматична оптимизация на изображенията.</p>

                <h2>2. Използвайте CDN (Content Delivery Network)</h2>
                <p>CDN разпределя съдържанието на вашия сайт през различни географски локации, което позволява по-бързо
                    зареждане за потребителите, независимо къде се намират. Това също така намалява натоварването на
                    вашия
                    основен сървър.</p>

                <h2>3. Минимизирайте CSS и JavaScript файловете</h2>
                <p>Големите CSS и JavaScript файлове могат да забавят вашия сайт. Комбинирайте и минимизирайте тези
                    файлове,
                    за да намалите техния размер и броя на HTTP заявките. Инструменти като UglifyJS и CSSNano могат да
                    ви
                    помогнат в този процес.</p>

                <h2>4. Активирайте кеширането на браузъра</h2>
                <p>Кеширането на браузъра позволява съхраняването на статични ресурси на компютъра на потребителя, което
                    значително намалява времето за зареждане при повторни посещения. Конфигурирайте вашия сървър да
                    задава
                    правилни кеширащи заглавия.</p>

                <h2>5. Изберете бърз хостинг доставчик</h2>
                <p>Вашият хостинг доставчик играе ключова роля за скоростта на вашия сайт. Уверете се, че избирате
                    доставчик
                    с добри показатели за производителност, който предлага SSD хостинг и високоскоростни сървъри.</p>
            </article>

            <section id="comments">
                <h2>Коментари</h2>
                <div class="comment" v-for="comment in comments">
                    <p><strong>{{ comment.name }}</strong>: {{ comment.content }}</p>
                </div>
                
                <form action="#" method="post" class="comment-form">
                    <label for="nameInput">Име:</label>
                    <input id="nameInput" name="name" type="text" v-model="name" required></input>
                    <label for="comment">Оставете коментар:</label>
                    <textarea id="comment" name="comment" rows="4" v-model="content" required></textarea>
                    <button @click.prevent="addComment">Изпрати</button>
                </form>
            </section>
        </div>
    </section>

    <footerSection />

</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import navigation from '../components/navigation.vue';
import footerSection from '../components/footer.vue';

export default {

data() {
    return {
        name: '',
        content: '',
        comments: [
            {name: 'Иван Иванов', content: 'Отлични съвети! Оптимизацията на изображенията наистина прави разлика.'},
            {name: 'Петя Георгиева', content: 'Благодарности за полезната информация!'},
        ]
    }
},

components: {
    navigation: navigation,
    footerSection: footerSection
},

methods: {
    addComment() {
        this.comments.push({name: this.name, content: this.content});
        this.name = '';
        this.content = '';
    }
}

}

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f9f9f9;
}


section {
    padding: 2rem;
}

#blog-post {
    background-color: #fff;
    padding: 4rem 2rem;
    text-align: left;
}

#blog-post .container {
    max-width: 800px;
    margin: 0 auto;
}

#blog-post h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
}

#blog-post .meta {
    font-size: 0.9rem;
    color: #777;
    margin-bottom: 2rem;
}

#blog-post article h2 {
    font-size: 1.5rem;
    color: #333;
    margin-top: 1.5rem;
}

#blog-post article p {
    font-size: 1rem;
    color: #555;
    line-height: 1.8;
    margin: 1rem 0;
}

#comments {
    margin-top: 2rem;
}

#comments h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
}

#comments .comment {
    background: #f0f0f0;
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
}

#comments .comment p {
    margin: 0;
    color: #555;
}

.comment-form {
    margin-top: 1rem;
}

.comment-form label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.comment-form textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
}

.comment-form input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
}

.comment-form button {
    padding: 0.5rem 1rem;
    background-color: #0066ff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.comment-form button:hover {
    background-color: #0056cc;
}
</style>