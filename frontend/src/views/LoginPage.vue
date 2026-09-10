<template>
    <div class="auth-page">
        <header class="header">
            <div class="container header__inner">
                <a href="#" class="logo">
                    <span class="logo__main">HEADMAN</span>
                    <span class="logo__sub">STUDIO</span>
                </a>
                <a href="#" class="back-link">← Вернуться на сайт</a>
            </div>
        </header>
        <main class="auth">
            <div class="auth__decor auth__decor--left"></div>
            <div class="auth__decor auth__decor--right"></div>
            <div class="auth-card">
                <div class="auth-card__heading">
                    <div class="eyebrow">HEADMAN STUDIO</div>
                    <h1>Войти в аккаунт</h1>
                    <p>
                        Войдите в личный кабинет,<br />
                        чтобы продолжить.
                    </p>
                </div>
                <form class="auth-form">
                    <div class="field">
                        <label for="email">Электронная почта</label>
                        <input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div class="field">
                        <div class="field__label">
                            <label for="password">Пароль</label>
                            <a href="#" class="forgot">Забыли пароль?</a>
                        </div>
                        <input id="password" type="password" placeholder="Введите пароль" />
                    </div>
                    <label class="checkbox">
                        <input type="checkbox" />
                        <span class="checkbox__mark"></span>
                        <span>Запомнить меня</span>
                    </label>
                    <button type="submit" class="btn btn--gold">Войти</button>
                </form>
                <div class="divider">
                    <span>или</span>
                </div>
                <div class="social-auth">
                    <button type="button" class="social-btn">
                        <span class="social-btn__icon">VK</span>
                        Войти через VK
                    </button>
                    <button type="button" class="social-btn">
                        <span class="social-btn__icon">◎</span>
                        Войти через Telegram
                    </button>
                </div>
                <div class="auth-card__footer">
                    <span>Нет аккаунта?</span>
                    <a href="#">Зарегистрироваться</a>
                </div>
            </div>
        </main>
        <footer class="footer">
            <span>© 2026 HEADMAN STUDIO</span>
            <span>Все права защищены.</span>
        </footer>
    </div>
</template>

