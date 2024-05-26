<template>
    <navigation />

      <section id="blog-post">
        <div class="container">
            <h1>Как да изберем най-добрия хостинг доставчик?</h1>
            <p class="meta">Публикувано на: 26 май 2024 | Автор: Иван Иванов</p>
            <article>
                <p>Изборът на хостинг доставчик може да бъде труден процес, особено ако не сте запознати с всички опции и услуги, които се предлагат на пазара. В тази статия ще разгледаме някои от основните фактори, които трябва да имате предвид при избора на хостинг доставчик.</p>
                <h2>Скорост и производителност</h2>
                <p>Един от най-важните аспекти на хостинга е скоростта и производителността на сървърите. Бавният сайт може да отблъсне посетителите и да навреди на SEO ранкинга ви. Проверете дали хостинг доставчикът предлага SSD дискове и CDN услуги за по-бързо зареждане на страниците.</p>
                <h2>Сигурност</h2>
                <p>Сигурността е друг важен фактор. Уверете се, че доставчикът предлага SSL сертификати, защита от DDoS атаки и редовни бекъпи на данните ви. Някои хостинг компании предлагат и допълнителни функции за сигурност като двуфакторна автентикация.</p>
                <h2>Поддръжка</h2>
                <p>Добрата техническа поддръжка е от съществено значение. Проверете дали хостинг доставчикът предлага 24/7 поддръжка и какви са каналите за комуникация - чат, телефон или имейл.</p>
                <h2>Цена</h2>
                <p>Цената също е важен фактор, но не трябва да бъде основният ви критерий. Често по-евтините планове предлагат ограничени ресурси и функции. Преценете какво ви е необходимо и изберете план, който най-добре отговаря на нуждите ви.</p>
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
                {name: 'Мария Петрова', content: 'Много полезна статия, благодаря!'},
                {name: 'Георги Георгиев', content: 'Съгласен съм, скоростта наистина е ключова!'},
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