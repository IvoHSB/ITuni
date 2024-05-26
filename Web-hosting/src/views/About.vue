<template>

    <navigation />

    <section id="about">
        <h2>За нас</h2>
        <div class="about-content">
            <div class="about-text">
                <div class="about-section">
                    <h3>Нашата история</h3>
                    <p>Web Hosting започнаха своя път през 2010 година с ясната мисия да предоставят качествени и
                        надеждни хостинг решения за всички видове уебсайтове. Оттогава ние не спираме да се развиваме и
                        усъвършенстваме, за да предложим най-доброто на нашите клиенти.</p>
                </div>
                <div class="about-section">
                    <h3>Нашата мисия</h3>
                    <p>Нашата основна цел е да осигурим стабилна и сигурна хостинг среда за всички наши клиенти.
                        Съсредоточени сме върху високото качество на услугите и непрекъснатото им подобряване. Ние
                        разбираме, че надеждният хостинг е от ключово значение за успеха на всеки онлайн проект.</p>
                </div>
                <div class="about-section">
                    <h3>Нашите услуги</h3>
                    <p>Ние предлагаме разнообразие от хостинг услуги, които могат да отговорят на нуждите на всеки
                        клиент:</p>
                    <ul>
                        <li><strong>Споделен хостинг:</strong> Идеален за малки уебсайтове и блогове, споделеният
                            хостинг предлага отлична производителност на достъпна цена.</li>
                        <li><strong>VPS хостинг:</strong> За по-големи уебсайтове и онлайн магазини, VPS хостингът
                            осигурява повече ресурси и контрол.</li>
                        <li><strong>Дедикиран хостинг:</strong> Предназначен за предприятия, които се нуждаят от пълен
                            контрол върху своите сървъри, този тип хостинг предлага максимална мощност и гъвкавост.</li>
                    </ul>
                </div>
                <div class="about-section">
                    <h3>Защо да изберете нас?</h3>
                    <p>С нас можете да бъдете сигурни, че вашият уебсайт ще работи гладко и надеждно. Ето някои от
                        причините да ни се доверите:</p>
                    <ul>
                        <li>Висока скорост и производителност</li>
                        <li>24/7 поддръжка</li>
                        <li>Сигурност и защита на данните</li>
                        <li>Гъвкави планове, които могат да се адаптират към вашите нужди</li>
                    </ul>
                </div>
            </div>
            <div class="about-images">
                <img src="../assets/images/team.jfif" alt="Нашият екип">
                <img src="../assets/images/office.webp" alt="Нашият офис">
            </div>
        </div>
    </section>

    <footerSection />
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

section {
    padding: 2rem;
}

section ul {
    list-style-type: none;
}

#about {
    background-color: #fff;
    padding: 4rem 2rem;
    text-align: center;
}

#about h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.about-text {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1200px;
    margin-bottom: 2rem;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.about-section {
    flex: 1 1 45%;
    min-width: 300px;
    margin: 1rem;
    padding: 1rem;
    border: double 4px #0066ff;
}

.about-images {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.about-images img {
    max-width: 100%;
    width: 30%;
    min-width: 200px;
    height: auto;
    border-radius: 10px;
    flex: 45%;
}

.about-divider {
    border: none;
    height: 2px;
    background-color: #ccc;
    margin: 1rem 0;
}
</style>
