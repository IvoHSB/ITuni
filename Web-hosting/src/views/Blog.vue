<template>
    <navigation />

    <section id="blog">
        <h2>Блог</h2>
        <div class="blog-container">
            <div class="blog-posts">
                <div class="post">
                    <img src="../assets/images/hosting.jpg" height="40%" width="40%" alt="Пост 1 изображение">
                    <h3>Как да изберем най-добрия хостинг</h3>
                    <p>Изборът на правилния хостинг е критичен за успеха на вашия уебсайт. Научете как да направите
                        информирано решение...</p>
                    <RouterLink to="/blog/How-to-select-the-best-hosting" class="read-more">Прочети повече</RouterLink>
                </div>
                <div class="post">
                    <img src="../assets/images/speed.jpg" height="40%" width="40%" alt="Пост 2 изображение">
                    <h3>5 начина да подобрите скоростта на вашия сайт</h3>
                    <p>Бързият уебсайт е ключов за доброто потребителско изживяване и високи рангове в търсачките. Ето
                        как можете да ускорите вашия сайт...</p>
                    <RouterLink to="/blog/Five-ways-to-improve-your-site-speed" class="read-more">Прочети повече</RouterLink>
                </div>
                <div class="post">
                    <img src="../assets/images/web-security.jpg" height="40%" width="40%" alt="Пост 3 изображение">
                    <h3>Основни съвети за сигурност на уебсайта</h3>
                    <p>Сигурността на уебсайта е от съществено значение за защита на вашите данни и репутация. Открийте
                        основните мерки за сигурност...</p>
                    <RouterLink to="/blog/How-to-ensure-security-for-your-website" class="read-more">Прочети повече</RouterLink>
                </div>
            </div>
            <aside class="sidebar">
                <div class="search-box">
                    <input type="text" placeholder="Търсене...">
                    <button type="submit">Търси</button>
                </div>
                <div class="tags">
                    <h3>Тагове</h3>
                    <ul>
                        <li><a href="#">Хостинг</a></li>
                        <li><a href="#">Скорост</a></li>
                        <li><a href="#">Сигурност</a></li>
                        <li><a href="#">SEO</a></li>
                        <li><a href="#">Уеб дизайн</a></li>
                    </ul>
                </div>
                <div class="calendar">
                    <h3>Календар</h3>
                    <iframe src="https://calendar.google.com/calendar/embed?src=ivo03official%40gmail.com&ctz=Europe%2FSofia" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
                </div>
            </aside>
        </div>
    </section>

    <footerSection />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import navigation from '../components/navigation.vue';
import footerSection from '../components/footer.vue';

export default {

    components: {
        navigation: navigation,
        footerSection: footerSection
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
}

section {
    padding: 2rem;
}

#blog {
    background-color: #fff;
    padding: 4rem 2rem;
    text-align: center;
}

#blog h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.blog-container {
    display: flex;
    justify-content: space-between;
}

.blog-posts {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.post {
    background: #f0f0f0;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: left;
}

.post img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}

.post h3 {
    margin-top: 1rem;
}

.post p {
    margin: 1rem 0;
}

.read-more {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #0066ff;
    border: solid 1px #0066ff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 1rem;
    transition: all 0.3s;
}

.read-more:hover {
    background-color: #fff;
    color: #000;
    border: solid 1px #000;
}

.sidebar {
    flex: 1;
    margin-left: 2rem;
}

.search-box {
    display: flex;
    margin-bottom: 2rem;
}

.search-box input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
}

.search-box button {
    padding: 0.5rem;
    background-color: #f0f0f0;
    color: #000;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    transition: all 0.3s;
}

.search-box button:hover {
    background-color: #0066ff;
    color: #fff;
}

.tags {
    background: #f0f0f0;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.tags h3 {
    margin-bottom: 1rem;
}

.tags ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tags ul li {
    margin: 0;
}

.tags ul li a {
    display: inline-block;
    padding: 0.5rem;
    background-color: #777;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s;
}

.tags ul li a:hover {
    background-color: #0066ff;
    color: #fff;
}
.calendar {
    margin-top: 30px
}
</style>