<template>
  <div class="about">
    <NavHeader />
    <section>
      <img src="../assets/images/about-placeholder.png" />
      <div>
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
          <span>School</span>
          Enfinity School, Lymonade,Escola de Artes Britanica,
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
  font-family: "Circular Std Book";
  section {
    margin-top: 100px;
    display: grid;
    grid-template-columns: auto auto;
    h1 {
      text-align: initial;
      font-size: 30px;
      font-weight: 500;
    }
    p {
      text-align: initial;
      font-size: 14px;
      color: #818181;
      &.school-definition {
        margin-top: 60px;

        span {
          text-decoration: none;
          margin-right: 20px;
        }
        text-decoration: underline;
        color: #000000;
        opacity: 0.8;
      }
    }
  }
  @media (max-width: 800px) {
    section {
      grid-template-columns: auto;
    }
  }
}
</style>
