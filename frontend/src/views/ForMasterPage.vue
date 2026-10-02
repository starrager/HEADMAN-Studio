<template>
    <div class="master-page">
        <Header></Header>
        <main>
            <section class="dashboard-header">
                <div class="container">
                    <div class="dashboard-header__top">
                        <div>
                            <p class="eyebrow">ЛИЧНЫЙ КАБИНЕТ МАСТЕРА</p>
                            <h1>
                                МОЁ<br />
                                <span>РАСПИСАНИЕ.</span>
                            </h1>
                        </div>
                        <div class="dashboard-date">
                            <span>СЕГОДНЯ</span>
                            <strong></strong>
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="dashboard-content">
                <div class="container">
                    <div class="stats">
                        <div class="stat">
                            <span>ЗАПИСИ СЕГОДНЯ</span>
                            <strong></strong>
                        </div>
                        <div class="stat">
                            <span>ОЖИДАЮТ ПОДТВЕРЖДЕНИЯ</span>
                            <strong></strong>
                        </div>
                        <div class="stat">
                            <span>ЗАВЕРШЕНО</span>
                            <strong></strong>
                        </div>
                        <div class="stat stat--gold">
                            <span>ВЫРУЧКА</span>
                            <strong></strong>
                        </div>
                    </div>
                    <div class="section-heading">
                        <div>
                            <span>01</span>
                            <h2>КАЛЕНДАРЬ</h2>
                        </div>
                        <div class="calendar-controls">
                            <button class="calendar-arrow">←</button>
                            <button class="calendar-today">СЕГОДНЯ</button>
                            <button class="calendar-arrow">→</button>
                        </div>
                    </div>
                    <div class="calendar-toolbar">
                        <div class="calendar-date">
                            <strong></strong>
                            <span></span>
                        </div>
                    </div>
                    <div class="day-calendar">
                        <div v-for="a in dayAppointments":key="a.id" class="calendar-row">
                            <div class="time">{{ formatTime(a.appointmentTime) }}</div>
                            <div class="appointment">
                                <div class="appointment__time">
                                    <strong>{{ formatTime(a.appointmentTime) }}</strong>
                                    <span>{{ a.durationMinutes }} МИН</span>
                                </div>
                                <div class="appointment__main">
                                    <div class="appointment__top">
                                        <span class="status">{{ a.status }}</span>
                                        <span class="appointment__service">{{ a.service?.name?.toUpperCase() }}</span>
                                    </div>
                                    <h3>{{ a.client?.firstName }} {{ a.client?.lastName }}</h3>
                                    <p class="phone">{{ a.client?.phone }}</p>
                                    <div class="comment">
                                        <span>ЗАМЕТКА</span>
                                        <p>{{ a.masterNote || '—' }}</p>
                                    </div>
                                </div>
                                <div class="appointment__actions">
                                    <span class="price">{{ a.totalPrice.toLocaleString('ru-RU') }} ₽</span>
                                    <div class="action-buttons">
                                        <button class="action-button action-button--complete">ЗАВЕРШИТЬ</button>
                                        <button class="action-button action-button--cancel">ОТМЕНИТЬ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="week-section">
                        <div class="section-heading section-heading--week">
                            <div>
                                <span>02</span>
                                <h2>НЕДЕЛЯ</h2>
                            </div>
                            <p></p>
                        </div>
                        <div class="week-grid">
                            <!--<div v-for="d in week" :key="d.iso" class="week-day">
                                <span></span>
                                <strong></strong>
                                <small></small>
                            </div> -->
                        </div>
                    </section>
                </div>
            </section>
        </main>
        <footer class="footer">
            <div class="container footer__inner">
                <div>
                    <strong>HEADMAN <em>STUDIO</em></strong>
                    <span>РАБОЧИЙ КАБИНЕТ МАСТЕРА</span>
                </div>
                <p>© 2026 HEADMAN STUDIO</p>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted, computed} from 'vue'
import { orderApi } from '@/api/order';
import Header from '@/components/Header.vue'

const user=JSON.parse(localStorage.getItem('user')||'{}')
const masterName=computed(()=>`${user.firstName||''} ${user.lastName||''}`.trim())
const appointments=ref<any[]>([])
const formatTime=(iso:string)=>iso.slice(11,16)
const selectedDate=ref(new Date().toISOString().slice(0,10))

