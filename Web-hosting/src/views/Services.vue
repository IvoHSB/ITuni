<template>
    <navigation />
    <section id="services">
        <h2>Нашите услуги</h2>
        <div class="intro">
            <p>Ние предлагаме разнообразие от хостинг услуги, които могат да отговорят на нуждите на всеки клиент.
                Нашите решения са надеждни, сигурни и осигуряват отлична производителност.</p>
            <p>С нашите хостинг услуги, можете да бъдете сигурни, че вашият уебсайт ще бъде винаги онлайн и ще работи
                бързо и сигурно. Ние предлагаме решения, подходящи за различни нужди и бюджети.</p>
        </div>
        <div class="service-container">
            <div class="service">
                <h3>Споделен хостинг</h3>
                <p>Идеален за малки уебсайтове и блогове, споделеният хостинг предлага отлична производителност на
                    достъпна цена.</p>
                <p>Цена: Безплатно</p>
                <div class="button-wrapper">
                    <RouterLink to="/services/Shared-hosting" class="service-button">Научете повече</RouterLink>
                </div>
            </div>
            <div class="service">
                <h3>VPS хостинг</h3>
                <p>За по-големи уебсайтове и онлайн магазини, VPS хостингът осигурява повече ресурси и контрол.</p>
                <p>Цена: 20лв. на месец</p>
                <div class="button-wrapper">
                    <RouterLink to="/services/VPS-hosting" class="service-button">Научете повече</RouterLink>
                </div>
            </div>
            <div class="service">
                <h3>Дедикиран хостинг</h3>
                <p>Предназначен за предприятия, които се нуждаят от пълен контрол върху своите сървъри, този тип хостинг
                    предлага максимална мощност и гъвкавост.</p>
                <p>Цена: 60лв. на месец</p>
                <div class="button-wrapper">
                    <RouterLink to="/services/Dedicated-hosting" class="service-button">Научете повече</RouterLink>
                </div>
            </div>
        </div>
        <div class="additional-info">
            <p>Нашите хостинг услуги са създадени, за да отговорят на нуждите на различни клиенти. Без значение дали сте
                малък бизнес, голяма корпорация или индивидуален потребител, ние имаме подходящо решение за вас. Нашите
                планове включват 24/7 поддръжка, гарантирана uptime и множество допълнителни функции, за да ви осигурим
                спокойствие и надеждност.</p>
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
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

body {
    line-height: 1.6;
    background-color: #f9f9f9;
}

section {
    padding: 2rem;
}

#services {
    background-color: #fff;
    padding: 4rem 2rem;
    text-align: center;
}

#services h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.intro {
    max-width: 800px;
    margin: 0 auto 2rem auto;
    text-align: center;
}

.service-container {
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 4rem;
}

.service {
    background: #f0f0f0;
    padding: 1.5rem;
    border-radius: 10px;
    border: double 4px #0066ff;
    max-width: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s;
}

.service:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

.service h3 {
    margin-top: 1rem;
    color: #333;
}

.service p {
    margin: 1rem 0;
}

.button-wrapper {
    margin-top: auto;
}

.service-button {
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

.service-button:hover {
    background-color: #fff;
    color: #000;
    border: solid 1px #000;
}

.additional-info {
    max-width: 800px;
    margin: 4rem auto 0 auto;
    text-align: center;
    background: #e0e0e0;
    padding: 1rem;
    border-radius: 10px;
}
</style>