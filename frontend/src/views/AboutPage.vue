<template>
    <div class="about-page">
        <Header />
        <main>
            <section class="about-hero">
                <div class="container">
                    <div class="about-hero__label">
                        <span></span>
                        HEADMAN STUDIO
                    </div>
                    <h1>
                        БОЛЬШЕ,<br />
                        ЧЕМ <em>СТРИЖКА</em>
                    </h1>
                    <p>
                        HEADMAN STUDIO — пространство мужского стиля,
                        ухода и уверенности в себе.
                    </p>
                </div>
            </section>
            <section class="philosophy">
                <div class="container">
                    <div class="section-top">
                        <span>01</span>
                        <div>
                            <p>НАША ФИЛОСОФИЯ</p>
                            <h2>
                                СТИЛЬ<br />
                                <em>В ДЕТАЛЯХ</em>
                            </h2>
                        </div>
                    </div>
                    <div class="philosophy__grid">
                        <div class="philosophy__number">01</div>
                        <div class="philosophy__text">
                            <p class="large">
                                Мы считаем, что внешний вид —
                                это продолжение характера.
                            </p>
                            <p>
                                Поэтому в HEADMAN STUDIO мы не работаем по шаблону.
                                Каждый образ создаётся индивидуально — с учётом формы лица,
                                структуры волос, образа жизни и личного стиля клиента.
                            </p>
                            <p>
                                Здесь можно расслабиться, довериться мастеру
                                и получить именно тот результат, которого вы ожидали.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="values">
                <div class="container">
                    <div class="section-top section-top--right">
                        <span>02</span>
                        <div>
                            <p>НАШИ ЦЕННОСТИ</p>
                            <h2>
                                ПОЧЕМУ<br />
                                <em>HEADMAN</em>
                            </h2>
                        </div>
                    </div>
                    <div class="values__grid">
                        <article class="value-card">
                            <span>01</span>
                            <h3>КАЧЕСТВО</h3>
                            <p>
                                Используем профессиональные инструменты
                                и косметику, чтобы результат всегда был на высоте.
                            </p>
                        </article>
                        <article class="value-card">
                            <span>02</span>
                            <h3>ИНДИВИДУАЛЬНОСТЬ</h3>
                            <p>
                                Не существует двух одинаковых клиентов.
                                Мы подбираем образ именно под вас.
                            </p>
                        </article>
                        <article class="value-card">
                            <span>03</span>
                            <h3>КОМФОРТ</h3>
                            <p>
                                Атмосфера студии создана для того,
                                чтобы время у мастера было настоящим отдыхом.
                            </p>
                        </article>
                        <article class="value-card">
                            <span>04</span>
                            <h3>СТИЛЬ</h3>
                            <p>
                                Следим за современными тенденциями,
                                сохраняя уважение к классическому барберингу.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
            <section class="numbers">
                <div class="container">
                    <div class="numbers__grid">
                        <div>
                            <strong>8+</strong>
                            <span>ЛЕТ РАБОТЫ</span>
                        </div>
                        <div>
                            <strong>15K+</strong>
                            <span>СТРИЖЕК</span>
                        </div>
                        <div>
                            <strong>10+</strong>
                            <span>ПРОФЕССИОНАЛЬНЫХ МАСТЕРОВ</span>
                        </div>
                        <div>
                            <strong>5.0</strong>
                            <span>СРЕДНИЙ РЕЙТИНГ</span>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-cta">
                <div class="container">
                    <p>HEADMAN STUDIO</p>
                    <h2>
                        НАЙДИ СВОЙ<br />
                        <em>СТИЛЬ</em>
                    </h2>
                    <router-link to="/login" class="about-cta__button">
                        ЗАПИСАТЬСЯ
                        <span>→</span>
                    </router-link>
                </div>
            </section>
        </main>
        <footer class="footer">
            <div class="container footer__inner">
                <strong>HEADMAN <em>STUDIO</em></strong>
                <span>МУЖСКОЙ СТИЛЬ БЕЗ КОМПРОМИССОВ</span>
                <span>© 2025 HEADMAN STUDIO</span>
            </div>
        </footer>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
