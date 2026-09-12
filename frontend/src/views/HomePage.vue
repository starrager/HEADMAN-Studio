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
                </nav>
                <div class="header__actions">
                    <a @click="router.push('/register')" class="btn btn--outline">Записаться</a>
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
        <main>
            <section class="hero">
                <div class="container hero__inner">
                    <div class="hero__content">
                        <div class="eyebrow">МУЖСКИЕ СТРИЖКИ &amp; СТИЛЬ</div>
                        <h1>
                            ТВОЙ СТИЛЬ.<br />
                            ТВОИ ПРАВИЛА.
                        </h1>
                        <p class="hero__description">
                            HEADMAN STUDIO — место, где стиль становится частью твоего образа.
                            Премиальный сервис для настоящих мужчин.
                        </p>
                        <div class="hero__actions">
                            <a href="#" class="btn btn--gold">Записаться онлайн</a>
                            <a href="#" class="hero__link">
                                Наши услуги
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                    <div class="hero__image">
                        <img src="/src/assets/barber-hero.jpg" alt="HEADMAN STUDIO" />
                        <div class="hero__image-overlay"></div>
                    </div>
                </div>
            </section>
            <section class="section services">
                <div class="container">
                    <div class="section-heading">
                        <div class="eyebrow">НАШИ УСЛУГИ</div>
                        <h2>Качество в каждой детали</h2>
                    </div>
                    <div class="services-grid">
                        <article class="service-card">
                            <div class="service-card__icon">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
                                    
                                </svg>
                            </div>
                            <h3>Мужская стрижка</h3>
                            <p>Индивидуальный подход и идеальная форма</p>
                            <div class="service-card__price">от 1 500 ₽</div>
                        </article>
                        <article class="service-card">
                            <div class="service-card__icon">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
                                    
                                </svg>
                            </div>
                            <h3>Стрижка бороды</h3>
                            <p>Моделирование бороды и профессиональный уход</p>
                            <div class="service-card__price">от 1 000 ₽</div>
                        </article>
                        <article class="service-card">
                            <div class="service-card__icon">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
                                    
                                </svg>
                            </div>
                            <h3>Королевское бритьё</h3>
                            <p>Классическое бритьё опасной бритвой</p>
                            <div class="service-card__price">от 1 500 ₽</div>
                        </article>
                        <article class="service-card">
                            <div class="service-card__icon">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
                                    
                                </svg>
                            </div>
                            <h3>Укладка</h3>
                            <p>Стильная укладка и фиксация</p>
                            <div class="service-card__price">от 800 ₽</div>
                        </article>
                    </div>
                </div>
            </section>
            <section class="section masters">
                <div class="container">
                    <div class="section-heading">
                        <div class="eyebrow">НАШИ МАСТЕРА</div>
                        <h2>Профессионалы своего дела</h2>
                    </div>
                    <div class="masters-grid">
                        <article class="master-card">
                            <div class="master-card__photo">
                                <img src="/src/assets/master-1.jpg" alt="Алексей" />
                            </div>
                            <div class="master-card__content">
                                <h3>Алексей</h3>
                                <span class="master-card__role">ТОП-МАСТЕР</span>
                                <p>
                                    Опыт работы более 7 лет. Специализация: стрижки, борода,
                                    стилевые решения.
                                </p>
                                <div class="master-card__social">
                                    <a href="#">◎</a>
                                    <a href="#">VK</a>
                                </div>
                            </div>
                        </article>
                        <article class="master-card">
                            <div class="master-card__photo">
                                <img src="/src/assets/master-2.jpg" alt="Дмитрий" />
                            </div>
                            <div class="master-card__content">
                                <h3>Дмитрий</h3>
                                <span class="master-card__role">БАРБЕР</span>
                                <p>
                                    Мастер мужских стрижек и укладок. Следит за трендами и
                                    деталями.
                                </p>
                                <div class="master-card__social">
                                    <a href="#">◎</a>
                                    <a href="#">VK</a>
                                </div>
                            </div>
                        </article>
                        <article class="master-card">
                            <div class="master-card__photo">
                                <img src="/src/assets/master-3.jpg" alt="Максим" />
                            </div>
                            <div class="master-card__content">
                                <h3>Максим</h3>
                                <span class="master-card__role">БАРБЕР</span>
                                <p>Эксперт по работе с бородой и классическому бритью.</p>
                                <div class="master-card__social">
                                    <a href="#">◎</a>
                                    <a href="#">VK</a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section class="booking">
                <div class="container">
                    <div class="booking__inner">
                        <div class="booking__icon">
                            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
                                
                            </svg>
                        </div>
                        <div class="booking__content">
                            <h2>Готов к новому образу?</h2>
                            <p>Выбери удобное время и запишись онлайн</p>
                        </div>
                        <a href="#" class="btn btn--gold">Записаться</a>
                    </div>
                </div>
            </section>
        </main>
        <footer class="footer">
            <div class="container footer__inner">
                <a href="#" class="logo">
                    <span class="logo__main">HEADMAN</span>
                    <span class="logo__sub">STUDIO</span>
                </a>
                <div class="footer__copyright">
                    <span>© 2026 HEADMAN STUDIO</span>
                    <span>Все права защищены.</span>
                </div>
                <a href="tel:+79991234567" class="footer__phone">+7 (999) 123-45-67</a>
                <div class="footer__social">
                    <a href="#">◎</a>
                    <a href="#">VK</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router=useRouter()
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
    min-height:100vh;
    background:#14120e;
    overflow:hidden;
}
.container{
    width:min(100% - 80px,1440px);
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
.nav__link:hover,
.nav__link--active{
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
.btn--gold{
    background:#dcb974;
    color:#14120e;
}
.btn--gold:hover{
    background:#f2d18f;
    transform:translateY(-2px);
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
.hero{
    min-height:600px;
    border-bottom:1px solid rgba(220,185,116,0.15);
}
.hero__inner{
    min-height:600px;
    display:grid;
    grid-template-columns:1fr 1fr;
    position:relative;
}
.hero__content{
    position:relative;
    z-index:2;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:80px 60px 80px 0;
}
.eyebrow{
    margin-bottom:20px;
    color:#dcb974;
    font-size:11px;
    font-weight:600;
    letter-spacing:4px;
}
.hero h1{
    max-width:650px;
    margin:0;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:clamp(64px,6vw,104px);
    font-weight:500;
    line-height:0.88;
    letter-spacing:2px;
}
.hero__description{
    max-width:470px;
    margin:35px 0 0;
    color:rgba(242,234,217,0.72);
    font-size:15px;
    line-height:1.8;
}
.hero__actions{
    display:flex;
    align-items:center;
    gap:35px;
    margin-top:38px;
}
.hero__link{
    color:#dcb974;
    font-size:13px;
}
.hero__link span{
    display:inline-block;
    margin-left:8px;
    transition:transform 0.25s ease;
}
.hero__link:hover span{
    transform:translateX(5px);
}
.hero__image{
    position:relative;
    min-height:600px;
    overflow:hidden;
}
.hero__image img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
}
.hero__image-overlay{
    position:absolute;
    inset:0;
    background:linear-gradient(90deg,#14120e 0%,rgba(20,18,14,0.4) 15%,transparent 45%),linear-gradient(0deg,rgba(20,18,14,0.3),transparent 40%);
}
.section{
    padding:105px 0;
}
.section-heading{
    margin-bottom:48px;
}
.section-heading h2{
    margin:0;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:clamp(42px,4vw,62px);
    font-weight:400;
    letter-spacing:1px;
}
.services-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:18px;
}
.service-card{
    min-height:290px;
    padding:32px;
    position:relative;
    display:flex;
    flex-direction:column;
    border:1px solid rgba(220,185,116,0.15);
    background:#1c1913;
    transition:transform 0.25s ease,border-color 0.25s ease;
}
.service-card::before{
    content:'';
    position:absolute;
    left:-1px;
    top:-1px;
    bottom:-1px;
    width:3px;
    background:#dcb974;
}
.service-card:hover{
    transform:translateY(-5px);
    border-color:rgba(220,185,116,0.4);
}
.service-card__icon{
    width:45px;
    height:45px;
    margin-bottom:30px;
    color:#dcb974;
}
.service-card__icon svg{
    width:100%;
    height:100%;
}
.service-card h3{
    margin:0 0 15px;
    font-size:17px;
    font-weight:600;
}
.service-card p{
    max-width:230px;
    margin:0;
    color:rgba(242,234,217,0.58);
    font-size:13px;
    line-height:1.7;
}
.service-card__price{
    margin-top:auto;
    padding-top:30px;
    color:#dcb974;
    font-size:15px;
    font-weight:600;
}
.masters{
    padding-top:20px;
}
.masters-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;
}
.master-card{
    display:grid;
    grid-template-columns:145px 1fr;
    min-height:250px;
    border:1px solid rgba(220,185,116,0.15);
    background:#1c1913;
    overflow:hidden;
}
.master-card__photo{
    height:100%;
    min-height:250px;
    overflow:hidden;
}
.master-card__photo img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
    filter:grayscale(20%);
    transition:transform 0.4s ease;
}
.master-card:hover .master-card__photo img{
    transform:scale(1.04);
}
.master-card__content{
    padding:28px 24px;
}
.master-card h3{
    margin:0;
    font-size:20px;
    font-weight:600;
}
.master-card__role{
    display:block;
    margin-top:6px;
    color:#dcb974;
    font-size:9px;
    letter-spacing:2px;
}
.master-card p{
    margin:20px 0 0;
    color:rgba(242,234,217,0.58);
    font-size:12px;
    line-height:1.7;
}
.master-card__social{
    display:flex;
    gap:12px;
    margin-top:22px;
}
.master-card__social a{
    color:rgba(242,234,217,0.7);
    font-size:12px;
}
.master-card__social a:hover{
    color:#dcb974;
}
.booking{
    padding:20px 0 105px;
}
.booking__inner{
    min-height:130px;
    display:flex;
    align-items:center;
    gap:30px;
    padding:30px 45px;
    border:1px solid rgba(220,185,116,0.15);
    background:#1c1913;
}
.booking__icon{
    width:48px;
    height:48px;
    flex-shrink:0;
    color:#dcb974;
}
.booking__icon svg{
    width:100%;
    height:100%;
}
.booking__content{
    flex:1;
}
.booking__content h2{
    margin:0 0 7px;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:32px;
    font-weight:400;
}
.booking__content p{
    margin:0;
    color:rgba(242,234,217,0.55);
    font-size:13px;
}
.footer{
    border-top:1px solid rgba(220,185,116,0.15);
}
.footer__inner{
    min-height:130px;
    display:flex;
    align-items:center;
    gap:55px;
}
.footer__copyright{
    display:flex;
    flex-direction:column;
    gap:5px;
    flex:1;
    color:rgba(242,234,217,0.45);
    font-size:11px;
}
.footer__phone{
    font-size:13px;
}
.footer__phone:hover{
    color:#dcb974;
}
.footer__social{
    display:flex;
    gap:16px;
    color:rgba(242,234,217,0.65);
    font-size:12px;
}
.footer__social a:hover{
    color:#dcb974;
}
@media (max-width:1100px){
    .container{
        width:min(100% - 48px,1440px);
    }
    .nav{
        gap:22px;
    }
    .services-grid{
        grid-template-columns:repeat(2,1fr);
    }
    .masters-grid{
        grid-template-columns:1fr;
    }
    .master-card{
        max-width:600px;
    }
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
    .hero,
    .hero__inner{
        min-height:auto;
    }
    .hero__inner{
        display:flex;
        flex-direction:column;
    }
    .hero__content{
        min-height:530px;
        padding:80px 0 60px;
    }
    .hero h1{
        font-size:clamp(58px,16vw,82px);
    }
    .hero__description{
        font-size:14px;
    }
    .hero__actions{
        flex-direction:column;
        align-items:flex-start;
        gap:25px;
    }
    .hero__image{
        height:430px;
        min-height:430px;
    }
    .hero__image-overlay{
        background:linear-gradient(0deg,#14120e 0%,rgba(20,18,14,0.15) 50%);
    }
    .section{
        padding:75px 0;
    }
    .section-heading{
        margin-bottom:35px;
    }
    .section-heading h2{
        font-size:44px;
    }
    .services-grid{
        grid-template-columns:1fr;
    }
    .service-card{
        min-height:260px;
    }
    .master-card{
        grid-template-columns:110px 1fr;
    }
    .master-card__photo{
        min-height:250px;
    }
    .master-card__content{
        padding:22px 18px;
    }
    .booking{
        padding-bottom:75px;
    }
    .booking__inner{
        flex-direction:column;
        align-items:flex-start;
        padding:30px;
    }
    .booking__inner .btn{
        width:100%;
    }
    .footer__inner{
        min-height:200px;
        flex-direction:column;
        align-items:flex-start;
        justify-content:center;
        gap:20px;
    }
    .footer__copyright{
        flex:initial;
    }
}
@media (max-width:420px){
    .hero h1{
        font-size:55px;
    }
    .master-card{
        grid-template-columns:1fr;
    }
    .master-card__photo{
        height:280px;
    }
}
</style>