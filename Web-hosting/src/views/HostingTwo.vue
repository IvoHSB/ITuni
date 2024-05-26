<template>
    <navigation />

    <section id="shared-service">
        <div class="container">
            <h1>Споделен Хостинг</h1>
            <p>Нашата споделена хостинг услуга е идеална за лични уебсайтове, блогове и малки бизнеси. Тя предлага удобен и икономичен начин да стартирате онлайн присъствието си с надеждност и качество.</p>
            <p>С нашия споделен хостинг, вие получавате всички необходими инструменти и ресурси, за да създадете и управлявате своя уебсайт с лекота. Отличната поддръжка и множество функции ви помагат да се съсредоточите върху съдържанието и растежа на вашия сайт.</p>

            <div class="service-content">
                <div class="features">
                    <h2>Характеристики</h2>
                    <ul>
                        <li>Неограничен трафик</li>
                        <li>Лесен за използване контролен панел</li>
                        <li>Автоматични резервни копия</li>
                        <li>24/7 техническа поддръжка</li>
                        <li>Инсталиране с един клик</li>
                    </ul>
                </div>
                
                <div class="benefits">
                    <h2>Предимства</h2>
                    <ul>
                        <li>Идеален за малки уебсайтове и блогове</li>
                        <li>Ниска цена</li>
                        <li>Бързо и лесно стартиране</li>
                        <li>Гъвкави планове</li>
                        <li>Сигурност и надеждност</li>
                    </ul>
                </div>
            </div>
            <div class="price-and-button">
                <h2>Цена: 0 лв. на месец</h2>
                <a href="/" class="button">Изберете Споделен Хостинг</a>
            </div>
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
    background-color: #f9f9f9;
}
#shared-service {
    background-color: #fff;
    padding: 4rem 2rem;
    text-align: center;
}

#shared-service .container {
    max-width: 1200px;
    margin: 0 auto;
}

#shared-service h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
}

#shared-service p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.8;
    margin: 1rem 0;
}

.service-content {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
}

.features, .benefits {
    width: 45%;
    text-align: left;
}

#shared-service h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1rem;
}

.features ul, .benefits ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
}

.features ul li, .benefits ul li {
    background: #d1e7dd;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin: 0.5rem 0;
    font-size: 1rem;
    font-weight: 700;
    color: #0f5132;
}

.price-and-button {
    margin-top: 2rem;
}

.price-and-button h2 {
    font-size: 1.5rem;
    color: #00796b;
}

.price-and-button .button {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
    color: #fff;
    background-color: #00796b;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.price-and-button .button:hover {
    background-color: #005f4b;
}

</style>