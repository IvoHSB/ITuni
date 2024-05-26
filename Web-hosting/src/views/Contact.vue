<template>

    <head>
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <navigation />

    <section id="contact">
        <h2>Контакти</h2>
        <div class="contact-container">
            <div class="contact-form">
                <h3>Свържете се с нас</h3>
                <form action="#" method="post" @submit="submitForm">
                    <label for="name">Име:</label>
                    <input type="text" id="name" name="name" v-model="name" required>

                    <label for="email">Имейл:</label>
                    <input type="email" id="email" name="email" v-model="email" required>

                    <label for="message">Съобщение:</label>
                    <textarea id="message" name="message" rows="5" v-model="content" required></textarea>

                    <button type="submit">Изпрати</button>
                </form>
            </div>
            <div class="contact-map">
                <h3>Намерете ни на картата</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094554!2d144.95373531576715!3d-37.816279442021506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f2c3df%3A0x5045675218ce6e0!2sVictoria%20Harbour%20Promenade%2C%20Docklands%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sus!4v1622836038653!5m2!1sen!2sus"
                    width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        <div class="social-media">
            <h3>Последвайте ни</h3>
            <a href="https://www.facebook.com" target="_blank" class="fa fa-facebook"></a>
            <a href="https://www.instagram.com" target="_blank" class="fa fa-instagram"></a>
            <a href="https://www.twitter.com" target="_blank" class="fa fa-twitter"></a>
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
            email: '',
            content: ''
        }
    },

    components: {
        navigation: navigation,
        footerSection: footerSection
    },

    methods: {
        submitForm () {
            this.name = '';
            this.email = '';
            this.content = '';

            this.$router.push({path: '/'});
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

#contact {
    background-color: #fff;
    padding: 4rem 2rem;
    text-align: center;
}

#contact h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.contact-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
}

.contact-form,
.contact-map {
    flex: 1 1 45%;
    background: #f0f0f0;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contact-form h3,
.contact-map h3 {
    margin-bottom: 1rem;
}

.contact-form form {
    display: flex;
    flex-direction: column;
}

.contact-form label {
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.contact-form input,
.contact-form textarea {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.contact-form button {
    padding: 0.5rem 1rem;
    background-color: #0066ff;
    border: solid 1px #0066ff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
}

.contact-form button:hover {
    background-color: #fff;
    color: #000;
    border: solid 1px #000;
}

.social-media {
    margin-top: 2rem;
    text-align: center;
}

.social-media h3 {
    margin-bottom: 1rem;
}

.social-media a {
    color: #333;
    font-size: 2rem;
    margin: 0 1rem;
    text-decoration: none;
}

.social-media a:hover {
    color: #0066ff;
}
</style>