.about-page{
    min-height:100vh;
    background:#14120e;
    color:#f2ead9;
    font-family:'Manrope',sans-serif;
}
.container{
    width:min(1440px,calc(100% - 80px));
    margin:0 auto;
}
.about-hero{
    min-height:620px;
    display:flex;
    align-items:center;
    border-bottom:1px solid rgba(220,185,116,.18);
}
.about-hero__label{
    display:flex;
    align-items:center;
    gap:14px;
    margin-bottom:35px;
    color:#dcb974;
    font-size:10px;
    font-weight:700;
    letter-spacing:4px;
}
.about-hero__label span{
    width:40px;
    height:1px;
    background:#dcb974;
}
.about-hero h1{
    margin:0;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:clamp(80px,12vw,180px);
    line-height:.78;
    letter-spacing:-5px;
}
.about-hero h1 em,
.section-top h2 em,
.about-cta h2 em{
    color:#dcb974;
    font-style:normal;
}
.about-hero p{
    max-width:520px;
    margin:45px 0 0;
    color:rgba(242,234,217,.55);
    font-size:15px;
    line-height:1.8;
}
.philosophy,
.values{
    padding:130px 0;
}
.values{
    background:#18150f;
}
.section-top{
    display:flex;
    gap:35px;
    margin-bottom:75px;
}
.section-top--right{
    justify-content:flex-end;
    text-align:right;
}
.section-top>span{
    color:#dcb974;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:22px;
}
.section-top p{
    margin:0 0 15px;
    color:rgba(242,234,217,.4);
    font-size:10px;
    font-weight:700;
    letter-spacing:3px;
}
.section-top h2{
    margin:0;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:clamp(60px,8vw,110px);
    line-height:.82;
}
.philosophy__grid{
    display:grid;
    grid-template-columns:250px 1fr;
    gap:100px;
}
.philosophy__number{
    color:rgba(220,185,116,.15);
    font-family:'Big Shoulders Display',sans-serif;
    font-size:180px;
    line-height:.7;
}
.philosophy__text{
    max-width:700px;
}
.philosophy__text .large{
    margin-top:0;
    color:#f2ead9;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:38px;
    line-height:1.05;
    text-transform:uppercase;
}
.philosophy__text p:not(.large){
    color:rgba(242,234,217,.55);
    font-size:14px;
    line-height:1.9;
}
.values__grid{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:1px;
    background:rgba(220,185,116,.18);
}
.value-card{
    min-height:280px;
    padding:45px;
    background:#18150f;
}
.value-card span{
    color:#dcb974;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:22px;
}
.value-card h3{
    margin:55px 0 15px;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:35px;
}
.value-card p{
    max-width:400px;
    margin:0;
    color:rgba(242,234,217,.5);
    font-size:12px;
    line-height:1.8;
}
.numbers{
    padding:80px 0;
    border-bottom:1px solid rgba(220,185,116,.18);
}
.numbers__grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
}
.numbers__grid>div{
    padding:20px 30px;
    border-left:1px solid rgba(220,185,116,.2);
}
.numbers strong{
    display:block;
    color:#dcb974;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:65px;
}
.numbers span{
    color:rgba(242,234,217,.4);
    font-size:9px;
    letter-spacing:2px;
}
.about-cta{
    padding:130px 0;
    text-align:center;
}
.about-cta p{
    color:#dcb974;
    font-size:10px;
    font-weight:700;
    letter-spacing:4px;
}
.about-cta h2{
    margin:35px 0 50px;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:clamp(70px,10vw,150px);
    line-height:.8;
}
.about-cta__button{
    display:inline-flex;
    align-items:center;
    gap:35px;
    padding:20px 30px;
    border:1px solid #dcb974;
    background:transparent;
    color:#dcb974;
    font-size:10px;
    font-weight:700;
    letter-spacing:2px;
    cursor:pointer;
    transition:all .3s ease;
}
.about-cta__button span{
    font-size:22px;
}
.about-cta__button:hover{
    background:#dcb974;
    color:#14120e;
}
.footer{
    padding:35px 0;
    border-top:1px solid rgba(220,185,116,.18);
}
.footer__inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:30px;
}
.footer strong{
    font-family:'Big Shoulders Display',sans-serif;
    font-size:24px;
}
.footer strong em{
    color:#dcb974;
    font-style:normal;
}
.footer span{
    color:rgba(242,234,217,.35);
    font-size:8px;
    letter-spacing:1.5px;
}
@media (max-width:760px){
    .container{
        width:calc(100% - 32px);
    }
    .about-hero{
        min-height:520px;
    }
    .about-hero h1{
        font-size:75px;
    }
    .philosophy,
    .values{
        padding:90px 0;
    }
    .philosophy__grid{
        grid-template-columns:1fr;
        gap:30px;
    }
    .philosophy__number{
        font-size:100px;
    }
    .values__grid{
        grid-template-columns:1fr;
    }
    .numbers__grid{
        grid-template-columns:repeat(2,1fr);
    }
    .numbers__grid>div{
        margin-bottom:20px;
    }
    .footer__inner{
        flex-direction:column;
        align-items:flex-start;
    }
}
</style>