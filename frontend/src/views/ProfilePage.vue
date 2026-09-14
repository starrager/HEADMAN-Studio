<template>
    <div class="profile-page">
        <Header />
        <main>
            <section class="profile-header">
                <div class="container profile-header__inner">
                    <div>
                        <p>ЛИЧНЫЙ КАБИНЕТ</p>
                        <h1>
                            ПРИВЕТ,<br />
                            <em>{{ firstName }}</em>
                        </h1>
                    </div>
                    <div class="profile-avatar">{{ firstName[0] }}</div>
                </div>
            </section>
            <section class="profile-content">
                <div class="container">
                    <div class="profile-grid">
                        <div class="profile-main">
                            <div class="block-title">
                                <span>01</span>
                                <h2>МОИ ДАННЫЕ</h2>
                            </div>
                            <div class="profile-data">
                                <div>
                                    <span>ИМЯ</span>
                                    <strong>{{ firstName }}</strong>
                                </div>
                                <div>
                                    <span>ФАМИЛИЯ</span>
                                    <strong>{{ lastName }}</strong>
                                </div>
                                <div>
                                    <span>ТЕЛЕФОН</span>
                                    <strong>{{ phone }}</strong>
                                </div>
                                <div>
                                    <span>EMAIL</span>
                                    <strong>{{ email }}</strong>
                                </div>
                            </div>
                            <button class="outline-button">РЕДАКТИРОВАТЬ ПРОФИЛЬ</button>
                        </div>
                        <aside class="profile-side">
                            <div class="side-card">
                                <span>СТАТУС КЛИЕНТА</span>
                                <strong>{{ status }}</strong>
                                <p>Спасибо, что выбираете HEADMAN STUDIO.</p>
                            </div>
                            <div class="side-card side-card--gold">
                                <span>БОНУСНЫЙ БАЛАНС</span>
                                <strong>1 250 ₽</strong>
                                <p>Бонусами можно оплатить до 30% следующего визита.</p>
                            </div>
                        </aside>
                    </div>
                    <section class="appointments">
                        <div class="block-title">
                            <span>02</span>
                            <h2>БЛИЖАЙШАЯ ЗАПИСЬ</h2>
                        </div>
                        <div class="appointment-card">
                            <div class="appointment-date">
                                <span>18</span>
                                <small>СЕН</small>
                            </div>
                            <div class="appointment-info">
                                <p>СТРИЖКА + БОРОДА</p>
                                <strong>АЛЕКСЕЙ ВОЛКОВ</strong>
                                <span>16:30 · 90 МИН</span>
                            </div>
                            <div class="appointment-price">
                                <span>К ОПЛАТЕ</span>
                                <strong>2 200 ₽</strong>
                            </div>
                            <button class="appointment-button">→</button>
                        </div>
                    </section>
                    <section class="history">
                        <div class="block-title">
                            <span>03</span>
                            <h2>ИСТОРИЯ ПОСЕЩЕНИЙ</h2>
                        </div>
                        <div class="history-list">
                            <div class="history-item">
                                <div>
                                    <span>12.08.2025</span>
                                    <strong>МУЖСКАЯ СТРИЖКА</strong>
                                </div>
                                <span>АЛЕКСЕЙ ВОЛКОВ</span>
                                <strong>1 500 ₽</strong>
                            </div>
                            <div class="history-item">
                                <div>
                                    <span>28.07.2025</span>
                                    <strong>СТРИЖКА + БОРОДА</strong>
                                </div>
                                <span>АЛЕКСЕЙ ВОЛКОВ</span>
                                <strong>2 200 ₽</strong>
                            </div>
                            <div class="history-item">
                                <div>
                                    <span>15.06.2025</span>
                                    <strong>МОДЕЛИРОВАНИЕ БОРОДЫ</strong>
                                </div>
                                <span>АЛЕКСЕЙ ВОЛКОВ</span>
                                <strong>1 200 ₽</strong>
                            </div>
                        </div>
                    </section>
                    <section class="favorites">
                        <div class="block-title">
                            <span>04</span>
                            <h2>ЛЮБИМЫЕ УСЛУГИ</h2>
                        </div>
                        <div class="favorites__grid">
                            <div>
                                <span>01</span>
                                <strong>МУЖСКАЯ СТРИЖКА</strong>
                                <b>1 500 ₽</b>
                            </div>
                            <div>
                                <span>02</span>
                                <strong>СТРИЖКА + БОРОДА</strong>
                                <b>2 200 ₽</b>
                            </div>
                            <div>
                                <span>03</span>
                                <strong>УКЛАДКА</strong>
                                <b>800 ₽</b>
                            </div>
                        </div>
                    </section>
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
import { authApi } from '@/api/auth';
import { onMounted,ref } from 'vue';

