<template>

<body>
    
    <navigation />

    <section id="home">
        <h1>Добре дошли в Web Hosting</h1>
        <p>Ние предлагаме висококачествени хостинг решения за вашия уебсайт. С нашите услуги можете да се доверите, че вашият сайт ще работи гладко и надеждно, независимо от трафика. Нашите решения са подходящи както за малки блогове, така и за големи корпоративни сайтове.</p>
        <RouterLink to="/services" class="btn">Избери Хостинг</RouterLink>
    </section>

    <section id="services">
        <div class="service-content">
            <div class="service-text">
                <h2>Нашите Услуги</h2>
                <p>Ние предлагаме разнообразни хостинг услуги, които могат да отговорят на нуждите на всеки клиент. Независимо дали търсите споделен хостинг за малък уебсайт или мощен дедикиран сървър за вашия бизнес, ние имаме решение за вас.</p>
                <p>Нашите услуги включват:</p>
                <ul>
                    <li>Споделен хостинг – идеален за малки уебсайтове и блогове</li>
                    <li>VPS хостинг – за по-големи уебсайтове и онлайн магазини</li>
                    <li>Дедикиран хостинг – за предприятия, които се нуждаят от пълен контрол върху своите сървъри</li>
                </ul>
                <RouterLink to="/about" class="btn about-btn">Научете повече за нас</RouterLink>
            </div>
            <div class="service-image">
                <img src="../assets/images/services.jpg" alt="Нашите услуги">
            </div>
        </div>
    </section>

    <footerSection />
    
</body>

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
    text-align: center;
}

section#home {
    position: relative;
    background: url('../assets/images/homebackground.jpg') no-repeat center center/cover;
    color: #fff;
    padding: 4rem 2rem;
    height: 40%;
}

section#home::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* полупрозрачен черен слой */
    z-index: 1;
}

section#home h1, section#home p {
    position: relative;
    font-size: 32px;
    z-index: 2;
    margin-bottom: 40px;
}

section#home p {
    font-size: 24px;
    padding: 0 10%;
}

section#home .btn {
    position: relative;
    z-index: 2;
    display: inline-block;
    margin-top: 2%;
    padding: 1.5rem 4rem;
    background: #0066ff;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    transition: all 0.3s;
}

section#home .btn:hover {
    background: #fffafa;
    color: #000000;
}


section#services {
    background: #f4f4f4;
    padding: 4rem 2rem;
    text-align: left;
}

section#services ul {
    list-style-type: disc;
    margin-left: 30px;
}

.service-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 40px;
}

.service-text {
    flex: 1;
    min-width: 300px;
    max-width: 600px;
    margin-right: 2rem;
}

.service-image {
    flex: 1;
    min-width: 300px;
}

.service-image img {
    max-width: 100%;
    height: auto;
    max-height: 40%;
    border-radius: 10px;
}

.about-btn {
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 20px;
    padding: 0.5rem 1rem;
    background: #0066ff;
    border: solid 1px #0066ff;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    transition: all 0.3s;
}

.about-btn:hover {
    background-color: #fff;
    color: #000;
    border: solid 1px #000;
}

</style>