<template>
    <div class="home-page">
        <header class="header">
            <div class="container header__inner">
                <a href="#" class="logo">
                    <span class="logo__main">HEADMAN</span>
                    <span class="logo__sub">STUDIO</span>
                </a>
                <nav class="nav">
                    <a href="#" class="nav__link nav__link--active">Главная</a>
                    <a href="#" class="nav__link">Услуги</a>
                    <a href="#" class="nav__link">Мастера</a>
                    <a href="#" class="nav__link">О нас</a>
                    <a href="#" class="nav__link">Контакты</a>
                    <router-link v-if="auth" to="/profile" class="nav__link">Профиль</router-link>
                    <a v-if="auth" @click="logout()" class="nav__link__exit">Выйти</a>
                </nav>
                <div class="header__actions">
                    <router-link to="/login" class="btn btn--outline">Войти</router-link>
                    <button class="profile-btn" aria-label="Профиль">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">

                        </svg>
                    </button>
                </div>
                <button class="mobile-menu" aria-label="Открыть меню">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
import {ref,onMounted} from 'vue'

const router=useRouter()
const auth=ref(false)

const checkAuth=()=>{
    try{
        auth.value=!!localStorage.getItem('token')
    }catch(error){
        console.error(error)
        return 
    }
}

const logout=()=>{
    try{
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        checkAuth()
    }catch(error){
        console.error('error logout')
        alert('error logout')
    }
}

onMounted(()=>{
    checkAuth()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap');
:global(*){
    box-sizing:border-box;
}
:global(html){
    scroll-behavior:smooth;
}
:global(body){
    margin:0;
    background:#14120e;
    color:#f2ead9;
    font-family:'Manrope',sans-serif;
}
:global(a){
    color:inherit;
    text-decoration:none;
}
:global(button){
    font:inherit;
}
.home-page{
    background:#14120e;
    overflow:hidden;
}
.container{
    width:min(100% - 32px,1440px);
    margin:0 auto;
}
.header{
    height:90px;
    border-bottom:1px solid rgba(220,185,116,0.18);
    background:rgba(20,18,14,0.96);
    position:relative;
    z-index:10;
}
.header__inner{
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.logo{
    display:flex;
    flex-direction:column;
    align-items:center;
    line-height:1;
    min-width:150px;
}
.logo__main{
    font-family:'Big Shoulders Display',sans-serif;
    font-size:32px;
    letter-spacing:5px;
    color:#dcb974;
}
.logo__sub{
    margin-top:5px;
    font-size:10px;
    letter-spacing:4px;
    color:#f2ead9;
}
.nav{
    display:flex;
    align-items:center;
    gap:42px;
}
.nav__link{
    position:relative;
    padding:34px 0;
    font-size:14px;
    color:rgba(242,234,217,0.72);
    transition:color 0.25s ease;
}
.nav__link--exit{
    position:relative;
    padding:34px 0;
    font-size:14px;
    color:rgba(242,234,217,0.72);
    cursor:pointer;
    transition:color 0.25s ease;
}
.nav__link:hover,
.nav__link--active,
.nav__link--exit:hover{
    color:#dcb974;
}
.nav__link--active::after{
    content:'';
    position:absolute;
    left:0;
    right:0;
    bottom:25px;
    height:1px;
    background:#dcb974;
}
.header__actions{
    display:flex;
    align-items:center;
    gap:22px;
}
.btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    min-height:48px;
    padding:0 28px;
    font-size:13px;
    font-weight:600;
    transition:all 0.25s ease;
}
.btn--outline{
    border:1px solid #dcb974;
    color:#dcb974;
}
.btn--outline:hover{
    background:#dcb974;
    color:#14120e;
}
.profile-btn{
    width:34px;
    height:34px;
    padding:0;
    border:0;
    background:transparent;
    color:#f2ead9;
    cursor:pointer;
}
.profile-btn svg{
    width:25px;
    height:25px;
}
.mobile-menu{
    display:none;
    width:36px;
    padding:0;
    border:0;
    background:transparent;
    cursor:pointer;
}
.mobile-menu span{
    display:block;
    height:1px;
    margin:7px 0;
    background:#dcb974;
}
@media (max-width:760px){
    .container{
        width:min(100% - 32px,1440px);
    }
    .header{
        height:76px;
    }
    .nav,
    .header__actions{
        display:none;
    }
    .mobile-menu{
        display:block;
    }
    .logo__main{
        font-size:27px;
    }
}
</style>