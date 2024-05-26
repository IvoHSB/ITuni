<template>
    
    <navigation />

    <section id="partners">
        <h2>Нашите партньори</h2>
        <div class="partner-container">
            <div class="partner" @click="goAzure">
                <img src="../assets/images/azure.jpg" alt="Партньор 1">
                <h3>Microsoft Azure</h3>
                <p>Партньор 1 е водещ доставчик на уеб хостинг решения с повече от 10 години опит в индустрията.</p>
            </div>
            <div class="partner" @click="goKamatera">
                <img src="../assets/images/kamatera.jpg" alt="Партньор 2">
                <h3>Kamatera</h3>
                <p>Партньор 2 предлага надеждни и сигурни облачни услуги за бизнес клиенти по целия свят.</p>
            </div>
            <div class="partner" @click="goSSARM">
                <img src="../assets/images/ssarm.jfif" alt="Партньор 3">
                <h3>SSARM</h3>
                <p>Партньор 3 предоставя висококачествени мрежови решения и сървърни услуги на конкурентни цени.</p>
            </div>
            <div class="partner" @click="goTechnoLogica">
                <img src="../assets/images/technologica.png" alt="Партньор 4">
                <h3>Techno Logica</h3>
                <p>Партньор 4 предлага иновативни решения за сигурност и защита на данните за компании от всички размери.</p>
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
    },
    methods: {
        goAzure() {
            window.location.href = "https://azure.microsoft.com/en-us"
        },
        goKamatera() {
            window.location.href = "https://www.kamatera.com/"
        },
        goSSARM() {
            window.location.href = "https://ssarm.bg/"
        },
        goTechnoLogica() {
            window.location.href = "https://technologica.com/"
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

#partners {
    background-color: #fff;
    padding: 4rem 2rem;
    text-align: center;
}

#partners h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: #333;
}

.partner-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.partner {
    background: linear-gradient(135deg, #007BFF, #00D2FF);
    color: #fff;
    padding: 2rem;
    border-radius: 10px;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    cursor: pointer;
}

.partner img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
    border-radius: 5px;
}

.partner h3 {
    margin-top: 1rem;
    font-size: 1.5rem;
}

.partner p {
    margin: 1rem 0;
    font-size: 1rem;
}

.partner:hover {
    transform: translateY(-10px);
}

</style>