<script setup lang="ts">

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
    font-size:16px;
}
:global(a){
    color:inherit;
    text-decoration:none;
}
:global(button),
:global(input){
    font:inherit;
}
.auth-page{
    min-height:100vh;
    display:flex;
    flex-direction:column;
    background:#14120e;
    overflow:hidden;
}
.container{
    width:min(calc(100% - 80px),1440px);
    margin:0 auto;
}
.header{
    height:90px;
    flex-shrink:0;
    border-bottom:1px solid rgba(220,185,116,0.18);
    background:rgba(20,18,14,0.96);
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
    font-size:34px;
    letter-spacing:5px;
    color:#dcb974;
}
.logo__sub{
    margin-top:5px;
    font-size:11px;
    letter-spacing:4px;
    color:#f2ead9;
}
.back-link{
    color:rgba(242,234,217,0.6);
    font-size:14px;
    transition:color 0.25s ease;
}
.back-link:hover{
    color:#dcb974;
}
.auth{
    flex:1;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:70px 20px;
}
.auth__decor{
    position:absolute;
    width:280px;
    height:280px;
    border:1px solid rgba(220,185,116,0.08);
    transform:rotate(45deg);
    pointer-events:none;
}
.auth__decor::after{
    content:'';
    position:absolute;
    inset:30px;
    border:1px solid rgba(220,185,116,0.06);
}
.auth__decor--left{
    left:-140px;
    top:18%;
}
.auth__decor--right{
    right:-140px;
    bottom:12%;
}
.auth-card{
    position:relative;
    z-index:1;
    width:100%;
    max-width:500px;
    padding:54px 50px 46px;
    border:1px solid rgba(220,185,116,0.2);
    background:#1c1913;
    box-shadow:0 30px 80px rgba(0,0,0,0.35);
}
.auth-card::before{
    content:'';
    position:absolute;
    left:-1px;
    top:-1px;
    bottom:-1px;
    width:3px;
    background:#dcb974;
}
.auth-card__heading{
    text-align:center;
    margin-bottom:38px;
}
.eyebrow{
    margin-bottom:18px;
    color:#dcb974;
    font-size:12px;
    font-weight:600;
    letter-spacing:4px;
}
.auth-card h1{
    margin:0;
    font-family:'Big Shoulders Display',sans-serif;
    font-size:56px;
    font-weight:400;
    line-height:1;
    letter-spacing:1px;
}
.auth-card__heading p{
    margin:18px 0 0;
    color:rgba(242,234,217,0.55);
    font-size:15px;
    line-height:1.7;
}
.auth-form{
    display:flex;
    flex-direction:column;
    gap:22px;
}
.field{
    display:flex;
    flex-direction:column;
    gap:9px;
}
.field__label{
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.field label{
    color:rgba(242,234,217,0.8);
    font-size:13px;
    font-weight:600;
}
.forgot{
    color:#dcb974;
    font-size:13px;
    transition:opacity 0.2s ease;
}
.forgot:hover{
    opacity:0.7;
}
.field input{
    width:100%;
    height:54px;
    padding:0 18px;
    border:1px solid rgba(220,185,116,0.18);
    outline:none;
    background:#14120e;
    color:#f2ead9;
    font-size:15px;
    transition:border-color 0.25s ease,background 0.25s ease;
}
.field input::placeholder{
    color:rgba(242,234,217,0.3);
}
.field input:focus{
    border-color:rgba(220,185,116,0.65);
    background:#171410;
}
.checkbox{
    display:flex;
    align-items:center;
    gap:12px;
    margin-top:-2px;
    color:rgba(242,234,217,0.55);
    font-size:14px;
    cursor:pointer;
}
.checkbox input{
    display:none;
}
.checkbox__mark{
    width:18px;
    height:18px;
    flex-shrink:0;
    border:1px solid rgba(220,185,116,0.35);
    background:#14120e;
    transition:all 0.2s ease;
}
.checkbox input:checked + .checkbox__mark{
    background:#dcb974;
    box-shadow:inset 0 0 0 4px #14120e;
}
.btn{
    width:100%;
    height:54px;
    border:0;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    font-size:14px;
    font-weight:700;
    letter-spacing:0.5px;
    transition:all 0.25s ease;
}
.btn--gold{
    background:#dcb974;
    color:#14120e;
}
.btn--gold:hover{
    background:#f2d18f;
    transform:translateY(-2px);
    box-shadow:0 12px 30px rgba(220,185,116,0.25);
}
.divider{
    display:flex;
    align-items:center;
    gap:15px;
    margin:30px 0 22px;
    color:rgba(242,234,217,0.35);
    font-size:12px;
}
.divider::before,
.divider::after{
    content:'';
    height:1px;
    flex:1;
    background:rgba(220,185,116,0.12);
}
.social-auth{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:12px;
}
.social-btn{
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    border:1px solid rgba(220,185,116,0.15);
    background:transparent;
    color:rgba(242,234,217,0.75);
    cursor:pointer;
    font-size:13px;
    transition:all 0.25s ease;
}
.social-btn:hover{
    border-color:rgba(220,185,116,0.4);
    color:#dcb974;
    background:rgba(220,185,116,0.05);
}
.social-btn__icon{
    color:#dcb974;
    font-size:13px;
    font-weight:700;
}
.auth-card__footer{
    display:flex;
    justify-content:center;
    gap:8px;
    margin-top:30px;
    color:rgba(242,234,217,0.45);
    font-size:14px;
}
.auth-card__footer a{
    color:#dcb974;
}
.auth-card__footer a:hover{
    color:#f2d18f;
}
.footer{
    min-height:75px;
    padding:0 40px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:20px;
    border-top:1px solid rgba(220,185,116,0.12);
    color:rgba(242,234,217,0.35);
    font-size:12px;
    letter-spacing:0.5px;
}
@media (max-width:760px){
    .container{
        width:min(calc(100% - 32px),1440px);
    }
    .header{
        height:76px;
    }
    .logo__main{
        font-size:28px;
    }
    .back-link{
        font-size:12px;
    }
    .auth{
        padding:45px 16px;
    }
    .auth-card{
        padding:44px 26px 36px;
    }
    .auth-card h1{
        font-size:46px;
    }
    .social-auth{
        grid-template-columns:1fr;
    }
    .footer{
        padding:20px;
        flex-direction:column;
        gap:6px;
    }
    .auth__decor{
        display:none;
    }
}
@media (max-width:420px){
    .auth-card{
        padding:36px 22px 30px;
    }
    .auth-card h1{
        font-size:42px;
    }
    .auth-card__footer{
        flex-direction:column;
        align-items:center;
    }
}
</style>