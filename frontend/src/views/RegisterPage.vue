<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const repeatPassword = ref('')
const showPassword = ref(false)
const showRepeatPassword = ref(false)
const error = ref('')
const loading = ref(false)

const register = async () => {
    error.value = ''

    if (
        !firstName.value ||
        !lastName.value ||
        !email.value ||
        !phone.value ||
        !password.value ||
        !repeatPassword.value
    ) {
        error.value = 'Заполните все поля'
        return
    }

    if (password.value !== repeatPassword.value) {
        error.value = 'Пароли не совпадают'
        return
    }

    if (password.value.length < 6) {
        error.value = 'Пароль должен содержать минимум 6 символов'
        return
    }

    loading.value = true

    try {
        // сюда подключишь свой axios запрос регистрации
        // await axios.post('http://localhost:5178/auth/register', {
        //     firstName: firstName.value,
        //     lastName: lastName.value,
        //     email: email.value,
        //     phone: phone.value,
        //     password: password.value
        // })

        router.push('/login')
    } catch (err) {
        console.error(err)
        error.value = 'Не удалось создать аккаунт'
    } finally {
        loading.value = false
    }
}

const goLogin = () => {
    router.push('/login')
}

const goHome = () => {
    router.push('/')
}
</script>

<template>
    <div class="auth-page">
        <div class="auth-background"></div>

        <header class="auth-header">
            <button class="logo" @click="goHome">
                <span class="logo-mark">➤</span>
                <span class="logo-name">HEADMAN</span>
                <span class="logo-subtitle">СТИЛЬ · УХОД · СТРИЖКИ</span>
            </button>
        </header>

        <main class="auth-main">
            <section class="auth-card">
                <div class="auth-heading">
                    <span class="eyebrow">HEADMAN</span>
                    <h1>Создать аккаунт</h1>
                    <p>Заполните данные, чтобы зарегистрироваться.</p>
                </div>

                <form class="auth-form" @submit.prevent="register">
                    <div class="name-fields">
                        <div class="field">
                            <label for="firstName">Имя</label>
                            <input
                                id="firstName"
                                v-model="firstName"
                                type="text"
                                placeholder="Иван"
                                autocomplete="given-name"
                            >
                        </div>

                        <div class="field">
                            <label for="lastName">Фамилия</label>
                            <input
                                id="lastName"
                                v-model="lastName"
                                type="text"
                                placeholder="Иванов"
                                autocomplete="family-name"
                            >
                        </div>
                    </div>

                    <div class="field">
                        <label for="email">Email</label>
                        <input
                            id="email"
                            v-model="email"
                            type="email"
                            placeholder="example@mail.com"
                            autocomplete="email"
                        >
                    </div>

                    <div class="field">
                        <label for="phone">Телефон</label>
                        <input
                            id="phone"
                            v-model="phone"
                            type="tel"
                            placeholder="+7 900 000 00 00"
                            autocomplete="tel"
                        >
                    </div>

                    <div class="field">
                        <label for="password">Пароль</label>

                        <div class="password-field">
                            <input
                                id="password"
                                v-model="password"
                                :type="showPassword ? 'text' : 'password'"
                                placeholder="Минимум 6 символов"
                                autocomplete="new-password"
                            >

                            <button
                                type="button"
                                class="password-toggle"
                                @click="showPassword = !showPassword"
                            >
                                {{ showPassword ? 'Скрыть' : 'Показать' }}
                            </button>
                        </div>
                    </div>

                    <div class="field">
                        <label for="repeatPassword">Повторите пароль</label>

                        <div class="password-field">
                            <input
                                id="repeatPassword"
                                v-model="repeatPassword"
                                :type="showRepeatPassword ? 'text' : 'password'"
                                placeholder="Введите пароль ещё раз"
                                autocomplete="new-password"
                            >

                            <button
                                type="button"
                                class="password-toggle"
                                @click="showRepeatPassword = !showRepeatPassword"
                            >
                                {{ showRepeatPassword ? 'Скрыть' : 'Показать' }}
                            </button>
                        </div>
                    </div>

                    <div v-if="error" class="error">
                        {{ error }}
                    </div>

                    <button
                        class="submit-button"
                        type="submit"
                        :disabled="loading"
                    >
                        {{ loading ? 'Создание...' : 'Создать аккаунт' }}
                    </button>
                </form>

                <div class="auth-bottom">
                    <span>Уже есть аккаунт?</span>
                    <button type="button" @click="goLogin">
                        Войти
                    </button>
                </div>
            </section>
        </main>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

