<template>
    <navigation />

    <section id="blog-post">
        <div class="container">
            <h1>Как да осигурите сигурност за вашия уебсайт</h1>
            <p class="meta">Публикувано на: 26 май 2024 | Автор: Георги Георгиев</p>
            <article>
                <p>Сигурността на вашия уебсайт е от съществено значение за защитата на данните на вашите потребители и предотвратяването на атаки. В тази статия ще разгледаме няколко важни стъпки, които можете да предприемете, за да осигурите сигурността на вашия уебсайт.</p>
                
                <h2>1. Използвайте SSL сертификат</h2>
                <p>SSL сертификатът криптира данните, които се предават между вашия уебсайт и потребителите. Това е основна мярка за сигурност, която не само защитава данните, но и подобрява доверието на потребителите във вашия сайт.</p>
                
                <h2>2. Поддържайте софтуера си актуален</h2>
                <p>Уверете се, че всички компоненти на вашия уебсайт, включително CMS, плъгини и теми, са актуални. Всяка нова версия обикновено съдържа поправки на уязвимости, които могат да бъдат използвани от хакерите.</p>
                
                <h2>3. Използвайте силни пароли</h2>
                <p>Силните пароли са от съществено значение за защитата на вашия уебсайт. Използвайте комбинация от букви, цифри и специални символи и избягвайте очевидни пароли. Препоръчително е да използвате и мениджър на пароли.</p>
                
                <h2>4. Редовно правете бекъпи</h2>
                <p>Редовните бекъпи на вашия уебсайт гарантират, че можете да възстановите данните си в случай на атака или технически проблем. Съхранявайте бекъпите на различни места, за да осигурите допълнителна защита.</p>
                
                <h2>5. Мониторинг и сканиране за зловреден софтуер</h2>
                <p>Използвайте инструменти за мониторинг и сканиране на вашия уебсайт за зловреден софтуер. Това ще ви помогне да откриете и премахнете потенциални заплахи преди те да причинят сериозни проблеми.</p>
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
            {name: 'Петър Петров', content: 'Много полезни съвети! Благодаря!'},
            {name: 'Анна Иванова', content: 'Използването на SSL сертификат е задължително за всеки сайт.'},
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