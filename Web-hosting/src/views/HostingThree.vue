<template>
    <navigation />

    <section id="dedicated-service">
        <div class="container">
            <h1>Дедикиран Хостинг</h1>
            <p>Нашите дедикирани хостинг услуги предлагат най-високо ниво на производителност, сигурност и контрол за вашите уеб проекти. Подходящи са за големи уебсайтове и приложения, които изискват гъвкавост и ресурси на високо ниво.</p>
            <p>С дедикиран хостинг, вие имате пълна свобода и контрол върху вашия сървър. Получавате допълнителни хардуерни ресурси и ексклузивен достъп до пълната мощ на сървъра.</p>

            <div class="service-content">
                <div class="features">
                    <h2>Характеристики</h2>
                    <ul>
                        <li>Пълна ресурсна свобода</li>
                        <li>Неограничен банджуид</li>
                        <li>Потребителски настройки</li>
                        <li>Поддръжка на ниво</li>
                        <li>Допълнителна сигурност</li>
                    </ul>
                </div>
                
                <div class="benefits">
                    <h2>Предимства</h2>
                    <ul>
                        <li>Идеален за големи уебсайтове и приложения</li>
                        <li>Пълна контрол на сървъра</li>
                        <li>Гъвкави опции за конфигурация</li>
                        <li>Надежност и сигурност на високо ниво</li>
                    </ul>
                </div>
            </div>

            <div class="price-and-button">
                <h2>Цена: 60 лв. на месец</h2>
                <a href="subscribe.html" class="button">Изберете Дедикиран Хостинг</a>
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
#dedicated-service {
    background-color: #fff;
    padding: 4rem 2rem;
    text-align: center;
}

#dedicated-service .container {
    max-width: 1200px;
    margin: 0 auto;
}

#dedicated-service h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
}

#dedicated-service p {
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

#dedicated-service h2 {
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