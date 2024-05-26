<template>
    <header>
        <nav>
            <ul>
                <li><RouterLink to="/">Начало</RouterLink></li>
                <li><RouterLink to="/services">Услуги</RouterLink></li>
                <li><RouterLink to="/about">За нас</RouterLink></li>
                <li><RouterLink to="/blog">Блог</RouterLink></li>
                <li><RouterLink to="/partners">Партньори</RouterLink></li>
                <li><RouterLink to="/contact">Контакт</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';

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

header {
    background: #333;
    color: #fff;
    padding: 1rem 0;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 1rem;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-family: Arial, sans-serif;
}

nav ul li a:hover {
    text-decoration: underline;
}
</style>