.auth-page {
    min-height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    background: #f7f5ef;
    color: #243126;
    font-family: Arial, Helvetica, sans-serif;
}

.auth-background {
    position: absolute;
    width: 520px;
    height: 520px;
    top: -250px;
    right: -150px;
    border-radius: 50%;
    background: rgba(108, 125, 91, 0.08);
}

.auth-header {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 30px 52px;
}

.logo {
    border: 0;
    background: transparent;
    padding: 0;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;
    height: 46px;
    color: #202321;
}

.logo-mark {
    font-size: 27px;
    margin-right: 9px;
    transform: rotate(-25deg);
    display: inline-block;
}

.logo-name {
    font-size: 30px;
    font-weight: 500;
    letter-spacing: -1.5px;
    line-height: 1;
}

.logo-subtitle {
    position: absolute;
    left: 58px;
    bottom: -2px;
    white-space: nowrap;
    font-size: 8px;
    letter-spacing: 2px;
    color: #70756d;
}

.auth-main {
    position: relative;
    z-index: 1;
    min-height: calc(100vh - 106px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 24px 70px;
}

.auth-card {
    width: 100%;
    max-width: 560px;
    padding: 46px 50px 42px;
    background: rgba(255, 254, 250, 0.94);
    border: 1px solid #ddd9ce;
    border-radius: 18px;
    box-shadow: 0 20px 60px rgba(45, 48, 41, 0.07);
    animation: cardIn 0.55s ease both;
}

.auth-heading {
    margin-bottom: 32px;
}

.eyebrow {
    display: block;
    margin-bottom: 12px;
    color: #b56d50;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1.5px;
}

.auth-heading h1 {
    margin: 0 0 10px;
    font-size: 34px;
    line-height: 1.1;
    font-weight: 500;
    letter-spacing: -1.3px;
    color: #263127;
}

.auth-heading p {
    margin: 0;
    color: #777c74;
    font-size: 14px;
    line-height: 1.6;
}

.auth-form {
    display: flex;
    flex-direction: column;
    gap: 19px;
}

.name-fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.field label {
    color: #30372f;
    font-size: 13px;
    font-weight: 600;
}

.field input {
    width: 100%;
    height: 50px;
    padding: 0 15px;
    border: 1px solid #d8d4c9;
    border-radius: 9px;
    outline: none;
    background: #fffdf9;
    color: #293029;
    font-family: inherit;
    font-size: 14px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.field input::placeholder {
    color: #aaa9a2;
}

.field input:focus {
    border-color: #748264;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(108, 125, 91, 0.1);
}

.password-field {
    position: relative;
}

.password-field input {
    padding-right: 85px;
}

.password-toggle {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    background: transparent;
    color: #68785b;
    font-size: 11px;
    cursor: pointer;
}

.error {
    padding: 11px 13px;
    border: 1px solid rgba(181, 109, 80, 0.25);
    border-radius: 8px;
    background: rgba(181, 109, 80, 0.07);
    color: #a4583d;
    font-size: 13px;
}

.submit-button {
    width: 100%;
    height: 52px;
    margin-top: 3px;
    border: 0;
    border-radius: 9px;
    background: #69785b;
    color: #fff;
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.submit-button:hover:not(:disabled) {
    background: #5e6d51;
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(105, 120, 91, 0.18);
}

.submit-button:active:not(:disabled) {
    transform: translateY(0);
}

.submit-button:disabled {
    opacity: 0.65;
    cursor: default;
}

.auth-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin-top: 27px;
    color: #777c74;
    font-size: 13px;
}

.auth-bottom button {
    padding: 0;
    border: 0;
    background: transparent;
    color: #68785b;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.2s ease;
}

.auth-bottom button:hover {
    color: #b56d50;
}

@keyframes cardIn {
    from {
        opacity: 0;
        transform: translateY(18px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 600px) {
    .auth-header {
        padding: 24px;
    }

    .logo-name {
        font-size: 26px;
    }

    .auth-main {
        padding: 20px 16px 40px;
        align-items: flex-start;
    }

    .auth-card {
        padding: 34px 24px 30px;
        border-radius: 14px;
    }

    .auth-heading h1 {
        font-size: 29px;
    }

    .name-fields {
        grid-template-columns: 1fr;
        gap: 19px;
    }
}
</style>