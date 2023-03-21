<template>
  <div class="about">
    <NavHeader />
    <section>
      <img src="../assets/images/about-placeholder.png" />
      <div class="information">
        <h1>Miogx</h1>
        <p>
          Motion Designer autodidata. Ele vive em Salvador e tem uma paixão por
          sempre estar estudando e se aperfeiçoando em suas habilidades. Ele tem
          habilidades em design gráfico, animação, 3D e VFX. Ele é uma pessoa
          curiosa e sempre está em busca de novos desafios e oportunidades para
          crescer profissionalmente. Ele gosta de explorar as possibilidades
          criativas que a tecnologia oferece e está sempre procurando maneiras
          de integrar novas técnicas em seu trabalho.
        </p>
        <p class="school-definition">
          <b>School</b>
          <span>Enfinity School, Lymonade,Escola de Artes Britanica,</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import NavHeader from "@/components/Header/NavHeader.vue";
export default {
  components: {
    NavHeader,
  },
};
</script>

<style lang="scss" scoped>
.about {
  width: 70%;
  font-family: "Circular Std";
  line-height: 32px;
  section {
    .information {
      max-width: 800px;
    }
    margin-top: 100px;
    display: grid;
    grid-template-columns: auto auto;
    img {
      width: 450px;
    }
    h1 {
      text-align: initial;
      font-size: 70px;
      font-weight: 500;
    }
    p {
      text-align: initial;
      font-size: 14px;
      font-weight: 450;
      color: #818181;
      letter-spacing: -0.05em;
      &.school-definition {
        margin-top: 60px;

        span {
          text-decoration: underline;
          color: #00000079;
        }
        b {
          text-decoration: none;
          margin-right: 20px;
        }
        opacity: 0.8;
      }
    }
  }
}
@media (max-width: 800px) {
  .about {
    width: 100%;
    padding: 0 7px;
    section {
      margin-top: 50px;
      grid-template-columns: auto;
      img {
        width: 100%;
      }

      h1 {
        font-size: 45px;
      }
    }
  }
}
</style>
