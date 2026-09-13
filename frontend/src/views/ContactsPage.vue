<template>
  <div class="contacts-page">
    <Header />

    <main>
      <section class="contacts-hero">
        <div class="container">
          <div class="hero-label">
            <span></span>
            HEADMAN STUDIO
          </div>

          <h1>
            БУДЕМ<br />
            <em>НА СВЯЗИ</em>
          </h1>

          <p>
            Приходите в студию, звоните нам или оставляйте заявку.
            Всегда рады новым и постоянным клиентам.
          </p>
        </div>
      </section>

      <section class="contacts">
        <div class="container">
          <div class="contacts__grid">
            <!-- INFO -->
            <div class="contacts__info">
              <div class="contact-item">
                <span>01 / АДРЕС</span>
                <h3>УЛ. ПРИМЕРНАЯ, 25</h3>
                <p>МОСКВА, РОССИЯ</p>
              </div>

              <div class="contact-item">
                <span>02 / ТЕЛЕФОН</span>
                <h3>+7 999 123-45-67</h3>
                <p>ЕЖЕДНЕВНО С 10:00 ДО 22:00</p>
              </div>

              <div class="contact-item">
                <span>03 / ПОЧТА</span>
                <h3>INFO@HEADMAN.RU</h3>
                <p>ОТВЕТИМ В ТЕЧЕНИЕ ДНЯ</p>
              </div>

              <div class="contact-item">
                <span>04 / СОЦИАЛЬНЫЕ СЕТИ</span>

                <div class="socials">
                  <a href="#">VK</a>
                  <a href="#">TG</a>
                  <a href="#">INST</a>
                </div>
              </div>
            </div>

            <!-- MAP -->
            <div class="map">
              <div class="map__grid"></div>

              <div class="map__content">
                <div class="map__pin">+</div>

                <span>HEADMAN STUDIO</span>
                <strong>УЛ. ПРИМЕРНАЯ, 25</strong>

                <button>
                  ПОСТРОИТЬ МАРШРУТ
                  <b>→</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WORK TIME -->
      <section class="schedule">
        <div class="container">
          <div class="schedule__inner">
            <div>
              <span>ГРАФИК РАБОТЫ</span>

              <h2>
                КОГДА<br />
                <em>ЖДЁМ ВАС</em>
              </h2>
            </div>

            <div class="schedule__days">
              <div>
                <span>ПОНЕДЕЛЬНИК — ПЯТНИЦА</span>
                <strong>10:00 — 22:00</strong>
              </div>

              <div>
                <span>СУББОТА — ВОСКРЕСЕНЬЕ</span>
                <strong>10:00 — 22:00</strong>
              </div>
            </div>
          </div>
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

.contacts-page {
  min-height: 100vh;
  background: #14120e;
  color: #f2ead9;
  font-family: 'Manrope', sans-serif;
}

.container {
  width: min(1440px, calc(100% - 80px));
  margin: 0 auto;
}

.contacts-hero {
  padding: 110px 0 100px;
  border-bottom: 1px solid rgba(220, 185, 116, .18);
}

.hero-label {
  display: flex;
  align-items: center;
  gap: 14px;

  color: #dcb974;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 4px;
}

.hero-label span {
  width: 40px;
  height: 1px;
  background: #dcb974;
}

.contacts-hero h1 {
  margin: 35px 0 35px;

  font-family: 'Big Shoulders Display', sans-serif;
  font-size: clamp(80px, 12vw, 170px);
  line-height: .78;
  letter-spacing: -4px;
}

.contacts-hero h1 em {
  color: #dcb974;
  font-style: normal;
}

.contacts-hero p {
  max-width: 550px;
  margin: 0;

  color: rgba(242, 234, 217, .5);
  font-size: 14px;
  line-height: 1.8;
}

/* CONTACTS */

.contacts {
  padding: 110px 0;
}

.contacts__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.contact-item {
  padding: 30px 0;
  border-bottom: 1px solid rgba(220, 185, 116, .18);
}

.contact-item span {
  color: #dcb974;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 3px;
}

.contact-item h3 {
  margin: 15px 0 8px;

  font-family: 'Big Shoulders Display', sans-serif;
  font-size: 30px;
  font-weight: 600;
}

.contact-item p {
  margin: 0;

  color: rgba(242, 234, 217, .35);
  font-size: 9px;
  letter-spacing: 1px;
}

.socials {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.socials a {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 45px;

  border: 1px solid rgba(220, 185, 116, .35);

  color: #dcb974;
  font-size: 9px;
  font-weight: 700;

  text-decoration: none;
}

/* MAP */

.map {
  position: relative;
  min-height: 560px;
  overflow: hidden;

  background: #1c1913;
  border: 1px solid rgba(220, 185, 116, .3);
}

.map__grid {
  position: absolute;
  inset: 0;

  background-image:
    linear-gradient(rgba(220,185,116,.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(220,185,116,.07) 1px, transparent 1px);

  background-size: 55px 55px;

  transform: rotate(-8deg) scale(1.3);
}

.map__content {
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
}

.map__pin {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 65px;
  height: 65px;

  margin-bottom: 25px;

  border: 1px solid #dcb974;
  border-radius: 50%;

  color: #dcb974;
  font-size: 30px;
}

.map__content > span {
  color: #dcb974;
  font-size: 9px;
  letter-spacing: 3px;
}

.map__content strong {
  margin: 12px 0 30px;

  font-family: 'Big Shoulders Display', sans-serif;
  font-size: 32px;
}

.map__content button {
  padding: 17px 25px;

  border: 1px solid #dcb974;
  background: transparent;

  color: #dcb974;

  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
}

.map__content button b {
  margin-left: 20px;
  font-size: 18px;
}

/* SCHEDULE */

.schedule {
  padding: 110px 0;
  background: #18150f;
}

.schedule__inner {
  display: flex;
  justify-content: space-between;
  gap: 80px;
}

.schedule__inner > div:first-child > span {
  color: #dcb974;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 3px;
}

.schedule h2 {
  margin: 25px 0 0;

  font-family: 'Big Shoulders Display', sans-serif;
  font-size: clamp(60px, 8vw, 105px);
  line-height: .8;
}

.schedule h2 em {
  color: #dcb974;
  font-style: normal;
}

.schedule__days {
  width: 500px;
}

.schedule__days > div {
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 30px 0;

  border-bottom: 1px solid rgba(220, 185, 116, .18);
}

.schedule__days span {
  color: rgba(242, 234, 217, .4);
  font-size: 9px;
  letter-spacing: 2px;
}

.schedule__days strong {
  color: #dcb974;
  font-family: 'Big Shoulders Display', sans-serif;
  font-size: 40px;
}

/* FOOTER */

.footer {
  padding: 35px 0;
  border-top: 1px solid rgba(220, 185, 116, .18);
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.footer strong {
  font-family: 'Big Shoulders Display', sans-serif;
  font-size: 24px;
}

.footer strong em {
  color: #dcb974;
  font-style: normal;
}

.footer span {
  color: rgba(242, 234, 217, .35);
  font-size: 8px;
  letter-spacing: 1.5px;
}

@media (max-width: 760px) {
  .container {
    width: calc(100% - 32px);
  }

  .contacts-hero {
    padding: 80px 0;
  }

  .contacts-hero h1 {
    font-size: 75px;
  }

  .contacts__grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .map {
    min-height: 400px;
  }

  .schedule__inner {
    flex-direction: column;
  }

  .schedule__days {
    width: 100%;
  }

  .footer__inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>