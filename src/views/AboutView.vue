<template>
  <div class="about">
    <NavHeader />
    <section>
      <img src="../assets/images/about-placeholder.png" />
      <div class="information">
        <h1>Miogx</h1>
        <p>Hey,</p>
        <p>Além de Miogx, você pode me chamar de Miguel!</p>
        <p>
          Sou um motion designer, curioso e autodidata de 24 anos. Comecei me
          desenvolvendo em jobs convencionais até me encontrar enquanto
          profissional na animação e VFX .
        </p>
        <p>
          Estou sempre apaixonado em buscar novos desafios e explorar as
          possibilidades que a tecnologia me permite criar, para continuar
          fazendo história com grandes nomes dentro e fora do Brasil.
        </p>
        <p class="school-definition">
          <b>School</b>
          <span>Enfinity School, Lymonade,Escola de Artes Britanica.</span>
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
  line-height: 32px;
  section {
    .information {
      max-width: 800px;
    }
    margin-top: 100px;
    display: grid;
    grid-template-columns: auto auto;
    img {
      width: 550px;
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