const firstName=ref('')
const lastName=ref('')
const phone=ref('')
const email=ref('')
const status=ref('')

const getProfile=async()=>{
    try{
        const response=await authApi.getProfile()

        firstName.value=response.data.firstName
        lastName.value=response.data.lastName
        phone.value=response.data.phone
        email.value=response.data.email
        status.value=response.data.status
    }catch(error){
        console.error(error)
    }
}

onMounted(async()=>{
    await getProfile()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
.profile-page{
    min-height:100vh;
    background:#14120e;
    color:#f2ead9;
    font-family:'Manrope',sans-serif;
}
.container{
    width:min(1440px,calc(100% - 80px));
    margin:0 auto;
}
.profile-header{
    padding:90px 0;
    border-bottom:1px solid rgba(220,185,116,.18);
}
.profile-header__inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.profile-header p{
    margin:0 0 20px;
    color:#dcb974;
    font-size:10px;
    font-weight:700;
    letter-spacing:4px;
}
.profile-header h1{
    margin:0;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:clamp(70px,9vw,130px);
    line-height:.8;
}
.profile-header h1 em{
    color:#dcb974;
    font-style:normal;
}
.profile-avatar{
    display:flex;
    align-items:center;
    justify-content:center;
    width:150px;
    height:150px;
    border:1px solid #dcb974;
    color:#dcb974;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:70px;
}
.profile-content{
    padding:100px 0;
}
.profile-grid{
    display:grid;
    grid-template-columns:1fr 380px;
    gap:80px;
}
.block-title{
    display:flex;
    align-items:center;
    gap:25px;
    margin-bottom:45px;
}
.block-title span{
    color:#dcb974;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:20px;
}
.block-title h2{
    margin:0;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:38px;
    font-weight:600;
}
.profile-data{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    border-top:1px solid rgba(220,185,116,.18);
}
.profile-data>div{
    display:flex;
    flex-direction:column;
    gap:10px;
    padding:25px 0;
    border-bottom:1px solid rgba(220,185,116,.18);
}
.profile-data>div:nth-child(odd){
    margin-right:35px;
}
.profile-data span,
.appointment-price span{
    color:rgba(242,234,217,.35);
    font-size:8px;
    font-weight:700;
    letter-spacing:2px;
}
.profile-data strong{
    font-family:'Big Shoulders Display',sans-serif;
    font-size:23px;
}
.outline-button{
    margin-top:35px;
    padding:17px 25px;
    border:1px solid #dcb974;
    background:transparent;
    color:#dcb974;
    font-size:9px;
    font-weight:700;
    letter-spacing:2px;
    cursor:pointer;
    transition:all .25s ease;
}
.outline-button:hover{
    background:#dcb974;
    color:#14120e;
}
.profile-side{
    display:flex;
    flex-direction:column;
    gap:15px;
}
.side-card{
    padding:35px;
    background:#1c1913;
    border:1px solid rgba(220,185,116,.2);
}
.side-card--gold{
    border-color:#dcb974;
}
.side-card span{
    color:rgba(242,234,217,.4);
    font-size:8px;
    font-weight:700;
    letter-spacing:2px;
}
.side-card strong{
    display:block;
    margin:18px 0;
    color:#dcb974;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:45px;
}
.side-card p{
    margin:0;
    color:rgba(242,234,217,.45);
    font-size:11px;
    line-height:1.7;
}
.appointments,
.history,
.favorites{
    margin-top:130px;
}
.appointment-card{
    display:grid;
    grid-template-columns:100px 1fr 180px 60px;
    align-items:center;
    padding:30px;
    background:#1c1913;
    border:1px solid rgba(220,185,116,.25);
}
.appointment-date{
    display:flex;
    flex-direction:column;
    align-items:center;
    border-right:1px solid rgba(220,185,116,.2);
}
.appointment-date span{
    color:#dcb974;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:55px;
    line-height:.8;
}
.appointment-date small{
    margin-top:8px;
    color:rgba(242,234,217,.4);
    font-size:9px;
    letter-spacing:2px;
}
.appointment-info{
    padding-left:35px;
}
.appointment-info p{
    margin:0 0 8px;
    color:#dcb974;
    font-size:8px;
    font-weight:700;
    letter-spacing:2px;
}
.appointment-info strong{
    display:block;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:27px;
}
.appointment-info span{
    display:block;
    margin-top:8px;
    color:rgba(242,234,217,.4);
    font-size:9px;
}
.appointment-price{
    display:flex;
    flex-direction:column;
    gap:8px;
}
.appointment-price strong{
    color:#dcb974;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:30px;
}
.appointment-button{
    width:50px;
    height:50px;
    border:1px solid #dcb974;
    background:transparent;
    color:#dcb974;
    font-size:20px;
    cursor:pointer;
    transition:all .25s ease;
}
.appointment-button:hover{
    background:#dcb974;
    color:#14120e;
}
.history-list{
    border-top:1px solid rgba(220,185,116,.18);
}
.history-item{
    display:grid;
    grid-template-columns:1fr 250px 100px;
    align-items:center;
    padding:25px 10px;
    border-bottom:1px solid rgba(220,185,116,.18);
}
.history-item div{
    display:flex;
    flex-direction:column;
    gap:8px;
}
.history-item span{
    color:rgba(242,234,217,.35);
    font-size:8px;
    letter-spacing:1px;
}
.history-item strong{
    font-family:'Big Shoulders Display',sans-serif;
    font-size:22px;
}
.history-item>strong{
    color:#dcb974;
    text-align:right;
}
.favorites__grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:15px;
}
.favorites__grid>div{
    display:flex;
    flex-direction:column;
    gap:20px;
    padding:30px;
    background:#1c1913;
    border:1px solid rgba(220,185,116,.2);
}
.favorites__grid span{
    color:#dcb974;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:20px;
}
.favorites__grid strong{
    font-family:'Big Shoulders Display',sans-serif;
    font-size:25px;
}
.favorites__grid b{
    color:#dcb974;
    font-size:12px;
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
@media (max-width:1100px){
    .container{
        width:min(1440px,calc(100% - 48px));
    }
    .profile-grid{
        grid-template-columns:1fr;
    }
    .profile-side{
        display:grid;
        grid-template-columns:1fr 1fr;
    }
    .appointment-card{
        grid-template-columns:80px 1fr 150px 50px;
    }
}
@media (max-width:760px){
    .container{
        width:calc(100% - 32px);
    }
    .profile-header{
        padding:70px 0;
    }
    .profile-header__inner{
        align-items:flex-start;
    }
    .profile-header h1{
        font-size:70px;
    }
    .profile-avatar{
        width:90px;
        height:90px;
        font-size:45px;
    }
    .profile-content{
        padding:70px 0;
    }
    .profile-side{
        grid-template-columns:1fr;
    }
    .profile-data{
        grid-template-columns:1fr;
    }
    .profile-data>div:nth-child(odd){
        margin-right:0;
    }
    .appointment-card{
        grid-template-columns:70px 1fr;
        gap:25px;
    }
    .appointment-price{
        grid-column:2;
        padding-left:35px;
    }
    .appointment-button{
        display:none;
    }
    .history-item{
        grid-template-columns:1fr;
        gap:10px;
    }
    .history-item>strong{
        text-align:left;
    }
    .favorites__grid{
        grid-template-columns:1fr;
    }
    .footer__inner{
        flex-direction:column;
        align-items:flex-start;
    }
}
</style>