const dayAppointments=computed(()=>
    [...appointments.value].sort((a,b)=>
        a.appointTime.localCompare(b.appointmentTime))
)

const getAppointmetsForMasters=async()=>{
    try{
        const response=await orderApi.getOrders()
        console.log(response)
        appointments.value=response.data
    }catch(error){
        console.error(error)
    }
}

onMounted(()=>{
    getAppointmetsForMasters()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
.master-page{
    min-height:100vh;
    background:#14120e;
    color:#f2ead9;
    font-family:'Manrope',sans-serif;
}
.container{
    width:min(1440px,calc(100% - 80px));
    margin:0 auto;
}
.header{
    border-bottom:1px solid rgba(220,185,116,.18);
    background:#14120e;
}
.header__inner{
    min-height:90px;
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.logo{
    display:flex;
    flex-direction:column;
    align-items:center;
    line-height:1;
}
.logo__main{
    font-family:'Big Shoulders Display',sans-serif;
    font-size:30px;
    letter-spacing:5px;
    color:#dcb974;
}
.logo__sub{
    margin-top:5px;
    font-size:9px;
    letter-spacing:4px;
}
.header__right{
    display:flex;
    align-items:center;
    gap:40px;
}
.master-info{
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    gap:5px;
}
.master-info span{
    color:rgba(242,234,217,.35);
    font-size:8px;
    font-weight:700;
    letter-spacing:2px;
}
.master-info strong{
    font-family:'Big Shoulders Display',sans-serif;
    font-size:18px;
    font-weight:500;
    letter-spacing:1px;
}
.logout-button{
    padding:12px 18px;
    border:1px solid rgba(220,185,116,.45);
    background:transparent;
    color:#dcb974;
    font-size:8px;
    font-weight:700;
    letter-spacing:2px;
    cursor:pointer;
    transition:all .25s ease;
}
.logout-button:hover{
    background:#dcb974;
    color:#14120e;
}
.dashboard-header{
    padding:85px 0 75px;
    border-bottom:1px solid rgba(220,185,116,.18);
}
.dashboard-header__top{
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    gap:40px;
}
.eyebrow{
    margin:0 0 20px;
    color:#dcb974;
    font-size:10px;
    font-weight:700;
    letter-spacing:4px;
}
.dashboard-header h1{
    margin:0;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:clamp(70px,9vw,130px);
    font-weight:500;
    line-height:.78;
    letter-spacing:1px;
}
.dashboard-header h1 span{
    color:#dcb974;
}
.dashboard-date{
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    padding-bottom:8px;
}
.dashboard-date span{
    color:rgba(242,234,217,.35);
    font-size:8px;
    font-weight:700;
    letter-spacing:3px;
}
.dashboard-date strong{
    margin-top:8px;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:28px;
    font-weight:500;
    color:#dcb974;
}
.dashboard-date p{
    margin:5px 0 0;
    color:rgba(242,234,217,.4);
    font-size:9px;
    letter-spacing:2px;
}
.dashboard-content{
    padding:75px 0 110px;
}
.stats{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:15px;
    margin-bottom:90px;
}
.stat{
    min-height:145px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:25px;
    background:#1c1913;
    border:1px solid rgba(220,185,116,.18);
}
.stat--gold{
    border-color:rgba(220,185,116,.55);
}
.stat span{
    color:rgba(242,234,217,.38);
    font-size:8px;
    font-weight:700;
    letter-spacing:2px;
}
.stat strong{
    font-family:'Big Shoulders Display',sans-serif;
    font-size:48px;
    font-weight:500;
    line-height:1;
}
.stat--gold strong{
    color:#dcb974;
    font-size:39px;
}
.section-heading{
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    gap:30px;
    margin-bottom:35px;
}
.section-heading>div{
    display:flex;
    align-items:center;
    gap:25px;
}
.section-heading>div>span{
    color:#dcb974;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:20px;
}
.section-heading h2{
    margin:0;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:42px;
    font-weight:600;
    letter-spacing:1px;
}
.calendar-controls{
    display:flex;
    align-items:center;
    gap:8px;
}
.calendar-arrow,
.calendar-today{
    height:40px;
    border:1px solid rgba(220,185,116,.25);
    background:transparent;
    color:#dcb974;
    cursor:pointer;
    transition:all .25s ease;
}
.calendar-arrow{
    width:40px;
    font-size:16px;
}
.calendar-today{
    padding:0 17px;
    font-size:8px;
    font-weight:700;
    letter-spacing:2px;
}
.calendar-arrow:hover,
.calendar-today:hover{
    background:#dcb974;
    color:#14120e;
}
.calendar-toolbar{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:22px 25px;
    background:#1c1913;
    border:1px solid rgba(220,185,116,.18);
}
.calendar-date{
    display:flex;
    align-items:center;
    gap:15px;
}
.calendar-date strong{
    font-family:'Big Shoulders Display',sans-serif;
    font-size:25px;
    font-weight:500;
}
.calendar-date span{
    color:#dcb974;
    font-size:8px;
    font-weight:700;
    letter-spacing:2px;
}
.day-calendar{
    margin-top:12px;
    border-top:1px solid rgba(220,185,116,.18);
}
.calendar-row{
    display:grid;
    grid-template-columns:85px 1fr;
    gap:20px;
    min-height:150px;
    border-bottom:1px solid rgba(220,185,116,.12);
}
.time{
    padding-top:24px;
    color:rgba(242,234,217,.32);
    font-family:'Big Shoulders Display',sans-serif;
    font-size:18px;
}
.appointment{
    position:relative;
    display:grid;
    grid-template-columns:105px 1fr 190px;
    align-items:center;
    gap:25px;
    margin:10px 0;
    padding:20px 25px;
    background:#1c1913;
    border:1px solid rgba(220,185,116,.22);
    transition:border-color .25s ease,transform .25s ease;
}
.appointment:hover{
    transform:translateX(3px);
    border-color:rgba(220,185,116,.5);
}
.appointment__time{
    display:flex;
    flex-direction:column;
    padding-right:20px;
    border-right:1px solid rgba(220,185,116,.18);
}
.appointment__time strong{
    color:#dcb974;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:29px;
    font-weight:500;
    line-height:1;
}
.appointment__time span{
    margin-top:7px;
    color:rgba(242,234,217,.3);
    font-size:7px;
    font-weight:700;
    letter-spacing:1px;
}
.appointment__top{
    display:flex;
    align-items:center;
    gap:12px;
    margin-bottom:8px;
}
.status{
    display:inline-flex;
    align-items:center;
    padding:5px 8px;
    font-size:7px;
    font-weight:700;
    letter-spacing:1.5px;
    background:rgba(220,185,116,.16);
    color:#dcb974;
}
.appointment__service{
    color:rgba(242,234,217,.38);
    font-size:8px;
    font-weight:700;
    letter-spacing:1.5px;
}
.appointment__main h3{
    margin:0;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:27px;
    font-weight:500;
}
.phone{
    margin:5px 0 0;
    color:rgba(242,234,217,.4);
    font-size:10px;
}
.comment{
    margin-top:13px;
    padding-top:11px;
    border-top:1px solid rgba(220,185,116,.1);
}
.comment span{
    color:rgba(242,234,217,.28);
    font-size:7px;
    font-weight:700;
    letter-spacing:1.5px;
}
.comment p{
    margin:4px 0 0;
    color:rgba(242,234,217,.5);
    font-size:9px;
}
.appointment__actions{
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    gap:15px;
}
.price{
    color:#dcb974;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:27px;
}
.action-buttons{
    display:flex;
    gap:7px;
}
.action-button{
    padding:9px 11px;
    border:1px solid;
    background:transparent;
    font-size:7px;
    font-weight:700;
    letter-spacing:1px;
    cursor:pointer;
    transition:all .25s ease;
}
.action-button--complete{
    border-color:rgba(220,185,116,.55);
    color:#dcb974;
}
.action-button--complete:hover{
    background:#dcb974;
    color:#14120e;
}
.action-button--cancel{
    border-color:rgba(242,234,217,.15);
    color:rgba(242,234,217,.4);
}
.action-button--cancel:hover{
    border-color:rgba(242,234,217,.4);
    color:#f2ead9;
}
.week-section{
    margin-top:120px;
}
.section-heading--week{
    align-items:center;
}
.section-heading--week>p{
    margin:0;
    color:rgba(242,234,217,.35);
    font-size:9px;
    letter-spacing:2px;
}
.week-grid{
    display:grid;
    grid-template-columns:repeat(7,1fr);
    gap:10px;
}
.week-day{
    min-height:155px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:20px;
    background:#1c1913;
    border:1px solid rgba(220,185,116,.15);
    transition:all .25s ease;
    cursor:pointer;
}
.week-day:hover{
    border-color:rgba(220,185,116,.45);
    transform:translateY(-3px);
}
.week-day span{
    color:rgba(242,234,217,.35);
    font-size:8px;
    font-weight:700;
    letter-spacing:2px;
}
.week-day strong{
    font-family:'Big Shoulders Display',sans-serif;
    font-size:54px;
    font-weight:500;
    line-height:1;
}
.week-day small{
    color:#dcb974;
    font-size:7px;
    font-weight:700;
    letter-spacing:1px;
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
.footer__inner>div{
    display:flex;
    flex-direction:column;
    gap:5px;
}
.footer strong{
    font-family:'Big Shoulders Display',sans-serif;
    font-size:24px;
}
.footer strong em{
    color:#dcb974;
    font-style:normal;
}
.footer span,
.footer p{
    margin:0;
    color:rgba(242,234,217,.3);
    font-size:8px;
    letter-spacing:1.5px;
}
@media (max-width:1100px){
    .container{
        width:min(1440px,calc(100% - 48px));
    }
    .stats{
        grid-template-columns:repeat(2,1fr);
    }
    .appointment{
        grid-template-columns:90px 1fr;
    }
    .appointment__actions{
        grid-column:2;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
    }
    .week-grid{
        grid-template-columns:repeat(4,1fr);
    }
}
@media (max-width:760px){
    .container{
        width:calc(100% - 32px);
    }
    .header__inner{
        min-height:75px;
    }
    .header__right{
        gap:15px;
    }
    .master-info{
        display:none;
    }
    .dashboard-header{
        padding:65px 0;
    }
    .dashboard-header__top{
        align-items:flex-start;
        flex-direction:column;
    }
    .dashboard-header h1{
        font-size:70px;
    }
    .dashboard-date{
        align-items:flex-start;
    }
    .dashboard-content{
        padding:60px 0 80px;
    }
    .stats{
        grid-template-columns:1fr 1fr;
        margin-bottom:70px;
    }
    .stat{
        min-height:125px;
        padding:20px;
    }
    .stat strong{
        font-size:40px;
    }
    .stat--gold strong{
        font-size:31px;
    }
    .section-heading{
        align-items:flex-start;
        flex-direction:column;
    }
    .calendar-controls{
        width:100%;
    }
    .calendar-today{
        flex:1;
    }
    .calendar-toolbar{
        align-items:flex-start;
        flex-direction:column;
        gap:18px;
    }
    .calendar-row{
        grid-template-columns:55px 1fr;
        gap:10px;
    }
    .appointment{
        grid-template-columns:1fr;
        gap:15px;
        padding:20px;
    }
    .appointment__time{
        flex-direction:row;
        align-items:center;
        gap:10px;
        padding-right:0;
        padding-bottom:12px;
        border-right:0;
        border-bottom:1px solid rgba(220,185,116,.15);
    }
    .appointment__time span{
        margin-top:0;
    }
    .appointment__actions{
        grid-column:auto;
        flex-direction:column;
        align-items:flex-start;
    }
    .action-buttons{
        width:100%;
    }
    .action-button{
        flex:1;
    }
    .week-grid{
        grid-template-columns:repeat(2,1fr);
    }
    .week-day{
        min-height:130px;
    }
    .footer__inner{
        align-items:flex-start;
        flex-direction:column;
    }
}
@media (max-width:420px){
    .dashboard-header h1{
        font-size:58px;
    }
    .stats{
        grid-template-columns:1fr;
    }
    .section-heading h2{
        font-size:35px;
    }
    .calendar-date{
        align-items:flex-start;
        flex-direction:column;
        gap:5px;
    }
    .week-grid{
        grid-template-columns:1fr 1fr;
    }
}
</style>