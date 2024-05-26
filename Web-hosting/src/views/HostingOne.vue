<template>
    <navigation />

    <section id="vps-service">
        <div class="container">
            <h1>VPS Хостинг</h1>
            <p>Нашата VPS хостинг услуга предлага мощност и гъвкавост за вашите онлайн проекти. Съчетайте предимствата на споделен и отделен хостинг за оптимална производителност и сигурност.</p>
            <p>С VPS хостинг, вашият сайт ще получи гарантирани ресурси, висока производителност и пълен контрол. Нашите VPS планове са идеални за растящи уебсайтове, онлайн магазини и приложения, които изискват стабилност и сигурност.</p>

            <div class="service-content">
                <div class="features">
                    <h2>Характеристики</h2>
                    <ul>
                        <li>Гарантирани ресурси</li>
                        <li>Пълна root достъп</li>
                        <li>SSD дискове</li>
                        <li>24/7 мониторинг и поддръжка</li>
                        <li>Лесна скалируемост</li>
                    </ul>
                </div>
                
                <div class="benefits">
                    <h2>Предимства</h2>
                    <ul>
                        <li>Висока производителност и надеждност</li>
                        <li>Пълна контрол над вашия сървър</li>
                        <li>Гъвкави планове и лесно разширяване</li>
                        <li>Идеален за растящи уебсайтове и приложения</li>
                    </ul>
                </div>
            </div>
            <div class="price-and-button">
                <h2>Цена: 20 лв. на месец</h2>
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
#vps-service {
    background-color: #fff;
    padding: 4rem 2rem;
    text-align: center;
}

#vps-service .container {
    max-width: 1200px;
    margin: 0 auto;
}

#vps-service h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
}

#vps-service p {
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

#vps-service h2 {
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
    background: #e0f7fa;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin: 0.5rem 0;
    font-size: 1rem;
    font-weight: 700;
    color: #00796b;
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